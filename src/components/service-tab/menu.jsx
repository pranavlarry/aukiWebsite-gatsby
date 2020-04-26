import React, { useState, useCallback } from 'react';
//on resize color fix
const Menu= React.memo((props)=> {
    const [selected,updateSelected] = useState(0);

    const menuList = [
        "Scope of work","Full Tech Implementation","Hire Talent","Case study","Say hello"
    ];
    
    const handClick=useCallback((index,value)=>{
        if(index !== 4) {
            props.onMenuChange(value);
            updateSelected(index);
        }
        else {
            //scroll to say hello here
        }

    },[props]);
    let select;

    let menuClass = ["services-tab-menu"];
    selected === 0 && menuClass.push("scope");
    return (
        <div className={menuClass.join(' ')}>
            <ul className="services-tab-menu-list">
                {   
                    menuList.map((elem,index)=>{
                        if(index === 0) {
                            select = "first";
                        }
                        else if (index === selected) {
                            select = "selected";
                        }
                        else {
                            select = "";
                        }
                        return <li key={index} id={index} className={select+" services-tab-menu-item"} onClick={()=>handClick(index,elem)}>{elem}</li>
                    })
                }
            </ul>
        </div>
    );
});
 
export default Menu;    
