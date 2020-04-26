import React, { useCallback, useEffect } from 'react';
import './CaseStudyExpand.scss';
import Slide from '../slider/slide';
import aemLogo from '../../assets/images/2152874.png';
import adobeLogo from '../../assets/images/adobe.png';

const getSubHtml = (tag) => {
    switch (tag) {
        case "aem":
            return (
                <React.Fragment>
                    <div style={{display:"flex"}}>
                        <img width="70px" src={aemLogo} alt="aem" />
                        <h4 style={{margin:0,padding:"10px",width:"100px"}}>Adobe Expirence Manager</h4>
                    </div>
                    <h4 style={{ color: "rgb(211,111,26)" }}>BRONZE PARTNER</h4>
                    <div style={{ display: "flex" }}>
                        <img src={adobeLogo} alt="adobe" width="40px" />
                        <p style={{ paddingTop: ".5em" }}><b>Adobe</b> Solution Patner Program</p>
                    </div>
                </React.Fragment>
            );
        case "ecom":
            return (
                <React.Fragment>

                </React.Fragment>
            )
        case "fend":
            return (
                <React.Fragment>
                    
                </React.Fragment>
            )
    }
}

const CaseStudyExpand = React.memo((props) => {

  

    const getTemplate = useCallback((caseData, index) => {
        const data = caseData.node.frontmatter;
        return (
            <div className="caseExpand slider-slide" key={index} >
                <a href="#" className="caseExpand-close" onClick={(e) => props.handleClose(e)}><b>x[Close]</b></a>
                <div className="caseExpand-Ctitle" >
                    <h2 className="caseExpand-Ctitle-title">{data.desc}</h2>
                     <div className="caseExpand-Ctitle-subtitle">
                        {getSubHtml(props.formateData[0].node.frontmatter.tag)}
                    </div> 
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

