import { Link } from "react-router-dom"

const ItemList = ({displayedClothes, search, typeFilter}) => {
  let items = displayedClothes.map(i => (
    <div className="item" key={i.id}>
      <figure className="mb-0">
        <img src={i.cloudSrc} alt={i.title} />
      </figure>
      <div className="info">
        <p className="title mb-1 fw-medium">{i.title}</p>
        <div className="cta">
          <p className="price mb-1 fw-medium">${i.price}</p>
          <Link to={i.id} // Detalles.jsx
                state={{
                  search,
                  typeFilter
                }}>
                  <i className="bi bi-info-circle-fill"></i>
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="itemListContainer">
      {items} 
    </div>
  )
}

export default ItemList