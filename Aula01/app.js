 let btn = document.getElementById('btn')
 let resposta = document.getElementById('resposta')


 btn.addEventListener('click' ,() => {
       let num = document.getElementById('num').value
        raiz = Math.sqrt(num)
        if( raiz % 1 != 0){
            resposta.textContent = `Não existe raiz exata para esse número`
        }else{
            resposta.textContent = `A raiz desse número é ${raiz}`

        }

        console.log(raiz)
    })
 


