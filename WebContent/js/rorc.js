$(document).ready(function () {
    let cafebtn = $('#cafebtn')
    let restbtn = $('#restbtn')
    let cafe = $('#cafe')
    let rest = $('#rest')
    let cdata = $(cafebtn).detach();
    let rdata = $(restbtn).detach();
    let ul = $('#navbarResponsive>ul');
    if ($.cookie('rorc') == "cafe") {
        ul.prepend(cdata)
        console.log("asd");
    } else {
        ul.prepend(rdata)
        console.log(rdata);
    }
    $(cafebtn).click(function () {
        $.cookie('rorc', 'cafe');
        cdata = $(cafebtn).detach();
        ul.prepend(rdata)
        $(cafe).toggleClass("show");
        $(rest).toggleClass("show");
    })
    $(restbtn).click(function () {
        $.cookie('rorc', 'rest');
        rdata = $(restbtn).detach();
        ul.prepend(cdata)
        $(cafe).toggleClass("show");
        $(rest).toggleClass("show");
    })
})