let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{

        return false
    }


}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

    }else{
        window.alert('Valor invalido ou já encontrado na lista.')

    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length ==0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        valores.sort()

        let maior = valores[valores.length -1]
        let menor = valores[0]
        res.innerHTML =''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.<br></p>`
        res.innerHTML += `<p>O maior valor encontrado é ${maior}.<br></p>`
        res.innerHTML += `<p>O menor valor encontrado é ${menor}.<br></p>`
    }

}