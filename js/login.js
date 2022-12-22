var localInfo = localStorage.getItem("registerInfo")
	? JSON.parse(localStorage.getItem("registerInfo"))
	: [];
var flagEmail = false;
var flagPassword = false;
var objectLogin = {
    email : "",
    status : false
}
// var localLogin = localStorage.getItem("loginInfo") ? JSON.parse(localStorage.getItem("loginInfo")) : [];
function checkEmail() {
	let email = document.getElementById("email").value;
    for(let i=0;i<localInfo.length;i++){
    if(localInfo[i].email===email.trim()){
        document.getElementById("errorEmail").style.display = "none";
        objectLogin.email = email;
        flagEmail = true;
        break;
    } else {
        document.getElementById("errorEmail").style.display = "block";
        flagEmail = false;
    }
    }
}
function checkPassword() {
	let password = document.getElementById("password").value;
	for (let i = 0; i < localInfo.length; i++) {
		if (localInfo[i].password == password.trim()) {
			document.getElementById("errorPassword").style.display = "none";
			flagPassword = true;
			break;
		} else {
            flagPassword = false;
		}
	}
}
function login(){
    if(flagEmail&&flagPassword){
    objectLogin.status = true;
    console.log(objectLogin);
    localStorage.setItem("loginInfo",JSON.stringify(objectLogin));
    window.location.href = "/index.html";
    } else if(!flagPassword){
        document.getElementById("errorPassword").style.display = "block";
    }
}
