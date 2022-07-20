document.querySelector("button").addEventListener("click",myfunc);
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
        alert("fill all inputs");
    }
    // else{
        // window.location.href="index.html";
    // }
}