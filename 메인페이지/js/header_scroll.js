function mainHeader() {
        let mainHeaderHeight = document.querySelector("header").clientHeight;
        let mainHeaderImgHeight = document.querySelector("#header_img").clientHeight;
        
        addEventListener("scroll", () => {
        if(innerWidth < 996) {
            if(window.pageYOffset > mainHeaderImgHeight-mainHeaderHeight) document.querySelector("header").classList.add("header_scroll"); 
            else document.querySelector("header").classList.remove("header_scroll");
            }
        });
        if(innerWidth >= 996) document.querySelector("header").classList.remove("header_scroll");
        else if(window.pageYOffset > mainHeaderImgHeight-mainHeaderHeight) document.querySelector("header").classList.add("header_scroll"); 
}
    
addEventListener("resize", () => {
    mainHeader();
});

mainHeader();