const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function showError(input,message){
  const formControl=input.parentElement;
  formControl.className='form_control error';
  const small=formControl.querySelector('small');
  small.innerText=message;
}
function showSuccess(input){
  const formControl=input.parentElement;
  formControl.className='form_control success';
}
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim()===""){
      showError(input,`${getFieldName(input)} is required`);
    }
    else{
      showSuccess(input);
    }
  });
}
function getFieldName(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
};

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input)){
    showSuccess(input);
  }
  else{
    showError(input,'Email is not valid');
  }
};

function checkLength(input1,input2){
  if(input1.value!= input2.value){
    showError(input2,'Password do not match');
  }
  else{
    showSucess(input2);
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([username,email,password,password2]);
validateEmail(email);
checkLength(password,password2);
});
