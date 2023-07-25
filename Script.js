var anniversaryDate = new Date("2023-07-29");
var anniversaryMonth = anniversaryDate.getUTCMonth();
var anniversaryDay = anniversaryDate.getUTCDate();

var todaysDate = new Date();
var todaysMonth = todaysDate.getUTCMonth();
var todaysDay = todaysDate.getUTCDate();

if (anniversaryMonth === todaysMonth && anniversaryDay === todaysDay){
    alert("HAPPY ANNIVERSARY BEBE!!!");

    function newHeart () {
        var hearts = $('.heart');
        if (hearts.length >= 24) return setTimeout(newHeart, 1000);
        var c = $('.heart-container:first').clone();
        var anims = ['swing', 'spin'];
        var a = anims[Math.round(Math.random())];
        c.find('.heart')
                    .css('opacity', 0.2 + Math.random() * 0.8)
                    .css('-webkit-animation-name', a)
                    .css('-moz-animation-name', a);
        c.css('left', (10 + Math.random() * ($('body').innerWidth() - 10)) + 'px');
        c.css('-webkit-animation-name', 'fall');
        c.css('-webkit-animation-duration', (4 + Math.random() * 14) + 's');
        c.css('-webkit-transform', 'scale(' + (0.4 + Math.random() * 2) + ')');
        c.css('-moz-animation-duration', (4 + Math.random() * 14) + 's');
        c.css('-moz-transform', 'scale(' + (0.4 + Math.random() * 2) + ')');
        $('#hearts').append(c);
        c.bind('animationend', function () { c.remove(); });
        c.bind('webkitAnimationEnd', function () { c.remove(); });
        setTimeout(newHeart, 200);
    }

    setTimeout(newHeart, 200);
}

var countDownDate = anniversaryDate.getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
        
    var distance = countDownDate - now;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "until our anniversary");
        
    if (distance < 0) {
        $("#countdown").html("OUR ANNIVERSARY IS TODAY!");
    }
}, 1000);

var huhCounter = 0;

function confirmClick(prompt) {
    if (confirm(prompt) === true) {
        alert("I love you moreeeeeeeeeeeeeeeeeeeeeee\n hehe");
    } else {
        huhCounter += 1;

        var huhText = '';
        for (var i = 0; i < huhCounter; i++) {
            huhText += ' HUH'
        }
        confirmClick('I SAID I LOVE YOU!!!!! DO YOU LOVE ME' + huhText + '?\nOk for yes and cancel for no');
      }
}

var colours=new Array('#f00', '#f06', '#f0f', '#f6f', '#f39', '#f9c'); // colours of the hearts
var minisize=50; // smallest size of hearts in pixels
var maxisize=100; // biggest size of hearts in pixels
var hearts=100; // maximum number of hearts on screen
var over_or_under="under"; // set to "over" for hearts to always be on top, or "under" to allow them to float behind other objects

/*****************************
*JavaScript Love Heart Cursor*
*  (c)2013+ mf2fm web-design *
*   http://www.mf2fm.com/rv  *
*  DON'T EDIT BELOW THIS BOX *
*****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var herz=new Array();
var herzx=new Array();
var herzy=new Array();
var herzs=new Array();
var kiss=false;

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(mwah);

function mwah() { if (document.getElementById) {
  var i, heart;
  for (i=0; i<hearts; i++) {
    heart=createDiv("auto", "auto");
    heart.style.visibility="hidden";
	heart.style.zIndex=(over_or_under=="over")?"1001":"0";
    heart.style.color=colours[i%colours.length];
	heart.style.pointerEvents="none";
    if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
    else heart.style.opacity=0.45;
    heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
    document.body.appendChild(heart);
    herz[i]=heart;
	herzy[i]=false;
  }
  set_scroll();
  set_width();
  herzle();
}}

function herzle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<hearts; c++) if (herzy[c]===false) {
	  herz[c].firstChild.nodeValue=String.fromCharCode(9829);
      herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
      herz[c].style.top=(herzy[c]=y-minisize)+"px";
      herz[c].style.fontSize=minisize+"px";
	  herz[c].style.fontWeight='normal';
      herz[c].style.visibility='visible';
      herzs[c]=minisize;
      break;
    }
  }
  for (c=0; c<hearts; c++) if (herzy[c]!==false) blow_me_a_kiss(c);
  setTimeout("herzle()", 30);
}

function blow_me_a_kiss(i) {
  herzy[i]-=herzs[i]/minisize+i%2;
  herzx[i]+=(i%5-2)/5;
  if (herzy[i]<sdown-herzs[i] || herzx[i]<sleft-herzs[i] || herzx[i]>sleft+swide-herzs[i]) {
    herz[i].style.visibility="hidden";
    herzy[i]=false;
  }
  else if (herzs[i]>minisize+1 && Math.random()<2.5/hearts) break_my_heart(i);
  else {
    if (Math.random()<maxisize/herzy[i] && herzs[i]<maxisize) herz[i].style.fontSize=(++herzs[i])+"px";
    herz[i].style.top=herzy[i]+"px";
    herz[i].style.left=herzx[i]+"px";
  }
}

function break_my_heart(i) {
  var t;
  herz[i].firstChild.nodeValue=String.fromCharCode(9676);
  herz[i].style.fontWeight='bold';
    herzy[i]=false;
  for (t=herzs[i]; t<=maxisize; t++) setTimeout('herz['+i+'].style.fontSize="'+t+'px"', 60*(t-herzs[i]));
  setTimeout('herz['+i+'].style.visibility="hidden";', 60*(t-herzs[i]));
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}
