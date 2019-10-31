window.onscroll = function () {
	if (window.innerWidth > 991) {
			wider();
	}
};

window.onresize = function () {
	onwidth();
};


var navigation = document.getElementById('navigation-bar');
var position = navigation.offsetTop;
var date = document.getElementById('datenav');
var shevron = document.getElementById('chevron');
var bars = document.getElementById('barsId');
var logo = document.getElementById('big');
var signin = document.getElementById('signin');
var subs = document.getElementById('subs');

function wider() {
	if (window.pageYOffset > position + 150) {
			smallnav();
	} else {
			bignav();
	}
}


function onwidth() {
	if (window.innerWidth < 991) {
			smallnav();
	} else {
			bignav();
	}
}

function bignav() {
	navigation.style.height = '9rem';
	navigation.style.paddingTop = '5rem';
	navigation.style.paddingBottom = '1rem';
	navigation.style.maxWidth = '131rem';
	date.style.display = 'block';
	date.style.bottom = '0';
	shevron.style.display = 'inline';
	bars.style.color = '#f72210';
	logo.style.width = '39.6rem';
	logo.style.height = '6rem';
	logo.style.left = '50%';
	logo.style.top = '1.5rem';
	signin.style.fontSize = '1.8rem';
	signin.style.bottom = '1rem';
	signin.style.cursor = 'pointer';
}

function smallnav() {
	navigation.style.height = '5rem';
	navigation.style.paddingTop = '0.3rem';
	navigation.style.paddingBottom = '0.3rem';
	navigation.style.maxWidth = '100%';
	navigation.style.alignItems = 'center';
	date.style.display = 'none';
	bars.style.right = '-5rem';
	bars.style.color = '#fb9a94';
	bars.style.top = '-1rem';
	bars.style.margin = '0 2rem'
	bars.style.fontSize = '3rem';
	logo.style.width = '13.2rem';
	logo.style.height = '2rem';
	logo.style.left = '10rem';
	logo.style.top = '1rem';
	signin.style.right = '5rem';
	signin.style.fontSize = '1.8rem';
	signin.style.bottom = '0';
	subs.style.padding = '0.3rem 0 0.3rem 1.2rem';
	signin.style.cursor = 'pointer';
}