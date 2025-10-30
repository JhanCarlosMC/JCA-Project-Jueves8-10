import { useState,useEffect, use } from 'react'
import './App.css'

const API_URL = "https://690368b2d0f10a340b241c53.mockapi.io/api/products"

function App() {

  // ----------------- Estados ---------------------
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  const [idUpdate, setIdUpdate] = useState(null)
  // ----------------- Estados ---------------------

  // --------------- GET - Read - Listar Productos ---------------
  useEffect(() => {
    fetch(API_URL) //Realiza por defecto una peticion get
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  // --------------- GET - Read - Listar Productos ---------------

  // --------------- POST - Create - Crear Producto ---------------
  const crearProducto = () => {
    const newProduct = {
      name: name,
      price: price,
      category: category
    }

    fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      setProducts([...products, data])

      setName("")
      setPrice("")
      setCategory("")
    })
  }
  // ------------- POST - Create - Crear Producto ---------------

  // ------------- DELETE - Delete - Eliminar Producto -------------
  const eliminarProducto = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setProducts(products.filter(product => product.id !== id))
    })
  }
  // ------------- DELETE - Delete - Eliminar Producto -------------

  // ------------- PUT - Update - Actualizar Producto -------------

  const obtenerProducto = (p) => {
    setIdUpdate(p.id)

    setName(p.name)
    setPrice(p.price)
    setCategory(p.category)
  }

  const actualizarProducto = () => {
    const updatedProduct = {
      name: name,
      price: price,
      category: category
    }

    fetch(`${API_URL}/${idUpdate}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data => {
      setProducts(
        products.map(product => 
          product.id === idUpdate ? data : product)
      )

      setName("")
      setPrice("")
      setCategory("")
      setIdUpdate(null)
    })
  }

  // ------------- PUT - Update - Actualizar Producto -------------


  return (
    <div className='app'>
      <h1>CRUD de Productos</h1>

      <div className='formulario'> 
        <h2>Crear Producto</h2>

        <input 
          type="text" 
          placeholder="Nombre..."
          value = {name}
          onChange={e => setName(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Precio..."
          value = {price}
          onChange={e => setPrice(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Categoría..."
          value = {category}
          onChange={e => setCategory(e.target.value)}
        />

        {idUpdate ? (
            <button onClick={actualizarProducto}>Actualizar</button>
          ) : (
            <button onClick={crearProducto}>Crear</button>
          )}
      </div>

      <div className='lista'>
        <h2>Lista de Productos</h2>

        {products.map(product => (
          <div key={product.id} className="producto">
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <p>Categoría: {product.category}</p>


            <button onClick={() => obtenerProducto(product)}>Actualizar</button>
            <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
