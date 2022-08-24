var letrasPossiveis = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '人', '皆', '生', '而', '自', '在', '而', '良', '等', '同', '有', '等', '由', '仔', '正', 'て', '間', '協', '国', '合', '盟', '国', '生', '利', '嚴', '生', '皆']

function waitForMe(ms){
    return new Promise(resolve => {
        setTimeout(()=> {resolve('')} ,ms );
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

async function criarDiv(){
    var altura = getRandomInt(10, 40)
    var largura = getRandomInt(5, 25)
    var divLetras = document.createElement('div');
    divLetras.id = "raining-code"
    divLetras.style.width = "fit-content"
    divLetras.style.position = "absolute"
    divLetras.style.right = largura+"%"
    divLetras.style.top = altura+"%"

    document.getElementById("holder").appendChild(divLetras)
    
    //variaveis para roleta (acertar depois que a pagina estiver completa, scrollbar zzzz)
    var num_rep = getRandomInt(9, 20)
    let i = 8
    //loop de criar os caracteres
    while (i <= num_rep){
        var num_vetor = Math.floor(Math.random() * 37);
        var letras = document.createElement('p');
        letras.append(letrasPossiveis[num_vetor])
        divLetras.append(letras)    
        i = i + 1
        await waitForMe(10)
    }
    var rainingId = document.getElementById("raining-code")
    var numParagrafos = rainingId.childElementCount
    var elements = rainingId.getElementsByTagName('p');

    if (i - 1== num_rep){
        elements[numParagrafos - 1].style.color = "#008000";
        let j = 0
        //loop de apagar
        while (j < num_rep){
            if (typeof(elements[j]) != 'undefined' && elements[j] != null){
                elements[j].style.opacity = 0
            }
            j = j + 1
            await waitForMe(100)
        }
        rainingId.remove();
    }
}

function removeAll(){
    var div = document.getElementById("holder");
    div.remove()
    var newDiv = document.createElement('div')
    newDiv.id = "holder"
    document.getElementById("header").appendChild(newDiv)
}

rodando = false
async function criarDivInf(){
    if (rodando == false){
        rodando = true   
    } else{
        rodando = false
        removeAll()
    }
    while (rodando == true){
            criarDiv()
            await waitForMe(500)
        }
}