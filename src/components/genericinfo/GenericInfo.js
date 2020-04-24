import React from 'react';
const GenericInfo = props => {
    let id = props.title.replace(/\s/g, '-').toLowerCase();
    return (
        <div className="genericinfo" id={id}>
            <div className="genericinfo__content-wrapper">
                <div className="genericinfo__content-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="genericinfo__content">
                    <div className="genericinfo__content-text">
                        <p dangerouslySetInnerHTML={{ __html: props.maininfo }} className="genericinfo__content-main"></p>
                        <p>{props.subinfo}</p>
                    </div>
                    <div className="genericinfo__content-readmore">
                        <a href={props.link}>read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GenericInfo;

