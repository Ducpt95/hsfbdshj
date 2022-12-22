var localInfo = localStorage.getItem("loginInfo") ? JSON.parse(localStorage.getItem("loginInfo")) : {};
function checkLogin() {
if (localInfo.status) {
    document.getElementById("logOut").style.display = "inline-block";
    document.getElementById("logIn").style.display = "none";
    document.getElementById("signIn").style.display = "none";
} else {
    document.getElementById("logIn").style.display = "inline-block";
	document.getElementById("signIn").style.display = "inline-block";

}
}
function logout() {
    localInfo.status = false;
    localStorage.setItem("loginInfo",JSON.stringify(localInfo));
    document.getElementById("logIn").style.display = "inline-block";
    document.getElementById("signIn").style.display = "inline-block";
    document.getElementById("logOut").style.display = "none";
}