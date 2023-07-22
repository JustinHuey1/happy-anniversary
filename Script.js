var anniversaryDate = new Date("2023-07-22");
var anniversaryMonth = anniversaryDate.getUTCMonth();
var anniversaryDay = anniversaryDate.getUTCDate();

var todaysDate = new Date();
var todaysMonth = todaysDate.getUTCMonth();
var todaysDay = todaysDate.getUTCDate();

if (anniversaryMonth === todaysMonth && anniversaryDay === todaysDay){
    alert("HAPPY ANNIVERSARY BEBE!!!");
}

var countDownDate = anniversaryDate.getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
        
    var distance = countDownDate - now;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    $("#timer").text(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "until our anniversary");
        
    if (distance < 0) {
        $("#timer").text("OUR ANNIVERSARY IS TODAY!");
    }
}, 1000);

function confirmClick(prompt) {
    if (confirm(prompt) === true) {
        alert("I love you moreeeeeeeeeeeeeeeeeeeeeee");
      } else {
        confirmClick('I SAID I LOVE YOU!!!!! DO YOU LOVE ME HUH HUH?\nOk for yes and cancel for no');
      }
}