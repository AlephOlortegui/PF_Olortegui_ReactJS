export const Mapa = () => {
  return (
    <div className="row mapa py-3 align-items-center justify-content-center">
      <div className="col-12 col-md-5">
        <h2 className="py-2">Encuentranos en:</h2>

        <ul className="nav" role="tablist">
          <li className="nav-item" role="presentation">
            <span className="nav-link d-md-block px-md-0 active" data-bs-toggle="tab" data-bs-target="#tienda1">CC - Real Plaza Salaverry</span>
            <div className="d-none d-md-block">
              <p><span className="icono"><i className="bi bi-geo-fill"></i></span> Av. Gral. Salaverry 2370, Jesús María 15076</p>
              <p><span className="icono"><i className="bi bi-calendar-minus"></i></span> 11am - 9:30pm</p>
            </div>
          </li>
          <li className="nav-item" role="presentation">
            <span className="nav-link d-md-block px-md-0" data-bs-toggle="tab" data-bs-target="#tienda2">Miraflores Indian Market</span>
            
            <div className="d-none d-md-block">
              <p><span className="icono"><i className="bi bi-geo-fill"></i></span> Av. Petit Thouars 5321</p>
              <p><span className="icono"><i className="bi bi-calendar-minus"></i></span> 12pm - 7:00pm</p>
            </div>
          </li>
        </ul>

      </div>
      <div className="col-12 col-md-6">
        <div className="tab-content mt-3">
          <div className="tab-pane fade show active" id="tienda1" role="tabpanel">
            <p><iframe id="map-canvas1" className="map_part" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Real Plaza Salaverry&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></p>
          </div>
          <div className="tab-pane fade" id="tienda2" role="tabpanel">
            <p><iframe id="map-canvas2" className="map_part" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Av. Petit Thouars 5321, Miraflores 15074&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></p>
          </div>
        </div>
      </div>
    </div>
  )
}
