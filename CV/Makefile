## make     : Renders pdf and html version of my CV
lv_cv.pdf lv_cv.html: render_cv.r cv.rmd cv_printing_functions.r dd_cv.css
	R CMD BATCH render_cv.r

## clean    : Removes auto-generated files
clean:
	\rm -f *.Rout .Rdata

## cleanall : Removes auto-generated files, including pdf and html files
cleanall:
	\rm -f *.Rout .Rdata lv_cv.pdf lv_cv.html

.PHONY : help
help : Makefile
	@sed -n 's/^##//p' $<
