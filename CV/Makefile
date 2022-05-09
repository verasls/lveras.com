## make     : Renders pdf and html version of my CV
cv.pdf: cv.Rmd cv_printing_functions.R columns.tex
	Rscript -e 'rmarkdown::render("$<")'

## clean    : Removes auto-generated files
clean:
	\rm -f *.Rout .Rdata *.log

## cleanall : Removes auto-generated files, including pdf and html files
cleanall:
	\rm -f *.Rout .Rdata *.log cv.pdf

.PHONY : help
help : Makefile
	@sed -n 's/^##//p' $<
