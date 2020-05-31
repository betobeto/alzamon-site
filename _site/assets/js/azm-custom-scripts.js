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

    // Isotope: set var + enable
    var $pMasonry = $('.portfolio-masonry').imagesLoaded(
        function(){
            $pMasonry.isotope({
                itemSelector: '.portfolio-masonry-item',
                percentPosition:true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth and gutter-sizer for vertical spacing
                    columnWidth: '.grid-sizer',
                        gutter: '.gutter-sizer'
            }
        });
         // enable data filtering
         $('.portfolio-category-selector a').click(function (e) { 
            var filterValue = $(this).attr('data-filter');
            $pMasonry.isotope({ filter: filterValue });
            //console.log (filterValue);
            e.preventDefault();
        });
    });
// end
});