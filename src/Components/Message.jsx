import { useLocation } from 'react-router-dom'

export const Message = () => {
  const location = useLocation()
  let message= "";
  let iconClass="";

  switch (location.pathname) {
    case '/carrito':
      message = 'Delivery gratis sin monto mínimo de compra';
      iconClass = "bi bi-truck";
      break;
    case '/tienda':
    case '/tienda/chompas':
    case '/tienda/pantalones':
    case '/tienda/poleras':
    case '/tienda/polos':
      message = 'Productos de alta calidad';
      iconClass = "bi bi-star";
      break;
    case '/registro':
      message = 'Todos nuestros beneficios a precios bajos';
      iconClass = "bi bi-currency-dollar";
      break;
    default:
      message = 'Engriete a ti mismo';
      iconClass = "bi bi-bag-heart-fill";
  }

  return (
    <div className="intro text-center">
      <span className="intro_big_icon"><i className={iconClass}></i></span>
      <p className="intro_mensaje mb-0" data-aos="fade-left"><span className="intro_icon p-1"><i className={iconClass}></i></span> {message}</p>
    </div>
  )
}
