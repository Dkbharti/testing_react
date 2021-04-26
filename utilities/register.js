
let emailVal=false
let passVal=false

let validateDate=()=>{
    let birthYear=new Date(document.getElementById("dob").value).getFullYear()    
    let currentYear=new Date().getFullYear()     
    if (currentYear-birthYear<=18){        
        document.getElementById("dobErr").innerText="Your age must be above 18!"
    }else{
        document.getElementById("dobErr").innerText=""
    }
    enableButton();
    
}

let validateEmail=()=>{
    let email=document.getElementById('email').value
    if(email.match(/[A-z0-9]+\@[a-z]+\.(com)/)){
        document.getElementById('emailErr').innerText=""
        emailVal=true
    }
    else{document.getElementById('emailErr').innerText="Please enter valid E-Mail Id"}
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
    enableButton()
}

let enableButton=()=>{
    if(document.getElementById('dobErr').innerText=="" && emailVal && passVal){
        document.getElementById('submitBtn').disabled=false
    }
}

let submitForm=()=>{
    alert('Registration Done Successfully!')
}