import { Container } from "react-bootstrap";
import classes from "./banner.module.css";
import { Link } from "react-router-dom";

const Banner = ({activePageName,classAtd}) => {
    return(
        // <Container className={classes['root']} fluid>
        <Container className={classes[classAtd]} fluid>
            {/* <div className={classes['nav']}>
                <h2 className={classes['title']}>{activePageName}</h2>
                <p>
                    <Link to="/home" className={classes['link']}>Home</Link><i className="fas fa-long-arrow-alt-right" />{activePageName}</p>
            </div> */}
        </Container>
    );
}

export default Banner;