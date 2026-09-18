import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import './footer.css';
function Footer() {
    return (
        <footer className="footer"> 
        built with
        <FontAwesomeIcon icon={faHeart} className="fa-icon" aria-hidden="true" />
        by
        <a href="https://eazybytes.com" target="_blank" rel="noopener noreferrer">
        EazyBytes
        </a>
        </footer>
    );
}
export default Footer;


