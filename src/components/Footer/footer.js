import React from 'react';
import styled from 'styled-components';

function footer(){
    return(
        <FooterContainer className="main-footer text-start">
            <div className="footer-middle">
                <div className="contianer">
                    <div className="row">
                        <div className="col-md-3 col-sm-6" >
                            <h4><a href="/">Our Services</a></h4>
                            <h4><a href="/">Book Appointment</a></h4>
                            <h4><a href="/">Gallery</a></h4>
                            <h4><a href="/">Customer Review</a></h4>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>About US</h4>
                            <ul className="list-unstyled">
                                <li>Address : </li>
                                <li>Some more detials </li>
                                <li>more detials</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom"></div>
                    <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} - All Rights Reserved to **** 
                    </p>
                </div>
            </div>
        </FooterContainer>
   );
}

export default footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem; 
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}
ul li a:hover {
    color: var(--mainLightGrey);

}
`;