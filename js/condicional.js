document.getElementById('confirm').addEventListener("click",
    function(){
        let v1,v2
        //recuperando valores do input
        v1=document.getElementById('inpt1').value
        v2=document.getElementById('inpt2').value

        //exibindo os valores
        console.log(v1,v2)
        alert(v1+" "+v2)

        //verificando os valores com uma condicional
        if (v1 == null || v1 == ""){
            alert("Campo de Entrada 1 Vazio")
        } else if (v2 == null || v2 == ""){
            alert("Campo de Entrada 2 está vazio")
        }else{
            alert(v1+" "+v2)
        }

        //verificando conteúdo e tipagem
        v1=1
        if(v1==="1"){
            alert("é texto")
        }else if (v1 ===1){
            alert("é número")
        }

        //verificando conteúdo
        if(v1=="1"){
            alert("é texto")
        }else if (v1 ==1){
            alert("é número")
        }
    
    }
)
document.getElementById("lista_fruta").addEventListener("change",
    function(){
        let fruta = document.getElementById("lista_frutas").value

        switch(fruta){
            case "Banana":
                alert("Você escolheu a Banana 1kg - R$10,00")
                break;
            case "Laranja":
                alert("Você escolheu a Laranja 1kg - R$7,00")
                break;
            case "Uva":
                alert("Você escolheu a Uva 1kg - R$20,00")
                break;
            case "Melancia":
                alert("Você escolheu a Melancia UND - R$50,00")
                break;
            default:
                alert("Nenhuma fruta selecionada")
                break;

        }
    }
)