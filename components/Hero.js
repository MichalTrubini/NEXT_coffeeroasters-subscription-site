import { useRouter } from 'next/router'

import Button from "./Button";

const Hero = (props, {router} ) => {

    const { asPath } = useRouter()

    const location = asPath;

    return (
        <section className='hero margin-fix'>
            <div className={props.className + ' hero__main'}>
                <h1 className={props.classNameHeader}>{props.header}</h1>
                <p className="hero__text">{props.text}</p>
                {location && <Button classNameButton="button__hero">Create your plan</Button>}
            </div>
        </section>
     );
}
 
export default Hero;