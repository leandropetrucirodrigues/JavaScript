function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(Fano.value.length == 0 || Number(Fano.value) > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero ='Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`


    }
}