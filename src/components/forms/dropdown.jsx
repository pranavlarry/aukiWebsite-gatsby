import React, { useState, useCallback, useEffect } from 'react';
import './DropDown.scss';
import $ from 'jquery';

const Dropdown = React.memo((props) => {
    const [val, updateVal] = useState([]);

    useEffect(() => {
        if (props.type === "areaOfInterest") {
            const loc = window.location.pathname;
            // console.log($(`.${props.type}-dropdown .dropdown-list`))
            if (loc.includes("aem")) {
                $(`.${props.type}-dropdown .dropdown-list:nth-child(1)`).addClass("active");
                updateVal(["Adobe Experience Cloud"])
            }
            else if (loc.includes("ecom")) {
                $(`.${props.type}-dropdown .dropdown-list:nth-child(2)`).addClass("active");
                updateVal(["E-Commerce"])
            }
            else if (loc.includes("fend")) {
                $(`.${props.type}-dropdown .dropdown-list:nth-child(3)`).addClass("active");
                updateVal(["Frontend Development"])
            }
        }
    }, [])

    useEffect(() => {
        if (props.multi) {
            $("." + props.type + "-dropdown span").text( val.length !==0 ? val.join(",") : "Choose you areas of interest");
            $("."+ props.type + "-dropdown span").data("value",val.join(","));
            props.dropClick();
        }
    }, [val])

    const handleClick = useCallback((e, data) => {
        if (!props.multi) {
            $("." + props.type + "-dropdown .active.dropdown-list").removeClass('active');
            $("." + props.type + "-dropdown span").text(data);
            $("."+ props.type + "-dropdown span").data("value",data);
            props.dropClick();
            $("." + props.type + "-dropdown .dropdown-lists").toggleClass("activeDrop");
        } else {
            val.includes(data) ? updateVal((ps) => ps.filter((d) => d !== data)) : updateVal(ps => [...ps, data]);
        }
        $(e.target).toggleClass('active');
    }, [val]);

    const handleDrop = useCallback((e) => {
        $(".dropdown-lists.activeDrop").not("." + props.type + "-dropdown .dropdown-lists").removeClass("activeDrop");
        if (!e.target.className.includes("dropdown-list")) {
            $("." + props.type + "-dropdown .dropdown-lists").toggleClass("activeDrop");
        }

    }, []);

    return (
        <div className={`${props.type}-dropdown hello-form`} style={{ position: "relative" }}>
            <div onClick={handleDrop} className="dropdown">
                <span>{props.heading}</span>
                <ul className="dropdown-lists">
                    {props.datas.map((data, index) => {
                        return (
                            <li key={index} onClick={(e) => handleClick(e, data)} className="dropdown-list">{data}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
});

export default Dropdown;