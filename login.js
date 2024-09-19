
        function func(){
            var email = document.getElementById("username").value;
            var pass = document.getElementById("password").value;
            if(email=='kaviya@gmail.com' &&  pass == '1098'){
                alert("login successfully")
            window.location.assign("index.html") 
            }
          
            else if(email ==  "" &&   pass == ""){
                    alert("please enter email and password")
                }
                else if(email == ""){
                    alert("please enter valid email")
                }
                else if(pass == ""){
                    alert("please enter valid password")
                }

               else if(email != 'kavi@gmail.com' &&  pass != '1098'){
                alert("please enter correct email or password")
               }
               else{
                alert("invalid")
               }
            
            }
          