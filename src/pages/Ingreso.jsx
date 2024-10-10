import { Link } from "react-router-dom"
import { Ventajas } from "../Components"

export const Ingreso = () => {
  return (
    <>
      <div className="container mt-3 formulario">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Inicie Sesión</h1>
            <p className="text-center">Gracias por estar de vuelta!</p>
          </div>
        </div>

        <div className="row mb-4 justify-content-center">
          <div className="col-10 col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-2">
              <span>No tiene una cuenta?</span> <span><Link to="/registro" className="text-primary">Registrese aquí</Link></span>
            </div>
          </div>
        </div>
      </div>
      <Ventajas />
    </>
  )
}
