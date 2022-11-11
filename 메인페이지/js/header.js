$(function() {
    $('.gnb_menu > li').on('click', function() {
        if(innerWidth < 996) {
            if(selectOn != "" && selectOn != this && !selectOn.classList.contains("on")) {
                selectOn.classList.toggle('on');
                if(!(selectOn.classList.contains("ns"))) selectOn.classList.toggle('sb'); // 추가
            }
            if (toggleChk!= 0) {
                this.classList.toggle('on');
                if(!(this.classList.contains("ns"))) this.classList.toggle('sb'); // 추가
                selectOn = this;
            }    
            toggleChk = 1;
        }
    });
});

$(function() {
    $('.gnb_menu > li > ul').on('click', function() {
        if(innerWidth < 996) {
            toggleChk = 0;
        }
    });
});

let selectOn = "";
let toggleChk = 1;

document.querySelector("#toggle").addEventListener("click", function() {
    document.querySelector(".gnb_nav").style.display = "block";
})

document.querySelector(".cancel").addEventListener("click", function() {
    document.querySelector(".gnb_nav").style.display = "";
    if (selectOn != "" && !selectOn.classList.contains("on")) {
        selectOn.classList.toggle('on');
        selectOn = "";
    }
})

addEventListener("resize", function() {
    if(innerWidth >= 996) {
        document.querySelector(".gnb_nav").style.display = "";
        if (selectOn != "" && !selectOn.classList.contains("on")) {
            selectOn.classList.toggle('on');
            selectOn = "";
        }
    }
})
