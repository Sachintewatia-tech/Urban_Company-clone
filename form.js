document.querySelector("#btn1").addEventListener("click",myfunc);
document.querySelector("#log").addEventListener("click",loginFun);
function loginFun(event) {
    event.preventDefault();
    document.getElementById("cont").style.display = "block";
}
function myfunc(event){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
    mail:document.querySelector("#mail").value,
    pass: document.querySelector("#pass").value
}
    if(obj.name==""||obj.mail==""||obj.pass==""){
        alert("Fill All Inputs");
    }
    else{
        window.location.href="index.html";
    }
}
// ============================================================================
document.getElementById("hide").addEventListener("click",cutLoginPage)
function cutLoginPage(){
    document.getElementById("cont").style.display = "none";
    }
// =================================================================================

document.getElementsByClassName("image")[0].addEventListener("click",womenSalon);

function womenSalon(){
    document.querySelector(".women").style.display = "block"
}
document.querySelector("#btn").addEventListener("click",backFunc);
function backFunc(){
    document.querySelector(".women").style.display="none";
}
// ====================================================================================

document.getElementsByClassName("image")[1].addEventListener("click",hairSalon);

function hairSalon(){
    document.querySelector(".hair").style.display = "block"
}
document.querySelector("#btn2").addEventListener("click",backFunction);
function backFunction(){
    document.querySelector(".hair").style.display="none";
}

// ====================================================================================

document.getElementsByClassName("image")[2].addEventListener("click",therapyMen);
function therapyMen(){
    window.location.href="spa.html";
}
// ==================================================================
document.getElementsByClassName("image")[3].addEventListener("click",salonMen);
function salonMen(){
    window.location.href="salonmen.html"
}
// ====================================================
document.getElementsByClassName("image")[4].addEventListener("click",masagMen);
function masagMen(){
    window.location.href="massmen.html"
}
// ======================================================
document.querySelector(".water").addEventListener("click",waterFunc);
function waterFunc(){
    window.location.href="water.html";
}
// ====================================================
document.getElementsByClassName("image1")[1].addEventListener("click",furnFunc);
function furnFunc(){
    window.location.href="furn.html";
}
// ==================================================
document.querySelector(".anti").addEventListener("click",antiFunc);
function antiFunc(){
    window.location.href="anti.html";
}
