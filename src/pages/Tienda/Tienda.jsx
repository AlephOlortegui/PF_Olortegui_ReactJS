import { useEffect, useState } from "react"
import { getDocs } from 'firebase/firestore';
import {productsCollectionRef} from '../../firebase/firebaseConfig';
import { useGetCategorias } from "../../hooks/useGetCategorias";
import { useSearchParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Loader } from "../../components";

export const Tienda = () => {
  const [clothes, setClothes] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  //console.log(searchParams.toString()) 
  const typeFilter = searchParams.get("type");

  const {categoriaLinks, isGettingCategories} = useGetCategorias()
  //console.log(categoriaLinks) //demora unos seg's

  const [isLoadingData, setIsLoadingData] = useState(false)
  const [err, setError] = useState(null)

  useEffect(() => {

    const getData = async () => { 
      setIsLoadingData(true)
      try {
        const querySnapshot = await getDocs(productsCollectionRef);
        const DBdata = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        //console.log(DBdata)
        setClothes(DBdata)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      }
      finally{
        setIsLoadingData(false)
      }
    } 
     getData();
  }, [])

  const displayedClothes = typeFilter
          ? clothes.filter(c => c.categoria === typeFilter)
          : clothes;

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
            {!isGettingCategories && (
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
          {isLoadingData ? <Loader /> : (
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
