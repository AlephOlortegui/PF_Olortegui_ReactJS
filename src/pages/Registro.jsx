import { Link } from "react-router-dom"
import { Ventajas } from "../Components"

export const Registro = () => {
  return (
    <>
      <div className="container mt-3 formulario">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Registrate</h1>
            <p className="text-center">Obten todos los beneficios</p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" />
                <div id="passwordHelp" className="form-text">Al menos 8 caracteres</div>
              </div>
              <div className="mb-3">
                <label htmlFor="c_password" className="form-label">Confirma Contraseña</label>
                <input type="password" className="form-control" id="c_password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="terminos" />
                <label className="form-check-label" htmlFor="terminos">Acepto los términos y condiciones</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-2">
              <span>Ya tiene una cuenta?</span> <span><Link to="/ingreso" className="text-primary">Inicie sesión aquí</Link></span>
            </div>
          </div>
        </div>
      </div>
      <Ventajas />
    </>
  )
}
