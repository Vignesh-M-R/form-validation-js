function validation(){
    
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    var conpass=document.getElementById('conpass').value;
    var mobile=document.getElementById('MobileNumber').value;
    var emails=document.getElementById('emails').value;

    if(user ==""){
        document.getElementById('username').innerHTML="*Please enter your username";
        return false;
    }
    if(user.length <2 || user.lenght>20){
        document.getElementById('username').innerHTML="*username length must be between 2 and 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML="*username must be characters";
        return false;
    }


    if(pass ==""){
        document.getElementById('passwords').innerHTML="*Please enter your password.";
        return false;
    }
    if(pass.length <5 || pass.length>15){
        document.getElementById('passwords').innerHTML="*password length must be between 5 and 15";
        return false;
    }
    if(pass!=conpass){
        document.getElementById('confirm').innerHTML="*password does not match";
        return false;
    }


    if(conpass ==""){
        document.getElementById('confirm').innerHTML="*Please confirm your password";
        return false;
    }


    if(mobile ==""){
        document.getElementById('mobileno').innerHTML="*Please enter your mobile number";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById('mobileno').innerHTML="*mobile number must be digits";
        return false;
    }
    if(mobile.length!=10 || mobile.length >10){
        document.getElementById('mobileno').innerHTML="*mobile number muust be in 10 digits";
        return false;
    }


    if(emails ==""){
        document.getElementById('mail').innerHTML="*Please enter your email id";
        return false;
    }
    if(emails.indexOf('@')<=0){
        document.getElementById('mail').innerHTML="*email id is invalid!";
        return false;
    }
    if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('mail').innerHTML="*email id is invalid";
        return false;
    }


}