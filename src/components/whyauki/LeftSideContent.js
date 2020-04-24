import React from 'react';
const LeftSideContent = (props) => {
    return (
        <div className="whyauki__titles">
            <h1 className="whyauki">Why Auki</h1>
            {props.whyauki.map((item, index) => {
                const selected = props.selected === index ? 'selected' : '';
                return (
                    <div key={index}>
                        <h5 className={selected}
                            onClick={(event) =>  props.clickedHandle(event, item.data, index) }
                            onMouseOver={(event) => props.mouseOver(event, item.data)}   
                            onMouseOut={(event) => props.mouseOut(event)}>
                            <span className="whyauki-title">{item.title}</span><span className="whyauki-title-arrow">&#8640;</span>
                        </h5>
                        <p className={selected ? 'whyauki__description-selected' : 'whyauki__description'}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default LeftSideContent;