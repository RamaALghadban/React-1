import logo from "../src/assets/3.jpg";

const hero = (
    <section id="hero" className="py-5 bg-image img-thumbnail position-relative "   style={{ backgroundImage: `url(${logo})` , height: `100vh`,backgroundSize:'cover' }}>
        <div className="container h2 " >
          <h1 className="mt-5" > Pedro's <span className="text-warning fw-bold">Pizzerla</span> </h1>
          <p className="position-absolute bottom-50 " > <span className="text-warning">PIZZA</span> TO FIT ANY TASTE !</p>
          <button type="button" className=" btn btn-warning position-absolute top-50"   > ORDER NOW <i className='fas fa-pizza-slice'></i></button>
        </div>
    </section>
)

const Hero = () => {
    return hero;
}

export default Hero;