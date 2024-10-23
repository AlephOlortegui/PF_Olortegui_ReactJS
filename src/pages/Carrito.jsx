import { useContext, useEffect, useState } from "react"
import { Mapa } from "../components"
import { CarritoContext } from "../context/CarritoContext"
import { useGetAllProducts } from "../hooks"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

/* const actualizarStockEnFirebase = async (items, DBdata) => {
  try {
    // Recorremos los productos de items
    for (let productoCarrito of items) {
      const productoDB = DBdata.find((producto) => producto.id === productoCarrito.id);

      if (productoDB) {
        // Si el ID coincide, actualizamos el stock en Firebase
        const referenciaDoc = doc(db, "products", productoDB.id); 
        const nuevoStock = productoDB.stock - productoCarrito.stock;
        //await updateDoc(referenciaDoc, { stock: productoCarrito.stock });
        await updateDoc(referenciaDoc, { stock: nuevoStock });
      }
    }
    console.log("Stock actualizado correctamente.");
  } catch (error) {
    console.error("Error al actualizar stock:", error);
  }
}; */

export const Carrito = () => {
  const {items, dispatch} = useContext(CarritoContext)
  const [total, setTotal] = useState(0)
  const [totalDisc, setTotalDisc] = useState(0)

  const {dbProducts} = useGetAllProducts()
  const [DBdata, setDBdata] = useState([])
  const [isPagando, setIsPagando] = useState(false)

  useEffect(() => {
    console.log("items: ",items)
    let newTotal = items.reduce((acc, curr) => {
      //acc = 0
      let precio = curr.price;
      let cantidad = curr.quantity;
      acc = acc + (precio * cantidad)
      return acc
    },0)
    newTotal = newTotal.toFixed(2);
    setTotal(newTotal)

    let newTotalDisc = (newTotal - (newTotal * 0.15)).toFixed(2)
    setTotalDisc(newTotalDisc)
  }, [items])

  const handleDelete = (id) => { 
    dispatch({type: "DELETE_ITEM", payload: id})
  }

  const handlePlus = (tdID) => { 
    let td = items.find(i => i.id === tdID)
    console.log(td.stock, td.quantity)
    const newQuantity = Math.min(td.quantity + 1, td.stock);
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: tdID, quantity: newQuantity } });
    console.log("Despachado?")
  }

  const handleDash = (tdID) => { 
    let td = items.find(i => i.id === tdID)
    const newQuantity = Math.max(td.quantity - 1, 1);
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: tdID, quantity: newQuantity } });
    console.log("Despachado?")
  }
  
  let trs = items.map(td => (
    <tr data-aos="fade-down" key={td.id}>
      <td className="producto text-center">
        <figure>
          <img src={td.cloudSrc} alt={td.title} className="img-thumbnail"/>
          <figcaption>{td.title}</figcaption>
        </figure>
      </td>
      <td>${td.price}</td>
      <td className="quantityActions">
        <div>
          <span onClick={() => handlePlus(td.id)}><i className="bi bi-plus-circle-fill"></i></span>
          <span>{td.quantity}</span>
          <span onClick={() => handleDash(td.id)}><i className="bi bi-dash-circle-fill"></i></span>
        </div>
      </td>
      <td>${(td.price * td.quantity).toFixed(2)}</td>
      <td className="deleteIcon">
        <i className="bi bi-trash-fill" onClick={() => handleDelete(td.id)}></i>
      </td>
    </tr>
  ))

  // useEffect para sincronizar DBdata solo si dbProducts tiene elementos
  useEffect(() => {
    if (dbProducts.length > 0) {
      setDBdata(dbProducts);
    }
  }, [dbProducts]);

  // Otra lógica del componente...
  console.log(DBdata); // Verifica que DBdata se actualiza correctamente

  const handlePay = async () => {
    //actualizarStockEnFirebase(items, DBdata);
    setIsPagando(true);
    try {
      // Recorrer cada elemento del carrito y encontrar su match en la base de datos
      const updates = items.map((itemCarrito) => {

        const itemDB = DBdata.find((item) => item.id === itemCarrito.id);

        if (itemDB) {
          const nuevoStock = itemDB.stock - itemCarrito.quantity;

          // Crear una referencia al documento en Firebase
          const docRef = doc(db, "products", itemCarrito.id);

          // Retornar una promesa de actualización para cada producto
          return updateDoc(docRef, { stock: nuevoStock });
        } else {
          console.error(`Producto con id ${itemCarrito.id} no encontrado en la base de datos`);
          return null;
        }
      });
      // Esperar a que todas las actualizaciones se completen
      await Promise.all(updates);

      alert("¡Pago efectuado exitosamente! \nEl stock se ha actualizado de cada producto, verificar en la base de datos. \no agregar el mismo producto y verificar el localstorage que el stock se ha actualizado.");
      dispatch({type: "CLEAR_CART"});
    } catch (err) {
      console.error("Error al actualizar el stock: ", err);
    } finally{
      setIsPagando(false)
    }
  };

  return (
    <div className="container-fluid mt-3 carrito">
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-center">Su Carrito</h1>
        </div>
      </div>
      <div className="row mb-4 g-3 px-3">
          <div className="col-12 col-md-8">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {/* {tableRows} */}
                {trs}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-4 text-center" data-aos="fade-up">
            <div className="box-total">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><h5>Resumen de la compra</h5></li>
                <li className="list-group-item list-group-item-light">
                  <div className="d-flex justify-content-between"><h6>Subtotal</h6><h6>${total}</h6></div>
                  <div className="d-flex justify-content-between"><h6>Fachero Pay <i className="bi bi-credit-card-fill"></i></h6><h6>${totalDisc}</h6></div>
                  <div className="d-flex justify-content-between"><h6>Delivery <i className="bi bi-truck"></i></h6><h6 className="text-success">Gratis</h6></div>
                </li>
                <li className="list-group-item list-group-item-dark d-flex justify-content-between">
                  <h6>Total</h6><h6>${total}</h6>
                </li>
              </ul>
            </div>
            <button type="button" 
                    className={`btn btn-lg w-75 mt-3 ${isPagando ? "btn-dark" : "btn-success"}`}
                    onClick={handlePay}
                    disabled={isPagando}>
                      {isPagando ? "Procesando..." : "Pagar"}
            </button>
          </div>
      </div>
      <Mapa />
    </div>
  )
}
