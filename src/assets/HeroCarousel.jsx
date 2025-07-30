import Carousel from 'react-bootstrap/Carousel';
import '../styles/HeroCarousel.scss';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

function HeroCarousel() {
  return (
    <div className="hero-carousel">
      <Carousel fade interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Explorá lo último de Apple</h3>
            <p>iPhones, MacBooks y más al mejor precio</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Accesorios originales</h3>
            <p>AirPods, cargadores, fundas y mucho más</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra sin moverte de casa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;