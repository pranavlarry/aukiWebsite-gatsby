import React, {useCallback} from 'react';
// import TextLoop from "react-text-loop";
import './weareauki.scss';
import HireT from '../hireteamtalent/HireT';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import $ from 'jquery';
const WeAreAuki=React.memo(() => {
    const headLine = "We are AUKI";
    const tagLine0 = "a team of coders and doers, working with";
    const services = ['E-commerce', 'Adobe Experience Cloud', 'Frontend Development', 'APP Development'];
    const tagLine1 = " digital agencies worldwide in";
    const footerText = "Discover our Auki formula";
    let i = 0;

    const discoverAuki = useCallback((e)=> {
        e.preventDefault();
        const val = $('.services-indicator').offset().top - 200;
        $('html,body').animate({scrollTop: val+'px'},800);
    },[]);

    return (
        <div className="weareauki__container">
            <div className="weareauki__content-wrapper">
                <div className="weareauki__content">
                    <h1>{headLine}</h1>
                    <div>
                        <p>{tagLine0}<br className="weareauki__br"></br>{tagLine1}</p>
                        <div className="weareauki__services">
                            <TypistLoop interval={500}>
                                {services.map(text =>
                                    <Typist key={text} startDelay={0}>{text}
                                        <Typist.Backspace count={text.length} delay={2000} />
                                    </Typist>)}
                            </TypistLoop>
                        </div>
                    </div>
                </div>
            </div>
            <HireT />
            <div className="weareauki__content-formula">
                <p>{footerText}</p>
                <a href="#" onClick={discoverAuki}>
                    <svg version="1.1" className="weareauki__content-formula-downarrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
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
            </div>
        </div>
    );
});

export default WeAreAuki;
