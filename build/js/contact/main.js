//Faq Tab change

$(function(){
        $('#faq ul.faq-content li').find('.problem').click(function(){
            var $qa_content = $(this).next('div.answer');
            var $index = $(this).parent().index();
            if(!$qa_content.is(':visible')){
                $('#faq ul.faq-content div.answer:visible').slideUp();
            } 
            $qa_content.slideToggle();
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().removeClass('active');

        }).siblings().addClass('answer').hide();
        
});



