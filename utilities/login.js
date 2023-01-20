let emailBol=false;
let passVal=false;
let validateEmail=()=>{
    let email=document.getElementById('email').value
    if(email.match(/[A-z0-9]+\@[a-z]+\.(com)/)){
        document.getElementById('emailErr').innerText=""
        emailBol=true;
    }
    else{
        document.getElementById('emailErr').innerText="Please enter valid E-Mail Id"
        
    }
    enableButton();
}
let validatePass=()=>{
    let password=document.getElementById('pass').value
    if(password.match(/[@$!%*#?&]/) && password.match(/[A-Z]/) && password.length>=8){
        document.getElementById('passErr').innerText=""
        passVal=true
    }else{
        document.getElementById('passErr').innerText="Password must contain one special character and one uppercase letter"
        
    }
    enableButton();

}

let enableButton=()=>{
    console.log(emailBol,passVal);
    
    if(emailBol==true && passVal==true){
        document.getElementById('submitBtn').disabled=false
        
    }else{
        document.getElementById('submitBtn').disabled=true
    }
    
}

let formSubmit=()=>{
    alert('Login Successful')
}