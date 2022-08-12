import Hero from "../components/Hero";
import Steps from "../components/Steps";
import ChoicesSingle from "../components/ChoiceSingle";
import Layout from '../components/Layout/Layout';
import Button from "../components/Button";
import React, { useEffect } from "react";
import OrderSummary from "../components/OrderSummary";
import { MongoClient } from 'mongodb';

import { selectionActions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../components/Portal";

const Subscription = ({choicesLong, choicesShort}) => {

  const dispatch = useDispatch();

  const expandHandler = (event) => {
    dispatch(selectionActions.expandHandler(event.target.getAttribute("dataid")));
  };

  const selectionHandler = (event) => {
    dispatch(selectionActions.selectionHadler(event.target.getAttribute("dataid")));

    //remove warning message if user made a choice

    const warningMessage = document.getElementById('summary__warning');

    if(warningMessage) warningMessage.remove();

  };
  
  const incompleteChoiceID = useSelector(state => state.selection.incompleteChoiceID);
 
  const orderSummaryChecker = () => {
    dispatch(selectionActions.orderSummaryChecker());
    
  }

  const showSummary = useSelector(state => state.selection.orderSummaryVisible);
  const clickedID = useSelector((state) => state.selection.clickedIDs);
  const resultSelection = useSelector((state) => state.selection.resultSelection);

  useEffect(() => {

    if (incompleteChoiceID !== '') {

      // scroll adjusted for fixed header
      const yOffset = -120;

      // scroll to first choice not selected
      const element = document.querySelector(`[datatest=${incompleteChoiceID}]`);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});

      // expand element that was scrolled to
      dispatch(selectionActions.expandHadlerError(incompleteChoiceID));

      // add warning for the user
      let warning = document.createElement("div");
      warning.setAttribute('id','summary__warning');
      warning.appendChild(document.createTextNode('Please complete your selection'));
      element.parentNode.insertBefore(warning, element.nextSibling)
    }

  },[incompleteChoiceID, dispatch]);

  return (
    <>
    <Portal selector={'#Portal'}>
      {showSummary && <OrderSummary/>}
    </Portal>
    <Layout>
      <Hero
        className="hero__subscription"
        classNameHeader="hero__subscription-header"
        header="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
                artisan coffees from around the globe delivered fresh to your door."
      />
      <section className="plan">
        <Steps classNameHeader="plan__header" classNamePar="plan__text" />
      </section>
      <div className="plan__wrapper margin-fix">
        <div className="plan__container-left">
          {choicesShort.map((item) => (
            <div className="plan__item" key={item.id}  onClick={expandHandler}>
              <p className="plan__item-number" dataid={item.id}>{item.number}</p>
              <p className="plan__item-text" dataid={item.id}>{item.type}</p>
            </div>
          ))}
        </div>
        <div className="plan__container-right">
          <section className="choices">
            {choicesLong.map((item) => (
              <div className="choices__container" key={item.id}>
                <div className="choices__row">
                  <h2
                    className={
                      clickedID.includes(item.id)
                        ? "choices__header choices__header-selected"
                        : "choices__header"
                    }
                    dataid={item.id}
                    datatest={item.id}
                    onClick={expandHandler}
                  >
                    {item.header}
                  </h2>
                </div>
                <div
                  className={
                    clickedID.includes(item.id)
                      ? "choices__items choices__items-selected"
                      : "choices__items"
                  }
                >
                  {item.content.map((choice) => (
                    <ChoicesSingle
                      key={choice.type}
                      dataid={choice.type}
                      className={
                        resultSelection.includes(choice.type)
                          ? "choices__card choices__card-selected"
                          : "choices__card"
                      }
                      onClick={selectionHandler}
                      header={choice.type}
                      text={choice.text}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
          <section className="summary margin-fix">
            <div className="summary__content">
              <p className="summary__title">Order Summary</p>
              <p className="summary__summary">
                “I drink my coffee as{" "}
                <span className="summary__choice">{resultSelection[0]}</span>,
                with a{" "}
                <span className="summary__choice">{resultSelection[1]}</span>{" "}
                type of bean.{" "}
                <span className="summary__choice">{resultSelection[2]}</span>{" "}
                ground ala{" "}
                <span className="summary__choice">{resultSelection[3]}</span>,
                sent to me{" "}
                <span className="summary__choice">{resultSelection[4]}</span>.”
              </p>
            </div>
            <Button onClick={orderSummaryChecker}>Create my plan!</Button>
          </section>
        </div>
      </div>
    </Layout>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:wSEwICprw1IFGg9Z@cluster0.tfa6tfc.mongodb.net/coffeeroasters?retryWrites=true&w=majority"
  );

  const db = client.db();

  const choiceLong = db.collection("choicesLong");
  const choiceShort = db.collection("choicesShort");

  const choicesLong = await choiceLong.find().toArray();
  const choicesShort = await choiceShort.find().toArray();

  client.close();

  return {
    props: {
      choicesLong: choicesLong.map(choiceLong => ({
          id: choiceLong.id,
          header: choiceLong.header,
          content: choiceLong.content
      })),
      choicesShort: choicesShort.map(choiceShort=> ({
        id: choiceShort.id,
        number: choiceShort.number,
        type: choiceShort.type
    })),
    },
    revalidate: 1,
  };
}


export default Subscription;
