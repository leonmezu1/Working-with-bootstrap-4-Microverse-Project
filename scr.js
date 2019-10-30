/* Main function declaration */

window.onscroll = function () {
	if (window.innerWidth > 990) {
			bigwidth();
	}
};

window.onresize = function () {
	enableFunc();
};


/* Variables definition*/

var navigation = document.getElementsByClass("navigation-b");
var position = navigation.offsetTop;
var leftdate = document.getElementsById('datenav');
var chevicon = document.getElementsById('chevron');
var baricon  = document.getElementById('barsId');
var logoBIG  = document.getElementById('big');
var signbutton = document.getElementById('signin');
var subs  		 = document.getElementById('subs');

var jjj = document.getElementById("logoimg")


/* Function Engine */

function bigwidth() {
	if (window.pageYOffset > position + 120) {
			smallnav();
	} else {
			bignav();
	}
}

function enableFunc() {
	if (window.innerWidth < 990) {
			smallnav();
	} else {
			bignav();
	}
}

function bignav() {
	navigation.curre.paddingTop = "5rem";
	navigation.style.paddingBottom = "1rem";
	navigation.style.maxWidth = "131rem";
	leftdate.style.display = 'block';
	leftdate.style.bottom = "5rem";
	shevron.style.display = 'inline';
	baricon.style.color = '#f72210';
	logoBIG.style.width = "39.6 rem";
	logoBIG.style.height = "6rem";
	logoBIG.style.left = "50%";
	logoBIG.style.top = "1.5rem";
	signbutton.style.fontSize = "1.8rem";
	signbutton.style.bottom = "1rem";
	subs.style.padding = "0.8rem";
}

function smallnav() {
	navigation.style.paddingTop = "0.3rem";
	navigation.style.paddingBottom = "0.3rem";
	navigation.style.maxWidth = "100%";
	leftdate.style.display = 'none';
	baricon.style.color = '#fff';
	logoBIG.style.width = "13.2rem";
	logoBIG.style.height = "2rem";
	logoBIG.style.left = "10rem";
	logoBIG.style.top = "1rem";
	signbutton.style.fontSize = "1.4rem";
	signbutton.style.bottom = "0";
	subs.style.padding = "0.6rem";
}
