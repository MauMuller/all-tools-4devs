function maskCPF(event_cpf){
    console.log(event_cpf);
    switch(event_cpf.length){
        case 3:
            event_cpf = `${event_cpf}.`;
            break;
        case 7:
            event_cpf = `${event_cpf}.`;
            break;
        case 11:
            event_cpf = `${event_cpf}-`;
            break;
        case 15:
            event_cpf= event_cpf.substr(0, event_cpf.length-1);
            break;
        default:
            event_cpf = event_cpf;
            break;
    }
    return event_cpf;
}

function backspaceMask(value_input, keyCode){
    return value_input = keyCode===8 ? value_input.substr(0, value_input.length-1) : value_input;
}

function isCPF(value){
    const arrChars=[];
    let boolResp=false;

    //Extrai os valores do cpf
    for(let i=0; i<value.length; i++){
        const regex = /[\d]/g;
        value[i].search(regex) != -1 ? arrChars.push(parseInt(value[i])) : value[i];
    }

    const regex = /(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})/g;
    boolResp = value.match(regex) !== null ? true : false;

    //Calculo para verficação
    if(arrChars.length===11){
        for(let i=0; i<arrChars.length; i++){
            let soma=0, soma2=0, multiplicacao=10, multiplicacao2=11, resto=0, resto2=0;

            arrChars.forEach((val,ind_val)=>{
                if(ind_val < 9){
                    soma += val * multiplicacao;
                    multiplicacao--;
                }

                if(ind_val <= 9){
                    soma2 += val * multiplicacao2;
                    multiplicacao2--;
                }
            });

            resto = ((soma * 10) % 11);
            resto = resto != 10 ? resto : 0;

            resto2 = ((soma2 * 10) % 11);
            resto2 = resto2 != 10 ? resto2 : 0;

            if((resto === arrChars[9]) && (resto2 === arrChars[10])){
                boolResp=true;
            } else {
                boolResp=false;
            }
            break;
        }
    }

    return boolResp;
}

function removeSpecialChar(value){
    const regex = /[^\d]/gi;
    return value.replace(regex,"");
}