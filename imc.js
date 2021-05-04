const calcularIMC = window.document.getElementById("calcularIMC")

function imc(){
    const altura = window.document.getElementById("alturaPessoa").value
    const peso = window.document.getElementById("pesoPessoa").value
    const resultado = window.document.getElementById("resultado")
    const r=(peso/(altura*altura)).toFixed(2)
    let classificacao = ""
    var sexo = window.document.getElementsByName("sexo")
    //var genero=''

    if(altura!="" && peso!="" && sexo[0].checked){
        //genero = 'masculino'
        if (r < 20.7){
            classificacao = 'abaixo do peso.';
        }else if (r >= 20.7 && r<26.4) {
            classificacao = 'com peso normal';
        }else if (r >= 26.4 && r<27.8){
            classificacao = 'Marginalmente Acima do Peso';
        }else if (r >= 27.8 && r<31.1){
            classificacao = 'Acima do Peso Ideal';
        }else if (r >= 31.){
            classificacao = 'Obeso';
		}
        resultado.innerHTML = `${classificacao} ${genero}`
    }else if(altura!="" && peso!="" && sexo[1].checked) {
        //genero = 'feminino'
        if (r < 19.1){
            classificacao = 'abaixo do peso.';
        }else if (r >= 19.1 && r<25.8) {
            classificacao = 'com peso normal';
        }else if (r >= 25.8 && r<27.3){
            classificacao = 'Marginalmente Acima do Peso';
        }else if (r >= 27.3 && r<32.3){
            classificacao = 'Acima do Peso Ideal';
        }else if (r >= 32.3){
            classificacao = 'Obeso';
        }
        //resultado.innerHTML = `${classificacao}`
        resultado.innerHTML = `${classificacao} ${genero}`
    }
    else{
        resultado.innerHTML = "preencha todos os campos"
    }
}
calcularIMC.addEventListener("click",imc)
