$('nav a').click(function (e) {
    e.preventDefault()

    let id = $(this).attr('href')
    let alvo = $(id).offset().top

    $('html, body').animate({
        scrollTop: alvo
    }, 500)
})