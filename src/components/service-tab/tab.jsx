import React, { useEffect } from 'react';
import Jquery from 'jquery';

const Tabs =React.memo((props)=> {

    const handleChange= (index,e)=>{
        
 
        if(props.isMob) {
            if(Jquery(".services-indicator > .services-tab-scope").css('display') === 'block') {
                Jquery(".services-indicator > .services-tab-scope").slideUp();
            }
            else {
                Jquery(".services-indicator > .services-tab-scope").slideDown();
            }
            
            Jquery(e.target).toggleClass("selected");
        }
        if(index !== props.selected) {
            props.handleTabClick(index);
            const timer=setTimeout(function() {
                Jquery(".services-indicator > .services-tab-scope").slideDown();
                clearTimeout(timer);
            },10);
        }

    }

    const li = props.children.map((elem,index)=>{
            let style = index === props.selected ? 'selected': '';
            return  <li className={`${style} services-indicator-list`} key={index} onClick={handleChange.bind(this,index)}>{elem.props.title === "Commerce Cloud" ? "E-commerce" : elem.props.title} <span>&#x021C0;</span></li>;
        });
    return ( 
        <div className="services" style={{overflow:"hidden"}}>
            <ul className="services-indicator">
            {li}
            </ul>
            {props.children[props.selected]}
        </div>
        );
    
});
 
export default Tabs;
