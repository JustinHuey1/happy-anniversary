var anniversaryDate = new Date("2022-07-22");
var anniversaryMonth = anniversaryDate.getMonth();
var anniversaryDay = anniversaryDate.getDate();

var todaysDate = new Date();
var todaysMonth = todaysDate.getMonth();
var todaysDay = todaysDate.getDate();

if (anniversaryMonth === todaysMonth && anniversaryDay === todaysDay){
    alert("HAPPY ANNIVERSARY BEBE!!!");
}

console.log(anniversaryMonth);
console.log(anniversaryDate);
console.log(todaysMonth);
console.log(todaysDay);