$("document").ready(function(){

    // NAVBAR
    const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');

    $button.addEventListener('click', (e) => {
    e.preventDefault();
    $wrapper.classList.toggle('toggled');
    });

    // Initially show the first image
    $('#image1').show();
    $('#image2').hide();

    $('#sidebar-toggle').click(function() {
        $('#sidebar-wrapper').toggleClass('toggled'); // Assuming you have a class for toggled state
        if ($('#sidebar-wrapper').hasClass('toggled')) {
            $('#nav-image-1').hide();
            $('#nav-image-2').show();
        } else {
            $('#nav-image-1').show();
            $('#nav-image-2').hide();
        }
    });

});
