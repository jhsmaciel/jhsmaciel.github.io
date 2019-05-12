function limpaForm() {
    //simplesmente limpando o "form", ou em particular "inputs"
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
}

function setForms(conteudo) {
    //Seta o conteudo(json do cep), nos inputs, através do DOM
    if(!("erro" in conteudo)) {
        //Diferente de erro(que seria não encontrado)
        console.log(conteudo)
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else {
        //Else do diferente de não encontrado, que seria que o CEP não foi encontrado
        limpaForm();
        alert("CEP não encontrado!");
    }
}
    
function pesquisaCep() {
    //Coração da pesquisa do CEP
    let cep = document.getElementById('cep').value
    //Get do value do elemento(que seria o CEP)
    cep = cep.replace("-","")
    //Replace do traço para vazio, caso se o usuário digitar o traço( - )
    
    if (cep != "" && cep.length == 8 && parseInt(cep)) {
        //cep diferente de vazio e igual a oito caracteres
        let script = document.createElement('script');
        //Criação do elemento script
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=setForms';
        //definindo o src do script(o codigo java script q ele vai utilizar)
        document.body.appendChild(script);
        //e por fim, adiciona esse elemento no meu body
    } else {
        // Else para cep inválido, caso não entre no if
        limpaForm()
        alert("CEP inválido");
    }
}