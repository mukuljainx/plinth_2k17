$('.reg-btn').click(function() {
    $('.reg-form').addClass('reg-form-display');
    $('.wrapper-form').addClass('reg-form-display');
});


    if($('.reg-form').hasClass('reg-form-display')){
        $("[class != 'reg-form']").click(function() {
            $('.reg-form').removeClass('reg-form-display');
            $('.wrapper-form').removeClass('reg-form-display');
        });    
    }
    




