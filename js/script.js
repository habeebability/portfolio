const contactBtn = document.querySelector('.contact-btn');

contactBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    

})


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

$(".projects-filter").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "*")
    {
        $('.filter').show('1000');
    }
    else
    {

        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
    }
});

});