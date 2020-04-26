import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Slide.scss';
import $ from 'jquery';

const Slide = React.memo((props)=> {
    const [slidesToShow,updateSlidesToShow] = useState(props.slidesToShow);
    const slider = useRef(),sliderContainer = useRef();
    useEffect(()=> {
        const contWidth=$(slider.current).width();
        const totalWidthNo = (contWidth /slidesToShow)*props.length;
        const totalWidth = ((props.length * (contWidth /slidesToShow))/contWidth)*100;
        let slideWidth = ((contWidth / slidesToShow)*100)/totalWidthNo;
        slideWidth = props.isMob ? slideWidth - 3.2 : slideWidth;
        $(sliderContainer.current).css("width",totalWidth+"%");
        console.log(((contWidth / slidesToShow)*100));
        $(sliderContainer.current).children('.slider-slide').css("width",slideWidth+"%");

    });

    const handleCaseStudyEvenOdd = useCallback(() =>{
        // $(".service-case").each(function(){
        //     if($(this).hasClass("odd")) {
        //         $(this).removeClass("odd");
        //         $(this).addClass("even");
        //     }
        //     else if($(this).hasClass("even")) {
        //         $(this).removeClass("even");
        //         $(this).addClass("odd");
        //     }
        // })
    },[]);
    
    const handleClick = useCallback((e) => {
        const first = $(sliderContainer.current).children('.slider-slide').first();
        const last = $(sliderContainer.current).children('.slider-slide').last();
        const slideWidth = first.width();
        if($(e.target).data("dir") === 'next') {
            $(sliderContainer.current).addClass("transilate");
            $(sliderContainer.current).css("transform","translate3d(-"+slideWidth+"px, 0px, 0px)");
            const timer=setTimeout(function(){
                $(sliderContainer.current).removeClass("transilate");
                first.insertAfter(last);
                $(sliderContainer.current).css("transform","translate3d(0, 0, 0)");
                clearTimeout(timer);
            },500);
        }
        else if($(e.target).data("dir") === 'prev') {
            $(sliderContainer.current).css("transform","translate3d(-"+slideWidth+"px, 0px, 0px)");
            last.insertBefore(first);
            const timer=setTimeout(function(){
                $(sliderContainer.current).addClass("transilate");
                clearTimeout(timer);
            },10);
            const timer1=setTimeout(function(){
                $(sliderContainer.current).css("transform","translate3d(0, 0, 0)");
                clearTimeout(timer1);
            },20);
            const timer2=setTimeout(function(){
                $(sliderContainer.current).removeClass("transilate");
                clearTimeout(timer2);
            },500);
        }
        if(props.type === "service-case") {
            handleCaseStudyEvenOdd();
        }
    },[props.type,handleCaseStudyEvenOdd])

        return (
            <div className="slider carousel" ref={slider}>
                <div className="slider-container" ref={sliderContainer} style={{display: "flex"}}>
                    {props.children}
                </div> 
                <button className="slider-arrow slick-arrow slick-prev" data-dir="prev" onClick={handleClick}>←</button>
                <button className="slider-arrow slick-arrow slick-next" data-dir="next" onClick={handleClick}>→</button>
            </div>
         );
});
 
export default Slide;
