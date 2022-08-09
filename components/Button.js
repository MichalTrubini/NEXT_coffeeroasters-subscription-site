import Link from 'next/link';

const Button = (props) => {
    return ( 
        <Link href='/subscription' scroll={false}><button className={props.classNameButton + " button"} onClick={props.onClick}>{props.children}</button></Link>
     );
}
 
export default Button;