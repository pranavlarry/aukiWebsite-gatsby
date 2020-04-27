import React from 'react';
import Scope from "./scope.jsx";
import Hire from './hire.jsx';
import FullTech from './fullTech.jsx';
import Slide from '../slider/slide.jsx';
import MediaQuery from 'react-responsive';
import '../case-study/CaseStudy.scss';
import { Link } from 'gatsby'

const DisplaySec = React.memo((props) => {


    if (props.selected === "Case study") {
        let selected;
        switch (props.tabSelected) {
            case 0: selected = props.aemdata
                break;
            case 1: selected = props.ecomdata;
                break;
            case 2: selected = props.fenddata;
                break;

        }

        const responsive = [
            {
                query: '(min-width: 1226px)',
                slidesToShow: 2
            },
            {
                query: '(min-width: 768px) and (max-width: 1225px)',
                slidesToShow: 1
            }
        ]
        // const data=[];
        const type = "service-case";
        return (

            <div className="service-caseStudy services-tab-open in-right">
                {responsive.map((slide, index) => {
                    return (
                        <MediaQuery key={index} query={slide.query}>
                            <Slide length={selected.length} slidesToShow={slide.slidesToShow} type={type}>
                                {
                                    selected.map(function (data, index) {
                                        const classValue = [type, "slider-slide", (index + 1) % 2 === 0 ? 'even' : 'odd'];
                                        const link = "case/" + data.frontmatter.tag;
                                        return (
                                            <div key={index} data-index={index} className={classValue.join(' ')}>
                                                <div className={`${type}-container`}>
                                                    <p className={`${type}-text`}>{data.frontmatter.desc}</p>
                                                    {data.link !== '' ?
                                                        <Link className={`${type}-link`} to={link} state={{selected:data.fields.slug}}>
                                                            <span className={`${type}-link-char`}>&#8640;</span>
                                                            <span>read the case study</span>
                                                        </Link> : ''
                                                    }
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </Slide>
                        </MediaQuery>);
                })
                }
            </div>

        );
    }
    else if (props.selected === "Scope of work") {
        return <Scope title={props.title} data={props.data} isMob={false} />;
    }
    else if (props.selected === "Hire Talent") {
        return <Hire data={props.data} />
    }
    else if (props.selected === "Full Tech Implementation") {
        return <FullTech data={props.data} />
    }
    return null;


});

export default DisplaySec;

