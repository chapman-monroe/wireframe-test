function scrollDown(){
	$('body').animate({ scrollTop: $('.about').offset().top }, 1000);

}

function scrollUp(){
	$('body').animate({ scrollTop: $('.home').offset().top }, 1000);
}