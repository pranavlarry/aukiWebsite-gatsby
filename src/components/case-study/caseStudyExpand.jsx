import React, {useCallback, useEffect} from 'react';
import './CaseStudyExpand.scss';
import Slide from '../slider/slide';
import getData from '../../content/caseStudy';

// const templateDesk = (

//     </div>


const CaseStudyExpand = React.memo((props)=> {
    const checkType = useCallback((val)=>{
        let index = val.indexOf("aem");
        index = index === -1 ? val.indexOf("ecom") : index;
        index = index === -1 ? val.indexOf("fend") : index;
        return index;
    },[]);

    // useEffect(()=> {
    //     const marginTop= document.getElementsByClassName("navbar")[0].offsetHeight;
    //     document.querySelector(".caseExpand").style.marginTop = marginTop+ "px";
    // })

    const getDataIndex = useCallback((type)=> {
        switch(type) {
            case "aem": return 0;
            case "ecom": return 1;
            case "fend": return 2;
        }
    },[]);

    const getTemplate = useCallback((data,index)=> {
        return(
            <div className="caseExpand slider-slide" key={index} >
                <a href="#" className="caseExpand-close" onClick={(e)=> props.handleClose(e)}><b>x[Close]</b></a>
                <div className="caseExpand-Ctitle" >
                    <h2 className="caseExpand-Ctitle-title">{data.desc}</h2>
                    <div className="caseExpand-Ctitle-subtitle">
                        {subItems.logo !== "" && (
                                <div className="caseExpand-Ctitle-logo">
                                    <img src={subItems.logo} width="70px" height="70px" alt="subtitle" /> 
                                    <p><b>{subItems.logoTitle}</b></p>
                                </div>
                            ) }
                        {subItems.caption !== "" && <h4 className="auki-logo-subtitle">{subItems.caption}</h4> }
                        {subItems.subCaption}
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
    },[]);
    let path;
    try {
        path = props.location.pathname.split("/");
    }
    catch {
        path = props.link.split("/")
    }
    const typeIndex = checkType(path);
    const type = path[typeIndex];
    const id = path[typeIndex+1];
    const dataIndex = getDataIndex(type);
    const data = getData[dataIndex].data;
    const selectedData = data[id];
    let formateData = [selectedData];
    formateData = formateData.concat([...data.filter((val)=> val!==data[id])]);
    const subItems = getData[dataIndex].subItems;



    // const mainbg = props.isMob ? "url("+data.aem.bgImg+")" : '';
    // const subBg = !props.isMob ? "url("+data.aem.bgImg+")" : '';
    if(!props.isMob) {
        return ( 
            <Slide length={formateData.length} slidesToShow={1} type="case-study-expand">
                   {
                       formateData.map((data,index)=> {
                            return (
                                getTemplate(data,index)
                            )
                       })
                   }
            </Slide>
         );
      
    }
    else {
        return (
            getTemplate(selectedData,0)
        )
    }
});
 
export default CaseStudyExpand;

