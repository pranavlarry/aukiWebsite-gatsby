import React, { useCallback, useState, useEffect } from 'react';
import './CaseSlide.scss'
import Slide from '../slider/slide';
import CaseStudyExpand from './caseStudyExpand.jsx';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { Link } from 'gatsby'
import case1 from '../../assets/images/Case1.png';
import case2 from '../../assets/images/Case2.png';
import case3 from '../../assets/images/Case3.png';

const getImg = (tag)=> {
    switch(tag) {
        case "aem": return case1;
        case "ecom": return case2;
        case "fend": return case3;
    }
}

const responsive = [
    {
        query: '(min-width: 1150px)',
        slidesToShow: 3,
        isMob: false
    },
    {
        query: '(min-width: 768px) and (max-width:1149px)',
        slidesToShow: 2,
        isMob: false
    },
    {
        query: '(max-width: 767px)',
        slidesToShow: 1,
        isMob: true
    }
];

const CaseSlide = React.memo((props) => {


    const combine = useCallback((arr1, arr2, arr3) => {
        var len = Math.max(arr1.length, arr2.length, arr3.length);
        let i = 0, arr = [];
        while (i < len) {
            arr1[i] !== undefined && arr.push(arr1[i]);
            arr2[i] !== undefined && arr.push(arr2[i]);
            arr3[i] !== undefined && arr.push(arr3[i]);
            i++
        }
        return arr;
    }, [])

    const [showCaseStudy, updateShowCaseStudy] = useState({status:false,data:''});
    const [dataFormated, updateDataFormated] = useState(combine(props.aemdata, props.ecomdata, props.fenddata));
    const isMob = (useMediaQuery({ maxDeviceWidth: 767 }));
    const type = "case-slide";

    const handleLinkClick = useCallback((e, link,data) => {
        e.preventDefault();
        updateShowCaseStudy({
            status: true,
            data: {node: data}
        });
    }, [isMob]);

    const handleClose = useCallback((e) => {
        e.preventDefault();
        updateShowCaseStudy(false);
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div className="caseSlide">
            <div className="caseSlide-title">Case Studies</div>
            {!showCaseStudy.status ?
                responsive.map((slide, index) => {
                    return (
                        <MediaQuery query={slide.query} key={index}>
                            {/* <Slide data={data} handleLinkClick={handleLinkClick} slidesToShow={slide.slidesToShow} type="case-slide" isMob={slide.isMob}/> , (index + 1) % 2 === 0 ? 'even' : 'odd' */}
                            <Slide length={dataFormated.length} slidesToShow={slide.slidesToShow} isMob={isMob} type={type}>
                                {
                                    dataFormated.map(function (data, index) {
                                        const classValue = [type, "slider-slide",index % 2 === 0 ? 'even' : 'odd'];
                                        const link = "case/" + data.fields.slug;
                                        return (
                                            <div key={index} data-index={index} className={classValue.join(' ')}>
                                                <div className={`${type}-container`}>
                                                    <h2 className={`${type}-title`}>{data.frontmatter.title}</h2>
                                                    <p className={`${type}-text`}>{data.frontmatter.shortDesc}</p>
                                                    {isMob ? <a onClick={(e) => handleLinkClick(e, link,data)} className={`${type}-link`} href={link}>
                                                        <span className={`${type}-link-char`}>&#8640;</span>
                                                        <span>read the case study</span>
                                                    </a> :
                                                        <Link className={`${type}-link`} state={{ selected: data.fields.slug }} to={`/case/${data.frontmatter.tag}`}>
                                                            <span className={`${type}-link-char`}>&#8640;</span>
                                                            <span>read the case study</span>
                                                        </Link>
                                                    }
                                                </div>
                                                <img className={`${type}-img`} src={getImg(data.frontmatter.tag)} alt={data.image} />
                                            </div>
                                        );
                                    })
                                }
                            </Slide>
                        </MediaQuery>
                    )
                }) : <CaseStudyExpand handleClose={handleClose}  formateData={showCaseStudy.data} isMob={true} />
            }

        </div>
    );
});

export default CaseSlide;
