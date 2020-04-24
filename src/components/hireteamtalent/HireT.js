import React from 'react';
const HireT = () => {
    const infos = [
        {
            title: 'Hire Team',
            info: 'Outsource your complete project to the remote full stack team.'
        },
        {
            title: 'Hire Talent',
            info: 'Add individual contributors and easily augment you team.'
        }
    ];

    return (
        <div className="hire__container">
            <div className="hire__content-wrapper">
                {
                    infos.map((item, index) => {
                        return (
                            <div key={index} id={item.title.replace(/\s/g, '-').toLowerCase()}>
                                <h2>{item.title}</h2>
                                <p>{item.info}</p>
                            </div>
                        );
                    }
                    )
                }
            </div>
        </div>

    );
};
export default HireT;