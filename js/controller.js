function maskCPF(event_cpf){
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
    const regex = /(\d{3}).?(\d{3}).?(\d{3})-?(\d{2})/g;
    return value.match(regex) !== null ? true : false;
}

function removeSpecialChar(value){
    const regex = /[^\d]/g;
    return value.replace(regex,"");
}