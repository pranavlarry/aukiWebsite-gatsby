import React from 'react';

const FullTech = React.memo((props)=> {
    return(
        <div className="services-tab-full services-tab-open in-right">
            <div className="services-tab-full-desc">
                <h3 className="services-tab-full-heading">Full Tech Implementation</h3>
                <p className="services-tab-full-para">{props.data.desc}</p>
            </div>
        </div>
    );
});

export default FullTech;