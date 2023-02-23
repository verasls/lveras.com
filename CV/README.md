## My CV

The structure of my CV was built with the [datadrivencv](http://nickstrayer.me/datadrivencv/) R package. I strongly recommend you take a look at it.

Compared to the original version of the package, as linked above, here I modified the layout of the CV with some LaTeX code.

## Structure

This repo contains the source code of my academic and professional CV and the rendered pdf file.

The main files are:

- [`cv.Rmd`](cv.Rmd)/[`prof_cv.Rmd`](prof_cv.Rmd): Source template for the CV.
- [`cv_printing_functions.R`](cv_printing_functions.r): The definitions of the functions needed to build the CV.
- [`columns.tex`](columns.tex): Definition of a custom LaTeX environment.

The rendered pdf of my CV. The academic version can be downloaded [here](https://github.com/verasls/verasls.github.io/raw/master/CV/cv.pdf) and the professional version [here](https://github.com/verasls/verasls.github.io/raw/master/CV/prof_cv.pdf).

There is also a [`Makefile`](Makefile) to render the CV.
