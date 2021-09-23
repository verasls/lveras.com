## My CV

The structure of my CV was built with the [datadrivencv](http://nickstrayer.me/datadrivencv/) R package. I strongly recommend you take a look at it.

## Structure

This repo contains the source code of my CV and the rendered pdf and html files. These files were rendered with the [pagedown](https://pagedown.rbind.io) package.

The main files are:

- ['cv.rmd'](cv.rmd): Source template for the CV.
- ['cv_printing_functions.r'](cv_printing_functions.r): The definitions of the functions needed to build the CV.
- ['dd_cv.css'](dd_cv.css): Custom CSS file to build the CV.
- ['render_cv.r'](render_cv.r): R script for rendering both pdf and html versions of the CV at the same time. This function outputs two files:
    - 'lv_cv.pdf': The pdf version of my CV. Can be downloaded [here](https://github.com/verasls/verasls.github.io/raw/master/CV/lv_cv.pdf).
    - 'lv_cv.html': The html version of my CV. You can view it [here](https://lveras.com/CV/lv_cv.html).
