import { useState, useEffect } from 'react';

import Hero from '../components/Hero';

import commitmentSmall from '../public/images/about/mobile/image-commitment.jpg';
import commitmentMedium from '../public/images/about/tablet/image-commitment.jpg';
import commitmentLarge from '../public/images/about/desktop/image-commitment.jpg';

import qualitySmall from '../public/images/about/mobile/image-quality.jpg';
import qualityMedium from '../public/images/about/tablet/image-quality.jpg';
import qualityLarge from '../public/images/about/desktop/image-quality.jpg';
import Layout from '../components/Layout/Layout';

import Image from 'next/image';

const About = () => {

    const locations = [
        {
            id: 1,
            src: './images/about/desktop/illustration-uk.svg',
            country: 'United Kingdom',
            street: '68 Asfordby Rd',
            city: 'Alcaston',
            zip: 'SY6 1YA',
            phone: '+44 1241 918425'
        },
        {
            id: 2,
            src: './images/about/desktop/illustration-canada.svg',
            country: 'Canada',
            street: '1528 Eglinton Avenue',
            city: 'Toronto  Ontario',
            zip: 'M4P 1A6',
            phone: '+1 416 485 2997'
        },
        {
            id: 3,
            src: './images/about/desktop/illustration-australia.svg',
            country: 'Australia',
            street: '36 Swanston Street',
            city: 'Kewell',
            zip: 'Victoria',
            phone: '+61 4 9928 3629'
        }
    ]

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {

        const width = window.innerWidth;
        console.log('useeffect' + width)
        function handleResize() {
            setScreenWidth(width);
          }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[screenWidth]);

    console.log('screenwidth ' + screenWidth)

    return ( 
        <Layout>
            <Hero 
                className="hero__about"
                classNameHeader="hero__about-header"
                header="About us"
                text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
            />
            <section className='commitment margin-fix'>
  
                {screenWidth && <Image src={commitmentSmall} alt="commitment" className="commitment__img"/>}

                <div className="commitment__content">
                    <h2 className="commitment__header">Our commitment</h2>
                    <p className="commitment__text">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </section>
            <section className="quality margin-fix">
                <picture>
                    <source media="(max-width: 767px)" srcSet={qualitySmall} />
                    <source media="(max-width: 1439px)" srcSet={qualityMedium} />
                    <source media="(min-width: 1440px)" srcSet={qualityLarge} />
                    <img src={qualitySmall} alt="commitment" className="quality__img"/>
                </picture>
                <div className="quality__content">
                    <h2 className="quality__header">Uncompromising quality</h2>
                    <p className="quality__text">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
            </section>
            <section className="locations margin-fix">
                <h2 className="locations__header">Our headquarters</h2>
                <div className="locations__items">
                    {locations.map(item => 
                        <div className="locations__item" key={item.id}>
                            <div className="locations__img-container">
                                <img className="locations__img" src={item.src} alt={item.country} />
                            </div>
                            <h3 className="locations__item-header">{item.country}</h3>
                            <div className="locations__address-container">
                                <p className="locations__item-address">{item.street}</p>
                                <p className="locations__item-address">{item.city}</p>
                                <p className="locations__item-address">{item.zip}</p>
                                <p className="locations__item-address">{item.phone}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
     );
}
 
export default About;