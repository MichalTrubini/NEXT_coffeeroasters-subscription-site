import Link from 'next/link';

const Button = (props) => {
    return ( 
        <Link href='/subscription'><div className={props.classNameButton + " button"} onClick={props.onClick}>{props.children}</div></Link>
     );
}
 
export default Button;