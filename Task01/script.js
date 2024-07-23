function somar(){
  var num1 = parseInt(document.getElementById("n1").value)
  var num2 = parseInt(document.getElementById("n2").value)
    
  var resp = document.getElementById("respSoma")
  resp.textContent = num1 + num2
  //resp.innerHTML = num1 + num2
  //resp.innerText = num1 + num2
}

function sub(){
  var num1_sub = parseInt(document.getElementById("n1_sub").value)
  var num2_sub = parseInt(document.getElementById("n2_sub").value)
    
  var resp = document.getElementById("respSub")
  resp.textContent = num1_sub - num2_sub
  //resp.innerHTML = num1_sub - num2_sub
  //resp.innerText = num1_sub - num2_sub
}

function divi(){
  var num1_div = parseInt(document.getElementById("n1_div").value)
  var num2_div = parseInt(document.getElementById("n2_div").value)
    
  var resp = document.getElementById("respDiv")
  resp.textContent = num1_div / num2_div
  //resp.innerHTML = num1_div / num2_div
  //resp.innerText = num1_div / num2_div
}

function multi(){
  var num1_mul = parseInt(document.getElementById("n1_mul").value)
  var num2_mul = parseInt(document.getElementById("n2_mul").value)
    
  var resp = document.getElementById("respMul")
  resp.textContent = num1_mul * num2_mul
  //resp.innerHTML = num1_mul * num2_mul
  //resp.innerText = num1_mul * num2_mul
}

function media(){
  var num1_med = parseFloat(document.getElementById("n1_med").value)
  var num2_med = parseFloat(document.getElementById("n2_med").value)
  var num3_med = parseFloat(document.getElementById("n3_med").value)
  var media = document.getElementById("respMed")
  var res = (num1_med + num2_med + num3_med) / 3

  if (res >= 7) {
     media.textContent = res.toFixed(1)
     media.style.color = "green"
     media.style.backgroundColor = "#00563B"
     media.style.padding = "5px"

  } else {
     media.textContent = res.toFixed(1)
     media.style.color = "red"
     media.style.backgroundColor  = "#660000"
     media.style.padding = "5px"
  }
}

function contar(){
    const num = parseFloat($("#numeroInput").val())

    var resultadoStr = ""

    if(num <= 100){
        for(var cont = 1; cont <= num; cont++){
            resultadoStr = resultadoStr + cont + "<br>"
        }
        $("#result").html(resultadoStr)

    } else {
        $("#result").text("Digite um número menor que 100!")
    }
}
   
   
   
   
   