import React from 'react';

const Logo = React.memo((props)=> {
    const data = props.logoData;
    let extrastyle = ["auki-services-title"]
    data.title === "Frontend Development" && extrastyle.push("fend");
    const select=props.menuSelected !== "Scope of work" ? "open" : '';
    return (
        <div className={select+" services-tab-logo"}>
            <div className="services-tab-logo-container">
                <div className={select+" services-tab-logo-title"}>
                    {data.logo !== "" && <img src={data.logo} alt="AEM" width="75px" /> }
                    <h1 className={extrastyle.join(' ')}>{data.title}</h1>
                </div>
                <div className={select+"-display-none"}>
                    {data.subtitle !== "" && <h4 className="auki-logo-subtitle">{data.subtitle}</h4>}
                    <div style={{display :"flex"}}>
                        {data.subtitleLogo !== '' && <img src={data.subtitleLogo} alt="adobe" width="30px" height="25px"/>} 
                        {data.subtitleLogoDesc !== '' && <p>{data.subtitleLogoDesc}</p>}
                    </div>
                </div>
            </div>
        </div>  
    );  
});
 
export default Logo;