import React, { useCallback, useEffect } from 'react';
import './CaseStudyExpand.scss';
import Slide from '../slider/slide';
// import getData from '../../content/caseStudy';

// const templateDesk = (

//     </div>


const CaseStudyExpand = React.memo((props) => {

    const getTemplate = useCallback((caseData, index) => {
        const data =caseData.node.frontmatter;
        return (
            <div className="caseExpand slider-slide" key={index} >
                <a href="#" className="caseExpand-close" onClick={(e) => props.handleClose(e)}><b>x[Close]</b></a>
                <div className="caseExpand-Ctitle" >
                    <h2 className="caseExpand-Ctitle-title">{data.desc}</h2>
                    {/* <div className="caseExpand-Ctitle-subtitle">
                        {subItems.logo !== "" && (
                                <div className="caseExpand-Ctitle-logo">
                                    <img src={subItems.logo} width="70px" height="70px" alt="subtitle" /> 
                                    <p><b>{subItems.logoTitle}</b></p>
                                </div>
                            ) }
                        {subItems.caption !== "" && <h4 className="auki-logo-subtitle">{subItems.caption}</h4> }
                        {subItems.subCaption}
                    </div> */}
                </div>
                <div className="caseExpand-Cdesc">
                    <ul className="caseExpand-Cdesc-list">
                        <li className="caseExpand-Cdesc-item">
                            <h2 className="caseExpand-Cdesc-heading">Problem</h2>
                            <p className="caseExpand-Cdesc-para">{data.problem}</p>
                        </li>
                        <li className="caseExpand-Cdesc-item">
                            <h2 className="caseExpand-Cdesc-heading">Outcome</h2>
                            <p className="caseExpand-Cdesc-para">{data.outcome}</p>
                        </li>
                        <li className="caseExpand-Cdesc-item">
                            <h2 className="caseExpand-Cdesc-heading">What Did We Do</h2>
                            <p className="caseExpand-Cdesc-para">{data.whatWeDid}</p>
                        </li>
                    </ul>
                    <button className="caseExpand-Cdesc-hello">SAY HELLO</button>
                </div>
            </div>
        );
    }, []);




    if (!props.isMob) {
        return (
            <Slide length={props.formateData.length} slidesToShow={1} type="case-study-expand">
                {
                    props.formateData.map((data, index) => {
                        return (
                            getTemplate(data, index)
                        )
                    })
                }
            </Slide>
        );

    }
    else {
        return (
            getTemplate(props.formateData, 0)
        )
    }
});

export default CaseStudyExpand;

