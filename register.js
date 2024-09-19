
    const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const pass_error = document.getElementById('pass_error');

form.addEventListener('submit',(e)=>
{  
   
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var status = false;
    if(name.value === '' || name.value == null)
        {
            e.preventDefault();
            name_error.innerHTML = "Name is required";
            status = false;
        }else{
            name_error.innerHTML = "";
            status = true;
        }
     if(!email.value.match(email_check))
             {
              e.preventDefault();
            email_error.innerHTML = "valid email is required";
            status = false;
          }else
          {
             email_error.innerHTML = "";
             status = true;
          }

         
    if(password.value.length <=5)
        {
            e.preventDefault();
            pass_error.innerHTML = "password must be more than 8 characters";
            status = false;
        }else
        {
          pass_error.innerHTML = "";
          status = true;
        }
    if(password.value.length >=20)
            {
                e.preventDefault();
                pass_error.innerHTML = "password cannot be more than 20 characters";
            }

    if(password.value === 'password')
                {
                    e.preventDefault();
                    pass_error.innerHTML = "password cannot be password";
                }
    if(status == true){
        alert("signed up successfully");

    }
    else{
     alert("you not sign")
     }            

})
  