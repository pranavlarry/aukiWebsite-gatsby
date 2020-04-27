import React from 'react';
import { Link } from 'gatsby';
import "./styles.scss"

const getDetails = (link) => {
    switch (link) {
        case "": return ["Home", "/"];
        case "case": return ["Case Studies", "/case"];
        case "aem": return ["Adobe Expirence Manager", "aem"];
        case "ecom": return ["E-Commerce", "ecom"];
        case "fend": return ["Frontend Development", "fend"];
    }
}

const Breadcrumb = props => {
    const length = props.links.length;
    return (
        <div className="breadcrumb">
            {props.links.map((elem, index) => {
                const [name, link] = getDetails(elem);
                return (
                    <React.Fragment key={index}>
                        <Link to={link}>{name}</Link>
                        {length !== (index + 1) && < span > / </span >}
                    </React.Fragment>
                )
            })}
        </div>

    )

}

export default Breadcrumb;