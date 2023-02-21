import Nav from "./Nav";
import './text.css';
import img from './img.png';

function Footer() {

    return (
        <footer className="Footer">
            <Nav />
            <div className="bg">

            </div>
            <img src={img} />
            <img src={process.env.PUBLIC_URL + '/images/img.png'} alt="" />
        </footer>
    )
}

export default Footer;