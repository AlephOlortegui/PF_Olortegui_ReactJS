import { useEffect, useState } from "react";
import inventario from "../../data/productos"

export const useGetTiendaCategorias = () => {
  const [categoriaLinks, setLinks] = useState([]);

  useEffect(() => {
    const categoriasUnicas = inventario.reduce((acc, curr) => {
      let x = curr.categoria;
      if (acc.indexOf(x) === -1) {
        acc.push(x);
      }
      return acc;
    }, []);
    setLinks(categoriasUnicas);
  }, []);

  return {categoriaLinks}
}
