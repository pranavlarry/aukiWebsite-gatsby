import React from 'react';
const RightSideContent = (props) => {
    return (
        <div className="whyauki__content">
            {
                props.whyauki.filter(item => item.data == props.mouse)
                    .map((item, index) => {
                        return (
                            <p key={index}>{item.content}</p>
                        );
                    })

            }
        </div>

    )
}
export default RightSideContent;