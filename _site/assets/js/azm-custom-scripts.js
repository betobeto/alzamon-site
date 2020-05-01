$(document).ready(function () {
    console.log("AZM Custom Scripts loaded");
    // enable lightgallery on comicspages component
        $("#comicPages").lightGallery({
            thumbnail:true,
            download:false
        }); 

    // enable lightgallery on sketchbook component
    $("#portfolio-grid, #sketchbook-grid").lightGallery({
        thumbnail:true,
        download:false,
        selector: "a"
    }); 
});