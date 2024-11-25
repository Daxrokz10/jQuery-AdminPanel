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

    // // FARM METER

    // let bar = new ProgressBar.SemiCircle("#container", {
    //     strokeWidth: 12,
    //     color: "white",
    //     trailColor: "rgba(255,255,255, 0.4)",
    //     trailWidth: 12,
    //     easing: "easeInOut",
    //     duration: 1400,
    //     svgStyle: null,
    //     text: {
    //       value: "",
    //       alignToBottom: false,
    //       className: "progressbar__label"
    //     },

    //     // Set default step function for all animate calls
    //     step: (state, bar) => {
    //       bar.path.setAttribute("stroke", state.color);
    //       var value = Math.round(bar.value() * 100);
    //       if (value === 0) {
    //         bar.setText("");
    //       } else {
    //         bar.setText(value);
    //       }

    //       bar.text.style.color = state.color;
    //     }
    //   });
    //   bar.animate(0.2); // Number from 0.0 to 1.0

    function createProgressBar(containerId, animateTo) {
        let bar = new ProgressBar.SemiCircle(containerId, {
            strokeWidth: 12,
            color: "white",
            trailColor: "rgba(255,255,255, 0.4)",
            trailWidth: 12,
            easing: "easeInOut",
            duration: 1400,
            svgStyle: null,
            text: {
                value: "",
                alignToBottom: false,
                className: "progressbar__label"
            },
            step: (state, bar) => {
                bar.path.setAttribute("stroke", state.color);
                var value = Math.round(bar.value() * 100);
                if (value === 0) {
                    bar.setText("");
                } else {
                    bar.setText(value);
                }
                bar.text.style.color = state.color;
            }
        });
        bar.animate(animateTo); // Animate to the given value
    }

    // Initialize four progress bars with different IDs and values
    createProgressBar("#container1", 0.2); // Water meter
    createProgressBar("#container2", 0.5); // Electricity meter
    createProgressBar("#container3", 0.15); // Gas meter
    createProgressBar("#container4", 0.9); // Internet meter

    

});
