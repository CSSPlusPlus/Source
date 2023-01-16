"use strict"

var fullwidth = element("full-width")
var fullheight = element("full-height")
var fullsize = element("full-size")

var flexcenter = element("flex-children-center")

for (let i = 0; i < fullwidth; i++) {
    setFullwidth(fullwidth[i])
}

for (let i = 0; i < fullheight; i++) {
    setFullheight(fullheight[i])
}

for (let i = 0; i < fullsize; i++) {
    setFullsize(fullsize[i])
}

function setFullwidth(elem) {
    elem.style.width = "100%"
}

function setFullheight(elem) {
    elem.style.height = "100%"
}

function setFullsize(elem) {
    elem.style.width = "100%"
    elem.style.height = "100%"
}

function element(classname) {
    document.getElementsByClassName(classname)
}