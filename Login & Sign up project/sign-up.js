console.log("javascript");
var obj={};
var arr=[];

var Name=document.getElementsByName("name")[0];
var email=document.getElementsByName("email")[0];
var number=document.getElementsByName("number")[0];
var password=document.getElementsByName("password")[0];
var pass=document.getElementsByName("pass")[0];

function changeHandler(e,type)
{
    if(type=="name"){
        obj["name"] = e.target.value;
    }
    else if(type=="email"){
        obj["email"] = e.target.value;
    }
    else if(type=="number"){
        obj["number"] = e.target.value;
    }
    else if(type=="password"){
        obj["password"] = e.target.value;
    }
    else{
        obj["pass"] = e.target.value;
    }
}
function clickHandler()
{
    console.log(Object.keys(obj));
    if(Object.keys(obj).length ==5)
    {
        arr.push(obj);
        localStorage.setItem("users Data",JSON.stringify(arr)); //pass it as string so JSON is used <----> (permanent storage)
       // sessionStorage.setItem("Users Data",JSON.stringify(arr)) //temporarly store the data
    }
    Name.value="";
    email.value="";
    number.value=""; //not need 
    password.value="";
    pass.value="";
    obj={};
}

