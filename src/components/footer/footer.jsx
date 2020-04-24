import React from 'react';
import './footer.scss';
import { useCallback } from 'react';
import $ from 'jquery';

const Footer = React.memo(()=> {
    const year =  new Date().getFullYear();
    const goUp = useCallback((e)=> {
        e.preventDefault();
        $("body,html").animate({scrollTop:"0px"},800);
    });
    return (
        <footer className="footer">
            <a href="#" onClick={goUp} className="footer-up">
                <svg version="1.1" className="footer-up-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
                        <g>
                            <g>
                                <path d="M506.157,132.386c-7.803-7.819-20.465-7.831-28.285-0.029l-207.73,207.299c-7.799,7.798-20.486,7.797-28.299-0.015
                                L34.128,132.357c-7.819-7.803-20.481-7.79-28.285,0.029c-7.802,7.819-7.789,20.482,0.029,28.284l207.701,207.27
                                c11.701,11.699,27.066,17.547,42.433,17.547c15.358,0,30.719-5.846,42.405-17.533L506.128,160.67
                                C513.946,152.868,513.959,140.205,506.157,132.386z" />
                            </g>
                        </g>
                </svg>
            </a>
            <p className="footer-desc">&copy; {year} <b>AUKI</b> - All rights reserved.</p>
        </footer>

    );
});

export default Footer;
