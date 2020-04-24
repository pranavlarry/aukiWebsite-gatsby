import React from 'react';

const Scope = React.memo((props)=> {
    let expertise='';
    if(props.data.expertise.length !==0 ) {
        expertise = props.data.expertise.map((elem,index)=>{
            return <p key={index}>{elem}</p>
        });
        expertise =
                    <div className="services-tab-scope-products">
                        {expertise}
                    </div>;
    }
    return(
        <div className="services-tab-scope">
            <div className="services-tab-scope-container">
                <p className="services-tab-scope-desc">{props.data.desc}</p>
                {props.isMob ? 
                    <div className="services-tab-scope-econtainer">
                        {expertise !== '' &&
                        <div className="services-tab-scope-expertiseContainer">
                            <p className="services-tab-scope-expertise"><b>Our expertise</b></p>
                            {expertise}
                        </div> }
                        <div className="services-tab-scope-logo">
                            {props.data.subtitleLogo !== "" &&
                                <div style={{display:"flex"}}>
                                    <img src={props.data.subtitleLogo} width= "55px" alt="subtitle" />
                                    <p style={{maxWidth: "85px",paddingLeft: "5px"}}><b>{props.data.subtitleLogoDesc}</b></p>
                                </div> }
                            {props.data.subtitle !== "" && <h4 className="auki-logo-subtitle">{props.data.subtitle}</h4>}
                            <div style={{display :"flex"}}>
                                {props.data.subtitleLogo !== '' && <img src={props.data.subtitleLogo1} alt="adobe" width="30px" height="25px"/>} 
                                {props.data.subtitleLogoDesc !== '' && <p>{props.data.subtitleLogoDesc1}</p>}
                            </div>
                        </div>
                    </div> 
                    :
                        <div className="services-tab-scope-expertiseContainer">
                            {expertise !== '' && <p className="services-tab-scope-expertise"><b>Our expertise</b></p> }
                            {expertise}
                        </div> 
                }
                {props.isMob && 
                <div className="services-tab-scope-hire">
                    <p className="services-tab-scope-hireDesc">Hire high quality experties team or engineers</p>
                    <div className="services-tab-scope-hireBtnContainer">
                        <button className="services-tab-scope-hireBtn">HIRE TEAM</button>
                        <button className="services-tab-scope-hireBtn">HIRE TALENT</button>
                    </div>
                </div> 
                }
            </div>
        </div>
    );
});

export default Scope;