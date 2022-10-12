/*global console*/
$(document).ready(function () {

    var section_target = $('.section_target');

    // this the same section_target link but we will make it active
    var activ_link = $('.activ_link');

    //equal icon that will open the sidenav
    var equal_icno = $('span.equal');

    //sidenav
    var mySideNav = $('.myNav');

    //close icon that will close the sidenav
    var closebtn = $('.closebtn');

    var work_gallery = $('.work_gallery');


    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /*======================== START FUNCTIONS =================================*/
    /*
    - when click on rounded down arrow,or on any link inside the sidenav,the page will changes it heights  depend on it data scroll number, and it will close the sidenav as well after some time 

    - by clicking on rounded down arrow or sidenav links , there are an animations will make 
    */

    section_target.click(function () {

        $(".slider ul").animate({

            top: -$(".slider").height() * $(this).attr("data-scroll")

        }, 350, function () {

            setTimeout(() => {

                closebtn.click();

            }, 150);

            new WOW().init();

        });

    });
    /*======================================*/

    // open the sidenav
    equal_icno.on("click", function () {

        mySideNav.addClass('openSidnav');

    });

    // close the sidenav
    closebtn.on("click", function () {

        mySideNav.removeClass('openSidnav');

    });


    // add the small red p to the links of sidenav by click
    activ_link.each(function () {

        $(this).on('click', function () {

            $(this).siblings().removeClass('active');

            $(this).addClass('active');

        });

    });

    /*====================================================================*/
    //tho make sure that the hover will be just on active proj,not empty proj
    $(".img_handler").each(function () {

        var background = $(this).css('background-image');

        //if the bg already empty , remove the pointer event
        if (background.indexOf("images/empty_proj.jpg") >= 0) {

            $(this).addClass('no_pointer');

        }

    });

    /*===================================== THE END ================================*/
}); //end document
