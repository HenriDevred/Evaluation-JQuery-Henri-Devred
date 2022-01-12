// /* --------------------------------------------------------------------------



// -------------------------------------------------------------------------- */

// Première Partie :

$(function () {

    redSquareExperiment()
    btnSupp()
    switchClass()
    agrandir()
    retrecir()
})
// Question 1 :
function redSquareExperiment() {
    $('.custom-control-input').on('click'), function () {

        $('.redsquare-app').removeClass('is-active')
        $(this).addClass('is-active')


    }
}
function btnSupp() {

    $('.custom-control-input').on('click'), function () {

        $('.redsquare-controls').removeAttribute('disabled')
        $(this).getAttribute('disabled')
    }
}
function switchClass() {

    $('.custom-control-input').on('click'), function () {

        $('.redsquare-controls').toggleClass('.btn-light .btn-primary')
    }
}
// Question 2 :
function move() {
}

// Question 3 :

function agrandir() {
    $('.fa-expand').click(function () {
        $('.fa-expand').css('width', 'height', '+20px');
    });
    $('.fa-expand').click(function () {
        $('.fa-expand').css('width', 'height', '-20px');
    });
};

// Question 4 :

function retrecir() {
    $('.fa-compress').click(function () {
        $('.fa-compress').css('width', 'height', '-20px');
    });
    $('.fa-compress').click(function () {
        $('.fa-compress').css('width', 'height', '+20px');
    });
};

// Question 5 :





// Deuxiéme Partie

// Question 1

$(function () {

    jumbotron()
})


function jumbotron() {
    // Question 1 :
    $(".jumbotron").on("click")(function () {
        $("a").remove();
        // Question 2 :
        $("ul").addClass("list-group")
        $("li").addClass("list-group-item")


        // Question 3 :

        $('<i class="fa fa-plus-circle"></i>').insertBefore('a')

        // Question 4 :




    }
    )
}




