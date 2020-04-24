import React from 'react';

const Hire=React.memo((props)=>{
    return (
        <div className="services-tab-hire services-tab-open in-right">
            <div className="odd services-tab-hire-tab">
                <div className="services-tab-hire-desc">
                    <h3 className="services-tab-hire-heading">Hire Team</h3>
                    <p className="services-tab-hire-para">{props.data.hireTeam}</p>
                </div>
            </div>
            <div className="even services-tab-hire-tab">
                <div className="services-tab-hire-desc">
                    <h3 className="services-tab-hire-heading">Hire Talent</h3>
                    <p className="services-tab-hire-para">{props.data.hireTalent}</p>
                </div>
            </div>
        </div>
    );
});

export default Hire;