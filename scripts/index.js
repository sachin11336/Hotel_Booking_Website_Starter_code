var element = document.getElementById("viewless");
/*function expand(){
    x.style.display="block";
    element.innerHTML="View less";
}*/

function expand() {
    var x = document.getElementById('none');
    if (x.style.display === 'none') {
        element.innerHTML="View Less"
      x.style.display = 'block';
    } else {
        element.innerHTML="View More"
      x.style.display = 'none';
    }
  }
  var c= document.getElementById('uname');
  var d= document.getElementById('psw');
  var log= 0;
  function login(){
    localStorage.setItem("username","admin");
  localStorage.setItem("password","admin");
  var u=c.value;
  var j=d.value;
    var username=localStorage.getItem("username");
    var password=localStorage.getItem("password");
    if(u===username && j===password){
      alert("Login Successfully");
      setTimeout(()=>{
        document.getElementById('out').style.display="inline";
      document.getElementById('in').style.display="none";
      }, 36000);
    }else{
      alert("Invalid");
    }
}