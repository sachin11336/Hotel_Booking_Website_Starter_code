var x=document.getElementById('num');
var y=document.getElementById('Adate');
var z=document.getElementById('Ddate');
function myfunction(){
var d1=y.value;
var d2=z.value;
var date1 = new Date(d1);
var date2 = new Date(d2);
var num=x.value;
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

var output= document.getElementById('fare');
var amount=num*Difference_In_Days*1000;
output.value= amount;
} 