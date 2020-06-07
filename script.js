  function enviarEmail(nome, email, textarea){
    var res = document.getElementById('sucesso')
    var nome = document.getElementById('textCampo')
    var email = document.getElementById('email')
    var textarea = document.getElementById('textarea')
    var form = document.getElementById('formulario')

    if(nome.value == ''){
      nome.style.backgroundColor = '#F5A9A9'
      email.style.backgroundColor = '#F5A9A9'
      textarea.style.backgroundColor = '#F5A9A9'
      res.innerHTML = 'Por favor, preencha com seu nome.'
      res.style.color = 'red'
    }else if(email.value == ''){
      nome.style.backgroundColor = ''
      email.style.backgroundColor = '#F5A9A9'
      res.innerHTML = 'Por favor, preencha com seu e-mail.'
      res.style.color = 'red'
    }else if(textarea.value == ''){
      email.style.backgroundColor = ''
      textarea.style.backgroundColor = '#F5A9A9'
      res.innerHTML = 'Por favor, escreva uma mensagem.'
      res.style.color = 'red'
    
    }else if (textarea.value.length < 15){
      textarea.style.backgroundColor = '#F5A9A9'
      res.innerHTML = 'Por favor, escreva uma mensagem mais detalhada'
    }else{
      res.innerHTML = `${nome.value}, seu e-mail foi enviado com sucesso! Em breve entraremos em contato com você para esclarecer suas dúvidas.`
      res.style.color = 'green'
      nome.style.backgroundColor = '#CEF6CE'
      email.style.backgroundColor = '#CEF6CE'
      textarea.style.backgroundColor = '#CEF6CE'
    }
    
  }

   function cadastrarUsuario(nome, email, estado){
    var res = document.getElementById('sucesso')
    var nome = document.getElementById('nomeCadastro')
    var email = document.getElementById('emailCadastro')
    var estado = document.getElementById('estadoCadastro')
    var form = document.getElementById('formulario')
   
      nome.style.backgroundColor = '#CEF6CE'
      email.style.backgroundColor = '#CEF6CE'
      estado.style.backgroundColor = '#CEF6CE'
    alert('Cadastrado com sucesso. Obrigado por escolher a F-Travel para te acompanhar!')
    
  }
