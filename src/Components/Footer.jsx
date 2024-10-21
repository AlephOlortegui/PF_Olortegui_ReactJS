export const Footer = () => {
  return (
    <footer className="p-4">
      <div className="title pt-4 pb-2 text-center">
        <h2 className="position-relative mb-0">
          <span className="store-name">El Fachero</span>
          <span className="position-absolute translate-middle badge">
            <i className="bi bi-shop"></i>
          </span>
        </h2>
      </div>
      <hr />
        <nav>
          <div className="navItem">
            <input type="checkbox" name="productos" id="productos" hidden className="d-md-none" />
            <label htmlFor="productos" className="navItem_head position-relative p-1 px-3">
              <span className="navItem_head_title">Tienda</span>
              <span className="icon eye_fill d-md-none">
                <i className="bi bi-eye-fill"></i>
              </span>
              <span className="icon eye_slash d-md-none">
                <i className="bi bi-eye-slash"></i>
              </span>
            </label>
            <ul>
              <li>polos</li>
              <li>poleras</li>
              <li>pantalones</li>
              <li>accesorios</li>
              <li>casacas</li>
              <li>pijamas</li>
              <li>calzados</li>
            </ul>
            <hr className="d-md-none"/>
          </div>
          <div className="navItem">
            <input type="checkbox" name="empresa" id="empresa" hidden className="d-md-none" />
            <label htmlFor="empresa" className="navItem_head position-relative p-1 px-3">
              <span className="navItem_head_title">La Empresa</span>
              <span className="icon eye_fill d-md-none">
                <i className="bi bi-eye-fill"></i>
              </span>
              <span className="icon eye_slash d-md-none">
                <i className="bi bi-eye-slash"></i>
              </span>
            </label>
            <ul>
              <li>nosotros</li>
              <li>tiendas</li>
              <li>blogs</li>
            </ul>
            <hr className="d-md-none"/>
          </div>
          <div className="navItem">
            <input type="checkbox" name="legales" id="legales" hidden className="d-md-none" />
            <label htmlFor="legales" className="navItem_head position-relative p-1 px-3">
              <span className="navItem_head_title">Legales</span>
              <span className="icon eye_fill d-md-none">
                <i className="bi bi-eye-fill"></i>
              </span>
              <span className="icon eye_slash d-md-none">
                <i className="bi bi-eye-slash"></i>
              </span>
            </label>
            <ul>
              <li>términos y condiciones</li>
              <li>condiciones de Envío</li>
              <li>políticas de privacidad</li>
              <li>políticas de devolución</li>
            </ul>
            <hr className="d-md-none"/>
          </div>
          <div className="navItem contacto d-none d-md-block">
              <label className="navItem_head position-relative p-1 px-0">
                  <span className="navItem_head_title">Contacto y Ventas</span>
              </label>
              <p className="mb-0"><i className="bi bi-whatsapp"></i> (305)-306-2242</p>
              <span className="text-small d-inline-block my-2">Horario de Atención</span>
              <p className="mb-0"> Lunes a Viernes <br />
                  08:00 a.m - 6:00 p.m <br />
                  Sábados <br />
                  09:00 a.m - 12:00 p.m
              </p>
          </div>
          <div className="navItem social mt-md-3">
            <input type="checkbox" name="social" id="social" hidden className="d-md-none" />
            <label htmlFor="social" className="navItem_head position-relative p-1 px-3 px-md-0">
              <span className="navItem_head_title">Social Media</span>
              <span className="icon eye_fill d-md-none">
                <i className="bi bi-eye-fill d-md-none"></i>
              </span>
              <span className="icon eye_slash d-md-none">
                <i className="bi bi-eye-slash"></i>
              </span>
            </label>
            <ul className="text-center text-md-start">
              <li>
                <i className="bi bi-reddit"></i>
              </li>
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-discord"></i>
              </li>
              <li>
                <i className="bi bi-twitter"></i>
              </li>
              <li>
                <i className="bi bi-instagram"></i>
              </li>
            </ul>
            <hr className="d-md-none"/>
          </div>
        </nav>
      <hr className="d-none d-md-block"/>
      <div className="f_derechos pt-4 text-center">
        <p>&copy; 2024 El Fachero International Textil Industries <a href="https://www.youtube.com/@AlephNeoDev/videos"><i className="bi bi-youtube"></i></a></p>
      </div>
    </footer>
  )
}
