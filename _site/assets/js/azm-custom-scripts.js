$(document).ready(function () {
    console.log("AZM Custom Scripts loaded");
    // enable lightgallery on comicspages component
        $("#comicPages").lightGallery({
            thumbnail:true
        }); 

    // enable lightgallery on sketchbook component
    $("#portfolio-grid, #sketchbook-grid").lightGallery({
        thumbnail:true,
        selector: "a"
    }); 
});