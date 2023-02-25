const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
var today = d.getHours();

document.body.style.backgroundColor = "black";

if (today >= 21 && today <= 24) {
 $(".vid").attr("hidden",false);
 $(".main").attr("hidden",true);

 // alert(today);
} else {
  $(".vid").attr("hidden",true);
  $(".main").attr("hidden",false);
}
