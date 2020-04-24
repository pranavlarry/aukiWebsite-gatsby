import React, { useCallback } from 'react';
import Logo from './logo';
import Menu from './menu';
import DisplaySec from './displaySec';
import Arrow from './arrow.jsx';
// import getCaseData from '../../content/caseStudy';

const Panel= React.memo((props)=> {
    const getData = useCallback(()=> {
        if(props.menuSelected === "Scope of work") {
            return props.data[props.tabSelected].scopes;
        }
        else if(props.menuSelected === "Case study") {
            // return getCaseData[props.tabSelected].data;
        }
        else if(props.menuSelected === "Hire Talent") {
            return props.data[props.tabSelected].hire;
        }
        else if(props.menuSelected === "Full Tech Implementation") {
            return props.data[props.tabSelected].fullTech;
        }
        else if(props.menuSelected === "hello") {

        }

    },[props]);
    const displayData= getData();
    return (
        <div className="services-tab">
            {props.menuSelected === "Scope of work" && <Arrow dir="left"/>} 
            <Logo logoData={props.logoData} menuSelected={props.menuSelected}/> 
            <DisplaySec selected={props.menuSelected} 
                tabSelected={props.tabSelected} 
                data={displayData}
                aemdata={props.aemdata} 
                ecomdata={props.ecomdata} 
                fenddata={props.fenddata}/>
            <Menu onMenuChange={props.handleMenuChange} menuSelected={props.menuSelected}/>
            {props.menuSelected === "Scope of work" && <Arrow dir="right"/>}
        </div>
    );
})
 
export default Panel;