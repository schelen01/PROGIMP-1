
console.log("Selecione uma das opções: Opção 1 = pipoca; Opção 2 = macarrao; Opcão 3 = Carne; Opção 4 = Feijão; Opção 5 = Brigadeiro");
//Criar o Menu
function menu(itens) {
    let tempoPadrao = 0;
     switch (itens) {
        case item = 1:
            tempoPadrao= 10;
            console.log("Opção selecionada: Pipoca")
            break;
        case item = 2:
            tempoPadrao = 8;
            console.log("Opção selecionada: Macarrão")
            break;
        case item = 3:
            tempoPadrao= 15;
            console.log("Opção selecionada: Carne")
            break;
        case item = 4:
            tempoPadrao= 12;
            console.log("Opção selecionada: feijão")
            break;
        case item = 5:
            tempoPadrao= 8;
            console.log("Opção selecionada: Brigadeiro")
            break;
        default:
            console.log("Prato inexistente");
     }
    return tempoPadrao;
}



function microondas(tempo, tempoPadrao){
    console.log(tempoPadrao);
    if(tempoPadrao === 0) {
        console.log ("coloque sua comida"); 
    } else if ( tempo > (3 * tempoPadrao)){
      console.log("Kabum");  
    } else if  (tempo > (2 * tempoPadrao)){
     console.log("comida queimou");  
    } else if (tempo < tempoPadrao) {
        console.log("Tempo insuficiente");  
    } else {
        console.log("Prato pronto, bom apetite!!!");
    } 
}

  console.log(microondas(9, menu(2)));