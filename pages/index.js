import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Button from "../components/Button";
import Layout from "../components/Layout/Layout";
import { MongoClient } from "mongodb";
import Head from "next/head";

const Home = ({ collections, highlights }) => {
  return (
    <>
      <Head>
        <title>Coffeeroasters main</title>
        <meta name="description" content="Coffee website" />
      </Head>

      <Layout>
        <Hero
          className="hero__home"
          classNameHeader="hero__home-header"
          header="Great coffee made simple."
          text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        />
        <div></div>
        <section className="collection margin-fix">
          <div className="collection__header-container">
            <h2 className="collection__header">our collection</h2>
          </div>
          <div className="collection__list">
            {collections.map((collection) => (
              <div className="collection__item" key={collection.id}>
                <div className="collection__img-container">
                  <img
                    className="collection__img"
                    src={collection.img}
                    alt={collection.title}
                  />
                </div>
                <div className="collection__content-container">
                  <h3 className="collection__title">{collection.title}</h3>
                  <p className="collection__text">{collection.text}</p>
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
                    className={
                      "highlights__item-img--" +
                      item.id +
                      " highlights__item-img"
                    }
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
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:wSEwICprw1IFGg9Z@cluster0.tfa6tfc.mongodb.net/coffeeroasters?retryWrites=true&w=majority"
  );

  const db = client.db();

  const collection = db.collection("collection");
  const highlight = db.collection("highlights");

  const collections = await collection.find().toArray();
  const highlights = await highlight.find().toArray();

  client.close();

  return {
    props: {
      collections: collections.map((collection) => ({
        id: collection.id,
        img: collection.img,
        title: collection.title,
        text: collection.text,
      })),
      highlights: highlights.map((highlight) => ({
        id: highlight.id,
        img: highlight.img,
        title: highlight.title,
        text: highlight.text,
      })),
    },
    revalidate: 1,
  };
}

export default Home;
