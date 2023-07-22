var anniversaryDate = new Date("2022-07-22");
var anniversaryMonth = anniversaryDate.getUTCMonth();
var anniversaryDay = anniversaryDate.getUTCDate();

var todaysDate = new Date();
var todaysMonth = todaysDate.getUTCMonth();
var todaysDay = todaysDate.getUTCDate();

if (anniversaryMonth === todaysMonth && anniversaryDay === todaysDay){
    alert("HAPPY ANNIVERSARY BEBE!!!");
}

console.log(anniversaryMonth);
console.log(anniversaryDay);
console.log(todaysMonth);
console.log(todaysDay);

function confirmClick() {
    let text = "I love you! Do you love me?\nOk for yes and cancel for no";
    if (confirm(text) == true) {
        alert("I love you moreeeeeeeeeeeeeeeeeeeeeee");
      } else {
        confirmClick();
      }
};