function store(){
    var nama = document.getElementById('name')
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    var pw2 = document.getElementById('pw2');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Please fill in email');

    }else if(!nama.value.match(numbers)){
        alert('Username harus memiliki karakter angka!');
    
    }else if(nama.value.length < 5 ){
        alert('Username min 5 karakter');
    
    }else if(pw.value.length == 0){
        alert('Please fill in password');
     

    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length < 6){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    // }else if(pw.value.length == pw2.value.length){
    //     alert('sama');

    }else{
       
        localStorage.setItem('name', nama.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        // localStorage.setItem('pw2', pw2.value);
        alert("akun terdaftar");
        window.open(
            href="login.html"
        )
       
       
    }
    
    
   
    }

    

function check(){
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var userEmail = document.getElementById('userEmail');
    var userPassword = document.getElementById('userPassword');

    if(userEmail.value == storedName && userPassword.value == storedPw){
        alert('You are logged in.');
        window.open(
            href="index.html"
        )
       
    }else{
        alert('Error on login');
    }
}