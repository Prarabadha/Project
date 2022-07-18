function Login() {
    
    var usercheck= document.getElementById("username").value;
    var passwordcheck = document.getElementById("password").value;
var x=usercheck;
var b=passwordcheck;


    if ("bhagat"==x&&b=="bhagat123") {
        window.location.href="crypto.html" 

    } 
     if(!("bhagat"==x&&b=="bhagat123")) {
      document.getElementById("msg").innerHTML =
        `***Invalid user name or password***
          plz enter username=bhagat and password=bhagat123`;
    }
}
