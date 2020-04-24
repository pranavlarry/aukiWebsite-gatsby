import React from 'react';
import './DropDown.scss';
import $ from 'jquery';
const handleClick = (type,e,props) => {
    const selected = $(e.target).text();
    $("."+type+"-dropdown .active.dropdown-list").removeClass('active');
    $(e.target).addClass('active');
    $("."+type+"-dropdown span").text(selected);
    props.dropClick();
}

const handleDrop= (type) => {
    $(".activeDrop.dropdown-lists").not("."+type+"-dropdown .dropdown-lists").removeClass("activeDrop");
    $("."+type+"-dropdown .dropdown-lists").toggleClass("activeDrop");
}
const Dropdown = React.memo((props) => {
    return (
        <div className={`${props.type}-dropdown hello-form`} style={{position:"relative"}}>
            <div onClick={()=>handleDrop(props.type)} className="dropdown">
                <span>{props.heading}</span>
                <ul className="dropdown-lists">
                    {props.datas.map((data,index)=>{
                        return (
                            <li key={index} onClick={(e)=>handleClick(props.type,e,props)} className="dropdown-list">{data}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
});

export default Dropdown;