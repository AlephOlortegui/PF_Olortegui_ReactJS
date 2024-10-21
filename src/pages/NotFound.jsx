import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="not-found container my-4">
      <h1>Lo lamento, la pagina que buscas, no existe!</h1>
      <Link to="/" className="btn btn-dark btn-lg">Return to Home</Link>
    </div>
  )
}