import { useLocation } from "react-router-dom";

export const useRouteInfo = () => {
  const {pathname} = useLocation();
   // Valores predeterminados
   let documentTitle = 'El Fachero';
   let message = 'Engriete a ti mismo';
   let iconClass = 'bi bi-bag-heart-fill';
 
   // Map para rutas específicas
   const routeMap = {
     '/carrito': {
       documentTitle: 'El Fachero || Carrito',
       message: 'Delivery gratis sin monto mínimo de compra',
       iconClass: 'bi bi-truck'
     },
     '/registro': {
       documentTitle: 'El Fachero || Registro',
       message: 'Todos nuestros beneficios a precios bajos',
       iconClass: 'bi bi-currency-dollar'
     },
     '/ingreso': {
       documentTitle: 'El Fachero || Login',
       message: 'Todos nuestros beneficios a precios bajos',
       iconClass: 'bi bi-currency-dollar'
     },
     '/tienda': {
       documentTitle: 'El Fachero || Tienda',
       message: 'Productos de alta calidad',
       iconClass: 'bi bi-star'
     }
   };
  //verificar las rutas
  if(routeMap[pathname]){
    const routeInfo = routeMap[pathname];
    documentTitle = routeInfo.documentTitle;
    message = routeInfo.message;
    iconClass = routeInfo.iconClass;
  } else if(pathname.startsWith('/carrito/')){
    //justamente solo para el /checkout
    documentTitle = 'El Fachero || Checkout';
    message = 'Delivery gratis sin monto mínimo de compra';
    iconClass = 'bi bi-truck';
  } else if (pathname.startsWith('/tienda/')) {
    // para los detalles de los items
    documentTitle = 'El Fachero || Detalles';
    message = 'Productos de alta calidad';
    iconClass = 'bi bi-star';
  }

  return { documentTitle, message, iconClass };
}
