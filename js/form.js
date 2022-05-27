const [
    input_forms,
    span,
    button
] = [document.querySelectorAll("input.input_form"),document.querySelector('span.span_form'), document.querySelector('button.btn')];

input_forms.forEach((input,ind_input)=>{
    input.addEventListener('input', ()=>{    
        switch(ind_input){
            case 0: //CPF
                input.value = maskCPF(input.value);
                span.innerHTML = removeSpecialChar(input.value);
        
                if(isCPF(input.value)){
                    input.style.border = "2px solid green";
                } else {
                    input.style.border = "2px solid red";
                };
                
                break;
            case 1: //CNPJ
                input.value = maskCPF(input.value);
                span.innerHTML = removeSpecialChar(input.value);
                break;
        }
    });

    input.addEventListener('keydown', (evt) => {
        switch(ind_input){
            case 0: //CPF
                input.value = backspaceMask(input.value, evt.keyCode);
                break;
            case 1: //CNPJ
                input.value = backspaceMask(input.value, evt.keyCode);
                break;
        }
    });
});
