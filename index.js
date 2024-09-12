let usuario = {
    nome: 'Lucas',
    excluir: function () {
        console.log('O usuário, ' + this.nome + ' foi excluído!')
    }
}

usuario.excluir()