# This file contains all the code needed to parse and print various
# sections of your CV from data. Feel free to tweak it as you desire!


#' Create a CV_Printer object.
#'
#' @param data_location Path of the spreadsheets holding all your data.
#'   This can be either a URL to a Google sheet with multiple sheets
#'   containing the four data types or a path to a folder containing four
#'   `.csv`s with the necessary data.
#' @param source_location Where is the code to build your CV hosted?
#' @param pdf_mode Is the output being rendered into a pdf? Aka do links
#'   need to be stripped?
#' @param sheet_is_publicly_readable If you're using google sheets for data,
#'   is the sheet publicly available? (Makes authorization easier.)
#' @return A new `CV_Printer` object.
create_CV_object <- function(data_location,
                             pdf_mode = FALSE,
                             sheet_is_publicly_readable = TRUE) {

  cv <- list(
    pdf_mode = pdf_mode,
    links = c()
  )

  is_google_sheets_location <- stringr::str_detect(
    data_location, "docs\\.google\\.com"
  )

  if (is_google_sheets_location) {
    if (sheet_is_publicly_readable) {
      # This tells google sheets to not try and authenticate. Note that this
      # will only work if your sheet has sharing set to "anyone with link
      # can view"
      googlesheets4::gs4_deauth()
    } else {
      # My info is in a public sheet so there's no need to do
      # authentication but if you want to use a private sheet, then this
      # is the way you need to do it. Designate project-specific cache so
      # we can render Rmd without problems
      options(gargle_oauth_cache = ".secrets")
    }

    read_gsheet <- function(sheet_id) {
      googlesheets4::read_sheet(
        data_location, sheet = sheet_id, skip = 1, col_types = "c"
      )
    }
    cv$entries_data  <- read_gsheet(sheet_id = "entries")
    cv$skills        <- read_gsheet(sheet_id = "language_skills")
    cv$text_blocks   <- read_gsheet(sheet_id = "text_blocks")
    cv$contact_info  <- read_gsheet(sheet_id = "contact_info")
  } else {
    # Want to go old-school with csvs?
    cv$entries_data <- readr::read_csv(
      paste0(data_location, "entries.csv"), skip = 1
    )
    cv$skills <- readr::read_csv(
      paste0(data_location, "language_skills.csv"), skip = 1
    )
    cv$text_blocks <- readr::read_csv(
      paste0(data_location, "text_blocks.csv"), skip = 1
    )
    cv$contact_info <- readr::read_csv(
      paste0(data_location, "contact_info.csv"), skip = 1
    )
  }


  extract_year <- function(dates) {
    date_year <- stringr::str_extract(dates, "(20|19)[0-9]{2}")
    date_year[is.na(date_year)] <- lubridate::year(
      lubridate::ymd(Sys.Date())
    ) + 10

    date_year
  }

  parse_dates <- function(dates) {

    date_month <- stringr::str_extract(
      dates, "(\\w+|\\d+)(?=(\\s|\\/|-)(20|19)[0-9]{2})"
    )
    date_month[is.na(date_month)] <- "1"

    paste("1", date_month, extract_year(dates), sep = "-") %>%
      lubridate::dmy()
  }

  cv
}


# Remove links from a text block and add to internal list
sanitize_links <- function(cv, text) {
  if (cv$pdf_mode) {
    link_titles <- stringr::str_extract_all(text, "(?<=\\[).+?(?=\\])")[[1]]
    link_destinations <- stringr::str_extract_all(
      text, "(?<=\\().+?(?=\\))"
    )[[1]]

    n_links <- length(cv$links)
    n_new_links <- length(link_titles)

    if (n_new_links > 0) {
      # add links to links array
      cv$links <- c(cv$links, link_destinations)

      # Build map of link destination to superscript
      link_superscript_mappings <- purrr::set_names(
        paste0("<sup>", (1:n_new_links) + n_links, "</sup>"),
        paste0("(", link_destinations, ")")
      )

      # Replace the link destination and remove square brackets for title
      text <- text %>%
        stringr::str_replace_all(stringr::fixed(link_superscript_mappings)) %>%
        stringr::str_replace_all("\\[(.+?)\\]", "\\1")
    }
  }

  list(cv = cv, text = text)
}

#' @description Take a position data frame and the section id desired and
#' prints the section to markdown.
#' @param section_id ID of the entries section to be printed as encoded by
#'   the `section` column of the `entries` table
print_section <- function(cv, section_id, glue_template = "default") {

  if (glue_template == "default") {
    glue_template <- "
### {title}

{loc}

{institution}

{timeline}

{description_bullets}
\n\n\n"
  }

  section_data <- dplyr::filter(cv$entries_data, section == section_id)

  # Take entire entries data frame and removes the links in descending order
  # so links for the same position are right next to each other in number.
  for (i in 1:nrow(section_data)) {
    for (col in c("title", "description_bullets")) {
      strip_res <- sanitize_links(cv, section_data[i, col])
      section_data[i, col] <- strip_res$text
      cv <- strip_res$cv
    }
  }

  print(glue::glue_data(section_data, glue_template))

  invisible(strip_res$cv)
}



#' @description Prints out text block identified by a given label.
#' @param label ID of the text block to print as encoded in `label`
#'   column of `text_blocks` table.
print_text_block <- function(cv, label) {
  text_block <- dplyr::filter(cv$text_blocks, loc == label) %>%
    dplyr::pull(text)

  strip_res <- sanitize_links(cv, text_block)

  cat(strip_res$text)

  invisible(strip_res$cv)
}



#' @description Construct a bar chart of skills
#' @param out_of The relative maximum for skills. Used to set what a fully
#'   filled in skill bar is.
print_skill_bars <- function(cv,
                             out_of = 5,
                             bar_color = "#969696",
                             bar_background = "#d9d9d9",
                             glue_template = "default") {

  if (glue_template == "default") {
    glue_template <- "
<div
  class = 'skill-bar'
  style = \"background:linear-gradient(to right,
                                      {bar_color} {width_percent}%,
                                      {bar_background} {width_percent}% 100%)\"
>{skill}</div>"
  }
  cv$skills %>%
    dplyr::mutate(width_percent = round(100 * as.numeric(level) / out_of)) %>%
    glue::glue_data(glue_template) %>%
    print()

  invisible(cv)
}

#' @description List of all links in document labeled by their
#' superscript integer.
print_links <- function(cv) {
  n_links <- length(cv$links)
  if (n_links > 0) {
    cat("
Links {data-icon=link}
--------------------------------------------------------------------------------

<br>


")

    purrr::walk2(cv$links, 1:n_links, function(link, index) {
      print(glue::glue("{index}. {link}"))
    })
  }

  invisible(cv)
}

#' @description Contact information section with icons
print_contact_info <- function(cv) {
  glue::glue_data(
    cv$contact_info,
    "<contact> \\textcolor{dark-gray}{\\faIcon{<icon>}} \\\\ ",
    .open = "<", .close = ">"
  )
}

#' @description Education section
print_education <- function(cv) {
  d <- dplyr::filter(cv$entries_data, section == "education")
  edu <- glue::glue_data(
    d,
    "

     \\vspace{0.3em}

     \\begin{cols}
     \\begin{col}{0.15\\textwidth}
     \\flushright \\textcolor{light-gray}{<start> - <end>}
     \\end{col}
     \\begin{col}{0.02\\textwidth}
     \\textcolor{white}{x}
     \\end{col}
     \\begin{col}{0.83\\textwidth}
     \\textbf{<title>}, <institution>

     \\textcolor{dark-gray}{\\faIcon{map-marker-alt}} <loc>

     \\noindent \\small • <description_1>
     \\end{col}
     \\end{cols}

     ",
    .open = "<", .close = ">"
  )

  # Remove the description if no description is provided
  if (any(is.na(d$description_1))) {
    na <- which(is.na(d$description_1))
  }
  for (i in na) {
    to_sub <- stringr::str_locate(edu[[i]], "NA")[[1]] - 19
    substr(edu[[i]], to_sub, to_sub) <- "%"
  }
  edu
}

#' @description Awards section
print_awards <- function(cv) {
  d <- dplyr::filter(cv$entries_data, section == "awards")
  glue::glue_data(
    d,
    "

     \\vspace{0.3em}

     \\begin{cols}
     \\begin{col}{0.15\\textwidth}
     \\flushright \\textcolor{light-gray}{<end>}
     \\end{col}
     \\begin{col}{0.02\\textwidth}
     \\textcolor{white}{x}
     \\end{col}
     \\begin{col}{0.83\\textwidth}
     \\textbf{<title>}, <loc>
     \\end{col}
     \\end{cols}

     ",
    .open = "<", .close = ">"
  )
}

#' @description Papers section
print_papers <- function(cv) {
  d <- dplyr::filter(cv$entries_data, section == "papers")
  glue::glue_data(
    d,
    "

     \\vspace{0.3em}

     \\begin{cols}
     \\begin{col}{0.15\\textwidth}
     \\flushright \\textcolor{light-gray}{<end>}
     \\end{col}
     \\begin{col}{0.02\\textwidth}
     \\textcolor{white}{x}
     \\end{col}
     \\begin{col}{0.83\\textwidth}
     \\textbf{<title>}.

     \\textit{<loc>}

     <description_1>
     \\end{col}
     \\end{cols}

     ",
    .open = "<", .close = ">"
  )
}

#' @description Conference section
print_conference <- function(cv) {
  d <- dplyr::filter(cv$entries_data, section == "conference")
  glue::glue_data(
    d,
    "

     \\vspace{0.3em}

     \\begin{cols}
     \\begin{col}{0.15\\textwidth}
     \\flushright \\textcolor{light-gray}{<end>}
     \\end{col}
     \\begin{col}{0.02\\textwidth}
     \\textcolor{white}{x}
     \\end{col}
     \\begin{col}{0.83\\textwidth}
     \\textbf{<title>}.

     <loc>

     \\textcolor{dark-gray}{\\faIcon{map-marker-alt}} <institution>

     <description_1>
     \\end{col}
     \\end{cols}

     ",
    .open = "<", .close = ">"
  )
}
