
var contenido = "";
var operacion=0;
var vari1=0;
var vari2=0;
function CambiarTamano_pequeno(element){
  //elemento.children[0].style.background = "inherit";
  element.style.height = "15.9%";
  element.style.width  = "21%";
  element.style.marginTop = "1%";
  //element.style.marginBottom = "1%";
  //element.style.marginRight = "1%";
  element.style.marginLeft = "1%";
}
function CambiarTamano_grande(element){
  //elemento.children[0].style.background = "inherit";
  element.style.height = "16.9%";
  element.style.width  = "22%";
  element.style.marginLeft = "0%";
  element.style.marginTop = "0%";
}

function CambiarTamano_pequeno2(element){
  //elemento.children[0].style.background = "inherit";
  element.style.height = "41.5%";
  element.style.width  = "28%";
  element.style.marginTop = "0.5%";
  //element.style.marginBottom = "1%";
  //element.style.marginRight = "1%";
  element.style.marginLeft = "1%";
}
function CambiarTamano_grande2(element){
  //elemento.children[0].style.background = "inherit";
  element.style.height = "42.5%";
  element.style.width  = "29%";
  element.style.marginLeft = "0%";
  element.style.marginTop = "0%";
}

function CambiarTamano_pequeno3(element){
  //elemento.children[0].style.background = "inherit";
  element.style.height = "98%";
  element.style.width  = "90%";
  element.style.marginTop = "0.5%";
  //element.style.marginBottom = "1%";
  //element.style.marginRight = "1%";
  element.style.marginLeft = "12%";
}
function CambiarTamano_grande3(element){
  //elemento.children[0].style.background = "inherit";
  element.style.height = "99%";
  element.style.width  = "91%";
  //element.style.marginLeft = "20%";
  //element.style.marginTop = "-5%";
  element.style.marginLeft = "11%";
  element.style.marginTop = "0%";
}

function agrega_num(numero){
  console.log(numero);
  var text = document.getElementById('display').innerText;
  if (text.length<=8){
    if (numero == 1){
      contenido = contenido+"1";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 2){
      contenido = contenido+"2";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 3){
      contenido = contenido+"3";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 4){
      contenido = contenido+"4";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 5){
      contenido = contenido+"5";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 6){
      contenido = contenido+"6";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 7){
      contenido = contenido+"7";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 8){
      contenido = contenido+"8";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 9){
      contenido = contenido+"9";
      document.getElementById('display').innerHTML = contenido;
    }else if (numero == 0){
      if (text != "0" && text != "" ){
        contenido = contenido+"0";
        document.getElementById('display').innerHTML = contenido;
      }else if(text==""){
        contenido=contenido;
        document.getElementById('display').innerHTML = "0";
      }else{}
    }
  }else{}
}

function agrega_ON(){
  document.getElementById('display').innerHTML = "0";
  contenido = "";
}

function agrega_Punto(){
  var existe;
  var text = document.getElementById('display').innerText;
  if(contenido.length<=8){
    if(text=="0"){
      contenido="0.";
    }else{
      for (var i = 0; i < text.length; i++) {
         if (text[i]=="."){
           existe="1";
           break;
         }else{
          existe="0";
         }
      }
    }
    if (existe=="0"){
      contenido = contenido+".";
    }else{
      contenido = contenido;
    }
    document.getElementById('display').innerHTML = contenido;
  }else{}
}
function agrega_Signo(){
  var text = document.getElementById('display').innerText;
  var contenido2="";
  if ((text != "0" && contenido.length<=8) || (contenido[0]=="-")){
    if(contenido[0] != "-"){
      contenido="-"+contenido;
    }else if(contenido[0] == "-"){
      for (var i = 0; i < contenido.length-1; i++) {
         contenido2=contenido2+contenido[i+1];
      }
      contenido=contenido2;
    }
    document.getElementById('display').innerHTML = contenido;
  }else{}
}
function Suma(variable1,variable2){
  var res=variable1+variable2;
  return res;
}
function Resta(variable1,variable2){
  var res=variable1-variable2;
  return res;
}
function Multi(variable1,variable2){
  var res=variable1*variable2;
  return res;
}
function Divi(variable1,variable2){
  var res=variable1/variable2;
  return res;
}
function Raizz(variable1){
  var res=Math.pow(variable1,(1/2));
  return res;
}
function resultado(){
  var text = document.getElementById('display').innerText;
  vari2=parseFloat(text);
  if(operacion==1){
    var result = Suma(vari1,vari2);
    result = result.toString();
    var result2="";
    if(result=="NaN" || result=="0"){
      console.log(result);
      contenido="";
      document.getElementById('display').innerText = "0";
    }else{
      if(result.length>8){
        for (var i = 0; i < result.length; i++) {
           result2=result2+result[i];
           console.log(result2);
           if(i==8){
             break;
           }
        }
        result=result2;
      }else{}
      contenido = result.toString();
      document.getElementById('display').innerText = result;
    }
  }else if (operacion==2) {
    var result = Resta(vari1,vari2);
    result = result.toString();
    var result2="";
    if(result=="NaN" || result=="0"){
      console.log(result);
      contenido="";
      document.getElementById('display').innerText = "0";
    }else{
      if(result.length>8){
        for (var i = 0; i < result.length; i++) {
           result2=result2+result[i];
           console.log(result2);
           if(i==8){
             break;
           }
        }
        result=result2;
      }else{}
      contenido = result.toString();
      document.getElementById('display').innerText = result;
    }
  }else if (operacion==3) {
    var result = Multi(vari1,vari2);
    result = result.toString();
    var result2="";
    if(result=="NaN" || result=="0"){
      console.log(result);
      contenido="";
      document.getElementById('display').innerText = "0";
    }else{
      if(result.length>8){
        for (var i = 0; i < result.length; i++) {
           result2=result2+result[i];
           console.log(result2);
           if(i==8){
             break;
           }
        }
        result=result2;
      }else{}
      contenido = result.toString();
      document.getElementById('display').innerText = result;
    }
  }else if (operacion==4) {
    var result = Divi(vari1,vari2);
    result = result.toString();
    var result2="";
    if(result=="NaN" || result=="0"){
      console.log(result);
      contenido="";
      document.getElementById('display').innerText = "0";
    }else{
      if(result.length>8){
        for (var i = 0; i < result.length; i++) {
           result2=result2+result[i];
           console.log(result2);
           if(i==8){
             break;
           }
        }
        result=result2;
      }else{}
      contenido = result.toString();
      document.getElementById('display').innerText = result;
    }
  }else{

  }
  operacion=0;
}
function fun_raiz(){
  var text = document.getElementById('display').innerText;
  var vari_raiz=parseFloat(text);
  var result = Raizz(vari_raiz).toString();
  var result2="";
  if(result=="NaN" || result=="0"){
    console.log(result);
    contenido="";
    document.getElementById('display').innerText = "0";
  }else{
    if(result.length>8){
      for (var i = 0; i < result.length; i++) {
         result2=result2+result[i];
         console.log(result2);
         if(i==8){
           break;
         }
      }
      result=result2;
    }else{}
    var text = document.getElementById('display').innerText=result;
    contenido=result.toString();
}
}





/////////////Botones///////////////////////////
buttonON = document.getElementById('on')
buttonON.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("on"));
  console.log('peque');
  agrega_ON();
  //Calculadora(button);
})
buttonON.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("on"));
  console.log('grande');
  //Calculadora(button);
})

buttonSIGN = document.getElementById('sign')
buttonSIGN.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("sign"));
  console.log('peque');
  //Calculadora(button);
  agrega_Signo();
})
buttonSIGN.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("sign"));
  console.log('grande');
  //Calculadora(button);
})

buttonRAIZ = document.getElementById('raiz')
buttonRAIZ.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("raiz"));
  console.log('peque');
  operacion=5;
  //Calculadora(button);
  fun_raiz();
})
buttonRAIZ.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("raiz"));
  console.log('grande');
  //Calculadora(button);
})

buttonDIV = document.getElementById('dividido')
buttonDIV.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("dividido"));
  operacion=4;
  console.log('peque');
  //Calculadora(button);
  var text = document.getElementById('display').innerText;
  vari1=parseFloat(text);
  console.log(vari1);
  document.getElementById('display').innerText="";
  contenido="";
})
buttonDIV.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("dividido"));
  console.log('grande');
  //Calculadora(button);
})

button7 = document.getElementById('7')
button7.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("7"));
  agrega_num(7);
  console.log('peque');
  //Calculadora(button);
})
button7.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("7"));
  console.log('grande');
  //Calculadora(button);
})

button8 = document.getElementById('8')
button8.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("8"));
  console.log('peque');
  agrega_num(8);
  //Calculadora(button);
})
button8.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("8"));
  console.log('grande');
  //Calculadora(button);
})

button9 = document.getElementById('9')
button9.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("9"));
  console.log('peque');
  agrega_num(9);
  //Calculadora(button);
})
button9.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("9"));
  console.log('grande');
  //Calculadora(button);
})

buttonPOR = document.getElementById('por')
buttonPOR.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("por"));
  console.log('peque');
  operacion=3;
  //Calculadora(button);
  var text = document.getElementById('display').innerText;
  vari1=parseFloat(text);
  console.log(vari1);
  document.getElementById('display').innerText="";
  contenido="";
})
buttonPOR.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("por"));
  console.log('grande');
  //Calculadora(button);
})

button4 = document.getElementById('4')
button4.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("4"));
  console.log('peque');
  agrega_num(4);
  //Calculadora(button);
})
button4.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("4"));
  console.log('grande');
  //Calculadora(button);
})

button5 = document.getElementById('5')
button5.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("5"));
  console.log('peque');
  agrega_num(5);
  //Calculadora(button);
})
button5.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("5"));
  console.log('grande');
  //Calculadora(button);
})

button6 = document.getElementById('6')
button6.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("6"));
  console.log('peque');
  agrega_num(6);
  //Calculadora(button);
})
button6.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("6"));
  console.log('grande');
  //Calculadora(button);
})

buttonMENOS = document.getElementById('menos')
buttonMENOS.addEventListener('mousedown', function() {
  CambiarTamano_pequeno(document.getElementById("menos"));
  console.log('peque');
  operacion=2;
  //Calculadora(button);
  var text = document.getElementById('display').innerText;
  vari1=parseFloat(text);
  console.log(vari1);
  document.getElementById('display').innerText="";
  contenido="";
})
buttonMENOS.addEventListener('mouseup', function() {
  CambiarTamano_grande(document.getElementById("menos"));
  console.log('grande');
  //Calculadora(button);
})

button1 = document.getElementById('1')
button1.addEventListener('mousedown', function() {
  CambiarTamano_pequeno2(document.getElementById("1"));
  console.log('peque');
  agrega_num(1);
  //Calculadora(button);
})
button1.addEventListener('mouseup', function() {
  CambiarTamano_grande2(document.getElementById("1"));
  console.log('grande');
  //Calculadora(button);
})

button2 = document.getElementById('2')
button2.addEventListener('mousedown', function() {
  CambiarTamano_pequeno2(document.getElementById("2"));
  console.log('peque');
  agrega_num(2);
  //Calculadora(button);
})
button2.addEventListener('mouseup', function() {
  CambiarTamano_grande2(document.getElementById("2"));
  console.log('grande');
  //Calculadora(button);
})

button3 = document.getElementById('3')
button3.addEventListener('mousedown', function() {
  CambiarTamano_pequeno2(document.getElementById("3"));
  console.log('peque');
  agrega_num(3);
  //Calculadora(button);
})
button3.addEventListener('mouseup', function() {
  CambiarTamano_grande2(document.getElementById("3"));
  console.log('grande');
  //Calculadora(button);
})

button0 = document.getElementById('0')
button0.addEventListener('mousedown', function() {
  CambiarTamano_pequeno2(document.getElementById("0"));
  console.log('peque');
  agrega_num(0);
  //Calculadora(button);
})
button0.addEventListener('mouseup', function() {
  CambiarTamano_grande2(document.getElementById("0"));
  console.log('grande');
  //Calculadora(button);
})

buttonPUNTO = document.getElementById('punto')
buttonPUNTO.addEventListener('mousedown', function() {
  CambiarTamano_pequeno2(document.getElementById("punto"));
  console.log('peque');
  //Calculadora(button);
  agrega_Punto();
})
buttonPUNTO.addEventListener('mouseup', function() {
  CambiarTamano_grande2(document.getElementById("punto"));
  console.log('grande');
  //Calculadora(button);
})

buttonIGUAL = document.getElementById('igual')
buttonIGUAL.addEventListener('mousedown', function() {
  CambiarTamano_pequeno2(document.getElementById("igual"));
  console.log('peque');
  //Calculadora(button);
  resultado();
})
buttonIGUAL.addEventListener('mouseup', function() {
  CambiarTamano_grande2(document.getElementById("igual"));
  console.log('grande');
  //Calculadora(button);
})

buttonMAS = document.getElementById('mas')
buttonMAS.addEventListener('mousedown', function() {
  CambiarTamano_pequeno3(document.getElementById("mas"));
  console.log('peque');
  operacion=1;
  //Calculadora(button);
  var text = document.getElementById('display').innerText;
  vari1=parseFloat(text);
  console.log(vari1);
  document.getElementById('display').innerText="";
  contenido="";

})
buttonMAS.addEventListener('mouseup', function() {
  CambiarTamano_grande3(document.getElementById("mas"));
  console.log('grande');
  //Calculadora(button);
})
