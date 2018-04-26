const icono = document.getElementById('js-icon'), menu = document.getElementById('js-nav');

icono.addEventListener('click',function(){
	menu.classList.toggle('js-menu--visible');
});

const elementoReferencia = document.getElementById('js-menu--reference');

elementoReferencia.getBoundingClientRect().top

window.onscroll = function (){
	const show = document.getElementById('js-header'), 
	scroll = document.documentElement.scrollTop;
	if(scroll >= elementoReferencia.getBoundingClientRect().top){
		show.classList.add('js-is-visible--background');
	}
	else{
		show.classList.remove('js-is-visible--background');
	}
}
