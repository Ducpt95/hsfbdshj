var flagEmail = false;
var flagPassword = false;
var flagCofirm = false;
var registerObject = {
    email : "",
    password : ""
};
var localInfo = localStorage.getItem("registerInfo")
	? JSON.parse(localStorage.getItem("registerInfo"))
	: [];
function regexEmail() {
    let email = document.getElementById("email");
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let result = regex.test(email.value); 
    if (!result){
       document.getElementById("errorEmail").style.display = "block";
    } else {
        for(let i=0;i<localInfo.length;i++){
            if(localInfo[i].email===email.value){
                flagEmail = false;
                break;
            } else {
                flagEmail = true;
            }
        }
        if(flagEmail){
                document.getElementById("errorEmail").style.display = "none";
			    registerObject.email = email.value
        } else {
            document.getElementById("errorEmail").style.display = "block";  
            document.getElementById("errorEmail").innerHTML = "Email đã tồn tại";
            console.log("not ok")
        }
    }
}
function regexPassword(){
    let password = document.getElementById("password");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = regex.test(password.value);
     if (!result){
       document.getElementById("errorPassword").style.display = "block";
    } else {
        document.getElementById("errorPassword").style.display = "none";
        flagPassword = true;
    }
}
function confirmPass(){
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    
   if (confirm!==password){
       document.getElementById("errorConfirm").style.display = "block";
    } else {
        document.getElementById("errorConfirm").style.display = "none";
		flagCofirm = true;
        registerObject.password = password;
    }
}
function register(){
if(flagEmail&&flagPassword&&flagCofirm){
    localInfo.push(registerObject);
    localStorage.setItem("registerInfo", JSON.stringify(localInfo));
    alert("Registered successfully")
    window.location.href = "/html/login.html"
}}