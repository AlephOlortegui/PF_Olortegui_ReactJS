import { bg1, bg2, bg3, bg4, sm_bg1, sm_bg2, sm_bg3, sm_bg4, featured1, outfit1, outfit2, outfit3 } from "../assets"
import { Ventajas } from "../Components"

export const Home = () => {
  return (
    <>
      {/* <!-- Carousel --> */}
      <div id="inicioCarousel" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="dark-bg"></div>
            <img src={bg1} className="d-none d-sm-block w-100" alt="img-1" />
            <img src={sm_bg1} className="d-block d-sm-none w-100" alt="img-1" />
            <div className="carousel-caption">
              <h3>Los mejores artículos y accesorios para ti</h3>
            </div>
          </div>
          <div className="carousel-item">
            <div className="dark-bg"></div>
            <img src={bg2} className="d-none d-sm-block w-100" alt="img-2" />
            <img src={sm_bg2} className="d-block d-sm-none w-100" alt="img-2" />
            <div className="carousel-caption">
              <h3>Los más elegantes outfits</h3>
            </div>
          </div>
          <div className="carousel-item">
            <div className="dark-bg"></div>
            <img src={bg3} className="d-none d-sm-block w-100" alt="img-3" />
            <img src={sm_bg3} className="d-block d-sm-none w-100" alt="img-3" />
            <div className="carousel-caption">
              <h3>Calzados Urbanos muy cómodos</h3>
            </div>
          </div>
          <div className="carousel-item">
            <div className="dark-bg"></div>
            <img src={bg4} className="d-none d-sm-block w-100" alt="img-4" />
            <img src={sm_bg4} className="d-block d-sm-none w-100" alt="img-4" />
            <div className="carousel-caption">
              <h3>Complementos y más</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#inicioCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#inicioCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- featured --> */}
      <div className="container-fluid pt-5 px-3 featured">
        <div className="row align-items-center">

          <div className="col-12 col-md-4" data-aos="fade-right" data-aos-duration="700">
            <div className="d-none d-md-block">
              <figure className="model">
                <img src={featured1} alt="f1" />
              </figure>
            </div>
          </div>

          <div className="col">
            <div className="row outfits gy-3">
              <div className="col-12 mt-0" data-aos="fade-left">
                <div className="title">
                  <span className="linea"></span>
                  <span className="text">Featured Outfits</span>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4" data-aos="flip-left" data-aos-duration="500">
                <figure>
                  <img src={outfit2} alt="outfit2" />
                </figure>
              </div>
              <div className="col-12 col-sm-6 col-md-4" data-aos="flip-right" data-aos-duration="1500">
                <figure>
                  <img src={outfit1} alt="outfit1" />
                </figure>
              </div>
              <div className="col-12 col-md-4" data-aos="flip-left" data-aos-duration="1000">
                <figure>
                  <img src={outfit3} alt="outfit3" />
                </figure>
              </div> 
            </div>
          </div>
        </div>
      </div>
      {/* <!-- form subscribe to newsletter--> */}
      <div className="newsletter p-3 p-md-4">
        <h1 className="text-center mb-4 mb-md-0">Subscribe for more</h1>
        <form className="text-center">
          <input type="email" name="email" id="subscribe" className="form-control mb-md-0" />
          <input type="submit" value="Submit" className="button w-100" />
        </form>
      </div>
      {/* <!-- ventajas --> */}
      <Ventajas />
    </>
  )
}
