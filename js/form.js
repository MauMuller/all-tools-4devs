const [
    input_form,
    span,
    button
] = [document.querySelector("input.input_form"),document.querySelector('span.span_form'), document.querySelector('button.btn')];

input_form.addEventListener('input', ()=>{
    input_form.value = maskCPF(input_form.value);
    span.innerHTML = removeSpecialChar(input_form.value);

    // if(isCPF(input_form.value)){
    // };
});

input_form.addEventListener('keydown', evt=> input_form.value = maskCPF(input_form.value,evt.keyCode));