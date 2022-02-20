function Cliente(nome, cpf, telefone, ){
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
}


var pessoa = new Cliente("Antonio", 12103218400, 84998029950);

console.log(pessoa.nome);
console.log(pessoa.cpf);
console.log(pessoa.telefone);