class CategoriaService extends Service{

  constructor(){
    super()
    this._path = `${this._url}/categorias`
  }

  listarTodas(){
    return fetch(`${this._path}`)
              .then(res => res.json())
              .catch(error => console.log(error))
  }
}
