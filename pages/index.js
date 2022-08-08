import Hero from '../components/Hero';
import Steps from "../components/Steps";
import Button from '../components/Button';
import Layout from '../components/Layout/Layout';

const Home = () => {

  const collection = [
    {
      id: 1,
      img: "./images/home/desktop/image-gran-espresso.png",
      title: "Gran Espresso",
      text: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    },
    {
      id: 2,
      img: "./images/home/desktop/image-planalto.png",
      title: "Planalto",
      text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    },
    {
      id: 3,
      img: "./images/home/desktop/image-piccollo.png",
      title: "Piccollo",
      text: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    },
    {
      id: 4,
      img: "./images/home/desktop/image-danche.png",
      title: "Danche",
      text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    },
  ];

  const highlights = [
    {
      id: 1,
      img: "./images/home/desktop/icon-coffee-bean.svg",
      title: "Best quality",
      text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      id: 2,
      img: "./images/home/desktop/icon-gift.svg",
      title: "Exclusive benefits",
      text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      id: 3,
      img: "./images/home/desktop/icon-truck.svg",
      title: "Free shipping",
      text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];

  return (
    <Layout>
      <Hero
        className="hero__home"
        classNameHeader="hero__home-header"
        header="Great coffee made simple."
        text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
      />
      <section className="collection margin-fix">
        <div className="collection__header-container">
          <h2 className="collection__header">our collection</h2>
        </div>
        <div className="collection__list">
          {collection.map((item) => (
            <div className="collection__item" key={item.id}>
              <div className="collection__img-container">
                <img
                  className="collection__img"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="collection__content-container">
                <h3 className="collection__title">{item.title}</h3>
                <p className="collection__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="highlights margin-fix">
        <div className="highlights__intro">
          <h2 className="highlights__header">Why choose us?</h2>
          <p className="highlights__text">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="highlights__items">
          {highlights.map((item) => (
            <div className="highlights__item" key={item.title}>
              <div className="highlights__img-container">
                <img
                  className={"highlights__item-img--" + item.id + " highlights__item-img"}
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="highlights__content-container">
                <h3 className="highlights__item-header">{item.title}</h3>
                <p className="highlights__item-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="steps__home">
        <h2 className="steps__home-header">How it works</h2>
        <Steps
          classNameSteps="steps__margin-fix"
          classNameHeader="steps__item-title-dark"
          classNamePar="steps__item-text-dark"
        />
        <Button>Create your plan</Button>
      </section>
    </Layout>
  )
}

export default Home;