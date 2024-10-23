import { useSearchParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Alert, Loader } from "../../components";
import { useGetAllProducts, useGetCategorias } from "../../hooks";

export const Tienda = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  //console.log(searchParams.toString()) 
  const typeFilter = searchParams.get("type");

  const {categoriaLinks, isGettingCategories} = useGetCategorias()
  //console.log(categoriaLinks) //demora unos seg's
  const {dbProducts, isLoading, err} = useGetAllProducts()

  const displayedClothes = typeFilter
          ? dbProducts.filter(c => c.categoria === typeFilter)
          : dbProducts;

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  const filterButtons = categoriaLinks.map((i,index) => (
    <li className="nav-item" key={index}>
      <button onClick={() => handleFilterChange("type", i)}
               className={`filter-btn mx-1 ${typeFilter === i ? "selected" : ""}`}>
                {i}
      </button>
    </li>
  ))
  return (
    <div className="container-fluid tienda">
      <div className="row pb-4">
        <div className="col-12 pt-3 pb-2 tiendaMenu">
          <h1 className="text-center">Nuestros Productos</h1>
          <ul className="nav justify-content-center">
            {(!isGettingCategories && !err) && (
              <>
                {filterButtons}
                {typeFilter ? (
                  <button
                    onClick={() => handleFilterChange("type", null)}
                    className="filter-btn mx-1 clear-filters"
                    >Clear filter</button>
                  ) : null}
              </>
            )}
          </ul>
        </div>

        <div className="col-12 mt-3">
          {isLoading ? <Loader /> : err ? 
                <div className="err-box">
                  <Alert
                        dismissible={false}
                        alertMessage={err}
                        alertClass="danger" />
                </div> : (
            <ItemList 
                displayedClothes={displayedClothes}
                search={`?${searchParams.toString()}`}
                typeFilter={typeFilter}/>
          )}
        </div>

      </div>
    </div>
  )
}
