class CategoriaView {

  constructor(){
    this._listagem = document.querySelector('#lista-categorias')
  }

  templateListagem(categorias){
    return `
      ${categorias.listar().map(categoria => {
        return `
        <li>
          <a href="#" class="link-category">
            <img src="assets/images/yellow.svg" alt="" class="mr-1"> ${categoria.descricao}
          </a>
        </li>
        `
      }).join('')}
    `
  }

  montarListagem(categorias){
    this._listagem.innerHTML = ''
    this._listagem.innerHTML = this.templateListagem(categorias)
  }
}
