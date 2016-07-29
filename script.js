$(() => {
  $('.navbar').hide();
  $(document).scroll(function(){
    let scrollPos = document.body.scrollTop;
        if(scrollPos > 60){
          $('.navbar').fadeIn();
        }else{
          $('.navbar').fadeOut();
        }
        // console.log("scrollPos :",scrollPos);
    });
});
