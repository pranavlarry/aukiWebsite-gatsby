import React, { useEffect, useCallback, useRef } from 'react';
import './Navbar.scss';
import $ from 'jquery';
import logo from '../../assets/images/auki.png'
import {Link} from 'gatsby'

console.log(logo)


const Navbar = React.memo((props)=> {
    const mobMenuButton = useRef(), navMenu=useRef();
    const stickyElement=useCallback(()=> {
        try {
            // var header = document.querySelector('.weareauki__container');
            // var headerHeight = getComputedStyle(header).height.split('px')[0];
            var navbar = document.querySelector('.navbar');  
            var scrollValue = window.scrollY;
            
            if (scrollValue > 100){
            //   
              navbar.classList.add('is-fixed');
            //   const timer= setTimeout(()=> {
            //     navbar.classList.add('up');
            //     navbar.style.transform = "translateY(0%)";
            //     clearTimeout(timer);
            //   },10)
              
            } else if (scrollValue < 100 ){
            //   navbar.classList.remove('up');
              navbar.classList.remove('is-fixed');
            //   navbar.removeAttribute("style");
              
            }
        }
        catch(err) {

        }
      
    },[]);
    
    useEffect(() => {
        
        window.addEventListener('scroll', stickyElement);
    },[stickyElement]);

    const goToService = useCallback((e)=>{
        e.preventDefault();
        const val = $('.services-indicator').offset().top - 200;
        $('html,body').animate({scrollTop: val+'px'},800);
    },[])    

    const menuBtnClick = useCallback(()=> {
        $(mobMenuButton.current).toggleClass("open");
        $(navMenu.current).slideToggle();
    },[]);
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <div className="navbar-logo">
                        <img className="navbar-logoImg" src={logo} alt="auki" />
                        <h4 className="navbar-auki">AUKI</h4>
                    </div>
                    <h4 className="navbar-pioneer">Pioneering Experience</h4>
                </div>
                <div className="navbar-menu" ref={navMenu}>
                    <ul className="navbar-list">
                        <li><Link activeClassName="active" to="/">Home</Link></li>
                        <li><a href="#" onClick={goToService}>service</a> </li>
                        <li><Link activeClassName="active" to="/about-us">about us</Link></li>
                        <li><Link activeClassName="active" to="/partner-prg">partner program</Link></li>
                    </ul>
                </div>
                <div className="menu btn1" data-menu="1" onClick={menuBtnClick} ref={mobMenuButton}>
                        <div className="icon-left"></div>
                        <div className="icon-right"></div>
                </div>
            </nav>
          );
});
 
export default Navbar;