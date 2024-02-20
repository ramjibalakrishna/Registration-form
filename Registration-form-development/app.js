const  form= document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success=true;

    if(usernameVal==='')
    {
        setError(username,'Username is required');
        success=false;
    }
    else{
        setSuccess(username)
    }

    if(emailVal==='')
    {
        setError(email,'Email is required');
        success=false;
    }
    else if(!validateEmail(emailVal))
    {
        setError(email,'please enter valid email')
    }

    if(passwordVal==='')
    {
    setError(password,'Password is required')
    success=false;
    }
    else if(passwordVal.length<8)
    {
    setError(password,'Password must be atleast 8 character')
    if(success=true)
    {
        setSuccess(email)
    }

    }
    

    if(cpasswordVal===''){
        setError(cpassword,'Confirm password is required')
        success=false;
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,"password does not match")
    }
    else
    {setSuccess(cpassword)}
    return success;
}

function setError(element, message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerHTML=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerHTML = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};