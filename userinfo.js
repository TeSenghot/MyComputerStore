
let username, email;
    document.getElementById("submit").onclick= function()
{
    username=document.getElementById("username").value;
    console.log(username);
    email=document.getElementById("email").value;
    document.getElementById("myp1").textContent=`${username}`;
    document.getElementById("myp2").textContent=`${email}`;

    document.getElementById("info").style.display='block';
} ;

let decbt= document.getElementById("decbt");
let resbt= document.getElementById("resbt");
let incbt = document.getElementById("incbt");

decbt.onclick=function(){
    document.getElementById("agechoose").textContent="I'm Below 18";
};
resbt.onclick=function(){
    document.getElementById("agechoose").textContent="I'm 18 years old";
};
incbt.onclick=function(){
    document.getElementById("agechoose").textContent="I'm older than 18";
};