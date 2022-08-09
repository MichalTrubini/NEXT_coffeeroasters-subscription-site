import Hero from "../components/Hero";
import Steps from "../components/Steps";
import ChoicesSingle from "../components/ChoiceSingle";
import Layout from '../components/Layout/Layout';
import Button from "../components/Button";
import React, { useEffect, useState } from "react";

import { selectionActions } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Subscription = () => {
  const choicesLong = [
    {
      id: "id-1",
      header: "How do you drink your coffee?",
      content: [
        {
          id: "id-1-1",
          type: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: "id-1-2",
          type: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: "id-1-3",
          type: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: "id-2",
      header: "What type of coffee?",
      content: [
        {
          id: "id-2-1",
          type: "Single Origin",
          text: "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: "id-2-2",
          type: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: "id-2-3",
          type: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: "id-3",
      header: "How much would you like?",
      content: [
        {
          id: "id-3-1",
          type: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          id: "id-3-2",
          type: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          id: "id-3-3",
          type: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: "id-4",
      header: "Want us to grind them?",
      content: [
        {
          id: "id-4-1",
          type: "Wholebean",
          text: "Best choice if you cherish the full sensory experience",
        },
        {
          id: "id-4-2",
          type: "Filter ",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: "id-4-3",
          type: "Cafetiére",
          text: "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: "id-5",
      header: "How often should we deliver?",
      content: [
        {
          id: "id-5-1",
          type: "Every week",
          text: "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          id: "id-5-2",
          type: "Every 2 weeks",
          text: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          id: "id-5-3",
          type: "Every month",
          text: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ];

  const choicesShort = [
    {
      id: "id-1",
      number: '01',
      type: "Preferences",
    },
    {
      id: "id-2",
      number: '02',
      type: "Bean Type",
    },
    {
      id: "id-3",
      number: '03',
      type: "Quantity",
    },
    {
      id: "id-4",
      number: '04',
      type: "Grind Option",
    },
    {
      id: "id-5",
      number: '05',
      type: "Deliveries",
    },
  ];

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

  const clickedID = useSelector((state) => state.selection.clickedIDs);
  const resultSelection = useSelector((state) => state.selection.resultSelection);

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {

    const width = window.innerWidth; 
    setScreenWidth(width);

    if (incompleteChoiceID !== '') {

      // scroll adjusted for fixed header
      const yOffset = () => {
        if (screenWidth < 767) return -100
        else return -120;
      }; 

      const element = document.querySelector(`[datatest=${incompleteChoiceID}]`);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset();
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
  );
};

export default Subscription;
