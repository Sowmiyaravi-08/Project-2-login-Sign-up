// object to store email and password
var obj={};
var arr=[];  // for sign in screen
var email=document.getElementsByName("email")[0];
var password=document.getElementsByName("password")[0];
function changeHandler(e,type)
{
    if(type=="email"){
        obj["email"] = e.target.value
    }
    else{
        obj["password"] = e.target.value
    }
}
function clickHandler()
{
    if(Object.values(obj).length ==2 && (obj.email !== "" && obj.password !== ""))
    {
        arr.push(obj)
        localStorage.setItem("Users Data",JSON.stringify(arr)) //pass it as string so JSON is used <----> (permanent storage)
        sessionStorage.setItem("Users Data",JSON.stringify(arr)) //temporarly store the data
    }
    email.value="";
    password.value=""; //not need 
    obj={};
    // console.log(arr);
}
    // to get data from key--> Users Data
function getDataHandler()
{
    console.log(localStorage.getItem("Users Data"));               // output--->String JSON [{}]
    console.log(JSON.parse(localStorage.getItem("Users Data")));   // get the output as array format
    // console.log(localStorage.removeItem("Users Data"));         // remove data 
}
