class CategoriaController {
  
  constructor(){
    this._categorias = new Categorias()
    this._categoriaService = new CategoriaService()
    this._categoriaView = new CategoriaView()
  }
  
  montar(){
    this._categoriaService.listarTodas()
      .then(categorias => 
        categorias.map(categoria => this._categorias.adicionar(categoria)))
      .then(() => this._categoriaView.montarListagem(this._categorias))
  }
}
