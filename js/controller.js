function maskCPF(event_cpf,keyCode=0){
    if(keyCode===0){
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
    } else {
        if(keyCode===8){
            event_cpf = event_cpf.substring(0, input_form.value.length-1);
        }
    }
    return event_cpf;
}

function isCPF(value){  
    const regex = /(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})/g;
    return value.match(regex) !== null ? true : false;
}

function removeSpecialChar(value){
    const regex = /[^\d]/g;
    return value.replace(regex,"");
}