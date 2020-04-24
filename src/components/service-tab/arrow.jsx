import React from 'react';
import Jquery from 'jquery';
const handlePrev=()=> {
   let $prev= Jquery(".selected.services-indicator-list").prev();
   if($prev.length === 0){
        $prev=Jquery(".selected.services-indicator-list").nextAll(".services-indicator-list:last");
    }
    $prev.trigger('click');
}
const handleNext=()=> {
    let $next= Jquery(".selected.services-indicator-list").next();
    if($next.length === 0){
        $next=Jquery(".selected.services-indicator-list").prevAll(".services-indicator-list:last");
    }
    $next.trigger('click');
}
const left=<div onClick={handlePrev} className="services-tab-arrow-sym left">&#8592;</div>;
const right=<div onClick={handleNext} className="services-tab-arrow-sym right">&#8594;</div>;
const Arrow = React.memo((props)=> {
    return (
        <div className=" services-tab-arrow">
                { props.dir==='left'? left : right }
        </div>
    );
});

export default Arrow;