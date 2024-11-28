$(document).ready(function () {
    // Máscara de telefone
    $('#telefone').mask('(00) 00000-0000');
    
    // Validação do formulário
    $('#contato-form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14 // Tamanho mínimo para corresponder à máscara
            },
            mensagem: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "Seu nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "Por favor, insira um número de telefone válido."
            },
            mensagem: {
                required: "Por favor, escreva sua mensagem.",
                minlength: "Sua mensagem deve ter pelo menos 5 caracteres."
            }
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    });
});
