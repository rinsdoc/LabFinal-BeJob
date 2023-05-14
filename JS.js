function checkName() {
    var name = document.getElementById("name").value;
    var re = /^[a-zA-Z\s]+$/
      if (name.trim().length != 0 ) {
        if (re.test(name)) {
          document.getElementById("errorName").innerHTML = "";
          document.getElementById("errorTipName").innerHTML = "";
          document.getElementById("errorTipName").style.visibility = "hidden";
        } else {
            document.getElementById("errorName").innerHTML = "Nombre inválido";
  
            document.getElementById("errorTipName").innerHTML = "El nombre solo acepta letras mayúsculas y minúsculas.";
            document.getElementById("errorTipName").style.visibility = "visible";
            document.getElementById("errorTipName").style.display = "inline-block";
        }
      }
      else {
        document.getElementById("errorName").innerHTML = "Rellene este campo";
        document.getElementById("errorTipName").style.visibility = "hidden";
        document.getElementById("errorTipName").style.display = "none";
      }
  }
  
  function checkAp1() {
    var apellido1 = document.getElementById("apellido1").value;
    var re = /^[a-zA-Z\s]+$/
      if (apellido1.trim().length != 0 ) {
        if (re.test(apellido1)) {
          document.getElementById("errorAp1").innerHTML = "";
          document.getElementById("errorTipAp1").innerHTML = "";
          document.getElementById("errorTipAp1").style.visibility = "hidden";
        } else {
          document.getElementById("errorAp1").innerHTML = "Apellido inválido";
  
          document.getElementById("errorTipAp1").innerHTML = "El apellido solo acepta letras mayúsculas y minúsculas.";
          document.getElementById("errorTipAp1").style.visibility = "visible";
          document.getElementById("errorTipAp1").style.display = "inline-block";
        }
      }
      else {
        document.getElementById("errorAp1").innerHTML = "Rellene este campo";
        document.getElementById("errorTipAp1").style.visibility = "hidden";
        document.getElementById("errorTipAp1").style.display = "none";
      }
  }

  function checkAp2() {
    var apellido2 = document.getElementById("apellido2").value;
    var re = /^[a-zA-Z\s]+$/
      if (apellido2.trim().length != 0 ) {
        if (re.test(apellido2)) {
          document.getElementById("errorAp2").innerHTML = "";
          document.getElementById("errorTipAp2").innerHTML = "";
          document.getElementById("errorTipAp2").style.visibility = "hidden";
        } else {
          document.getElementById("errorAp2").innerHTML = "Apellido inválido";
  
          document.getElementById("errorTipAp2").innerHTML = "El apellido solo acepta letras mayúsculas y minúsculas.";
          document.getElementById("errorTipAp2").style.visibility = "visible";
          document.getElementById("errorTipAp2").style.display = "inline-block";
        }
      }
      else {
        document.getElementById("errorAp2").innerHTML = "Rellene este campo";
        document.getElementById("errorTipAp2").style.visibility = "hidden";
        document.getElementById("errorTipAp2").style.display = "none";
      }
  }
  
  function checkEmail() {
    var email = document.getElementById("email").value;
    var re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      if (email.trim().length != 0 ) {
        
        if (re.test(email)) {
          document.getElementById("errorEmail").innerHTML = "";
          document.getElementById("errorTipEmail").innerHTML = "";
          document.getElementById("errorTipEmail").style.visibility = "hidden";
          document.getElementById("errorTipEmail").style.display = "none";
        } else {
          document.getElementById("errorEmail").innerHTML = "Email inválido";
          
          checkEmailString();
        }
  
      }
      else {
        document.getElementById("errorEmail").innerHTML = "Rellene este campo";
        document.getElementById("errorTipEmail").style.display = "none";
      }
  }
  
  function checkEmailString() {
    var email = document.getElementById("email").value;
    let result = email.indexOf("@");
    if (result == -1) {
      document.getElementById("errorTipEmail").innerHTML = 'Incluye un signo "@" en la dirección de correo electrónico. La dirección '+email+' no incluye el signo "@" ';
      document.getElementById("errorTipEmail").style.visibility = "visible";
      document.getElementById("errorTipEmail").style.display = "inline-block";
    } else {
      if (!email.includes(".",result)) {
      document.getElementById("errorTipEmail").innerHTML = 'Incluye un signo "." en la dirección de correo electrónico después del @. La dirección '+email+' no incluye el signo "." ';
      document.getElementById("errorTipEmail").style.visibility = "visible";
      document.getElementById("errorTipEmail").style.display = "inline-block";
      }
    }
  }
  
  function checkPswd1() {
    var pswd1 = document.getElementById("pswd1").value;
    if (pswd1.trim().length >= 4 ){
        if (pswd1.trim().length <= 8 ) {
            document.getElementById("errorPswd1").innerHTML = "";
            document.getElementById("errorTipPswd1").innerHTML = "";
            document.getElementById("errorTipPswd1").style.visibility = "hidden";
            document.getElementById("errorTipPswd1").style.display = "none";
        }
        else {
          document.getElementById("errorPswd1").innerHTML = "La contraseña debe tener al menos 4 caracteres y menos de 8.";
          document.getElementById("errorTipPswd1").style.visibility = "hidden";
          document.getElementById("errorTipPswd1").style.display = "none";
        }
      }
      else { 
        document.getElementById("errorPswd1").innerHTML = "La contraseña debe tener al menos 4 caracteres.";
        document.getElementById("errorTipPswd1").style.display = "none";
      }
  }
  
  function checkPswd2() {
    var pswd2 = document.getElementById("pswd2").value;
    var pswd1 = document.getElementById("pswd1").value;
      if (pswd2.trim().length != 0 ) {
        
        if (pswd1 === pswd2) {
          document.getElementById("errorPswd2").innerHTML = "";
  
        } else {
          document.getElementById("errorPswd2").innerHTML = "Las contraseñas no coinciden";
        }
  
      }
      else {
        document.getElementById("errorPswd2").innerHTML = "Rellene este campo";
        document.getElementById("pswd2").style.image
      }
    }
  
  function summit() {
    var name = document.getElementById("errorTipName").style.visibility;
    var apellido1 = document.getElementById("errorTipAp1").style.visibility;
    var apellido2 = document.getElementById("errorTipAp2").style.visibility;
    var email = document.getElementById("errorTipEmail").style.visibility;
    var pswd1 = document.getElementById("errorTipPswd1").style.visibility;
    var pswd2 = document.getElementById("errorPswd2").innerHTML;
  
      if (
         (name == null || name =="hidden") 
      && (apellido1 == null || apellido1 =="hidden") 
      && (apellido2 == null || apellido2 =="hidden") 
      && (email == null || email =="hidden")
      && (pswd1 == null || pswd1 =="hidden")
      && (pswd2 == null || pswd2 =="")) {
        
      }
  }