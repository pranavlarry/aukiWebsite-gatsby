import React, { useState, useEffect, useCallback } from 'react';
import Tabs from './tab.jsx';
import Panel from './panel.jsx';
import Scope from './scope.jsx';
import './Style.scss';
import Jquery from 'jquery';
import MediaQuery, { useMediaQuery } from 'react-responsive';

const data =
    [
        {  //aem
            scopes: {
                desc: "Adobe Experience Manager (AEM) is a content management system from Adobe Experience Cloud. This is an intergrated collection of online marketing and web analysics products. As an AEM Specialised Bronze partner, Auki has years of in-depth expirence with Adobe's products in general and AEM in particular.",
                expertise: ["AEM Sites", "Analytics", "Target", "AEM Forms"],
                subtitle: "BRONZE PARTNER",
                subtitleLogo: "./assets/2152874.png",
                subtitleLogoDesc: "Adobe Experience Manager",
                subtitleLogo1: "./assets/adobe.png",
                subtitleLogoDesc1: [<b>Adobe</b>, " solution partner"]
            },
            caseStudy: [
                {
                    image: "",
                    imageAlt: "",
                    link: "#",
                    title: "",
                    text: "Help large financial organisation to outsource their AEM development activity offshore with a dedicated team."
                },
                {
                    image: "",
                    imageAlt: "",
                    link: "#",
                    title: "",
                    text: "Helping a large financial organisation to effectively re-think and realise the value of AEM implementation."
                },
                {
                    image: "",
                    imageAlt: "",
                    link: "#",
                    title: "",
                    text: "Help large financial organisation to outsource their AEM development activity offshore with a dedicated team."
                },
                {
                    image: "",
                    imageAlt: "",
                    link: "#",
                    title: "",
                    text: "Helping a financial organisation to effectively re-think and realise the value of AEM implementation."
                }
            ],
            hire: {
                hireTeam: "You can easily outsource implementation and hav a complete team of developers for your project. Our full teaam compries architect, lead, project manager, developers,UI developers, testing.",
                hireTalent: "Now you can easily hire developers, starting with one full-time or part-time developer from our managed pool of developers, architects and functional experts."
            },
            fullTech: {
                desc: "You can easily outsource implementation and hav a complete team of developers for your project. Our full teaam compries architect, lead, project manager, developers,UI developers, testing. Now you can easily hire developers, starting with one full-time or part-time developer from our managed pool of developers, architects and functional experts.",
                link: "#"
            }



        },

        { //E-commerce
            scopes: {
                desc: "",
                expertise: ['a', 'b', 'c'],
                subtitle: "",
                subtitleLogo: "",
                subtitleLogo1: "",
                subtitleLogoDesc: ""
            },
            caseStudy: [],
            hire: {
                hireTeam: "",
                hireTalent: ""
            },
            fullTech: {
                desc: "",
                link: "#"
            }

        },

        { //frontend dev
            scopes: {
                desc: "",
                expertise: ['a', 'b', 'c'],
                subtitle: "",
                subtitleLogo: "",
                subtitleLogo1: "",
                subtitleLogoDesc: ""
            },
            caseStudy: [],
            hire: {
                hireTeam: "",
                hireTalent: ""
            },
            fullTech: {
                desc: "",
                link: "#"
            }

        },

    ]
const logos = [
    {
        logo: "./assets/2152874.png",
        title: "Adobe Experience Cloud",
        subtitle: "BRONZE PARTNER",
        subtitleLogo: "./assets/adobe.png",
        subtitleLogoDesc: [<b>Adobe</b>, " solution partner"]

    },
    {
        logo: "./assets/ecom.png",
        title: "Commerce Cloud",
        subtitle: "",
        subtitleLogo: "",
        subtitleLogoDesc: ""

    },
    {
        logo: "./assets/frontend.png",
        title: "Frontend Development",
        subtitle: "",
        subtitleLogo: "",
        subtitleLogoDesc: ""

    },
]


const ServiceTab = React.memo((props) => {
    const [tabSelected, updateTabSelected] = useState(0);
    const [menuSelected, updateMenuSelected] = useState("Scope of work");
    const isMob = (useMediaQuery({ maxDeviceWidth: 767 }));


    useEffect(() => {
        if (isMob) {
            handleMob();
        }
    });

    useEffect(() => {
        if (isMob) {
            Jquery(".selected.services-indicator-list").removeClass("selected");
        }
    }, [])

    const handleMob = useCallback(() => {
        const i = tabSelected + 1;
        Jquery(".services-indicator > .services-tab-scope").remove();
        Jquery(".services-tab-scope").clone().insertAfter(".services-indicator-list:nth-child(" + i + ")");
    }, [tabSelected]);

    const handleMenuChange = useCallback((menu) => {
        updateMenuSelected(menu);
    }, []);

    const handleChangeAnimation = useCallback((dir, tab) => {
        let val = dir === "next" ? -100 : 100;
        Jquery(".services-tab").addClass("transilate");
        Jquery(".services-tab").css("transform", "translateX(" + val + "%)");
        const timer = setTimeout(() => {
            changeTab(tab);
            val = val * -1;
            Jquery(".services-tab").css("transform", "translateX(" + val + "%)");
            Jquery(".services-tab").addClass("transilate");
            const timer1 = setTimeout(() => {
                Jquery(".services-tab").css("transform", "translateX(0%)");
                clearTimeout(timer1);
            }, 20);
            clearTimeout(timer)
        }, 500);
    }, []);

    const handleTabChange = (tab) => {
        if (tab > tabSelected && !isMob) {
            handleChangeAnimation("next", tab);
        }
        else if (tab < tabSelected && !isMob) {
            handleChangeAnimation("prev", tab);
        }
        else {
            changeTab(tab);
        }

    };

    const changeTab = (tab) => {
        updateTabSelected(tab);
        updateMenuSelected("Scope of work");
    };

    const handleMediaQueryChangeDesk = (matches) => {
        const i = tabSelected + 1;
        if (matches) {
            Jquery(".services-indicator-list:nth-child(" + i + ")").addClass("selected");
            Jquery(".services-indicator > .services-tab-scope").remove();
        }
    }

    const handleMediaQueryChangeMob = (matches) => {
        if (matches) {
            Jquery(".selected.services-indicator-list").removeClass("selected");
            handleMob();
        }
    }


    return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={768} onChange={handleMediaQueryChangeDesk}>
                <Tabs selected={tabSelected} handleTabClick={handleTabChange}>

                    {
                        logos.map((logo, index) => {
                            return (
                                <Panel
                                    aemdata={props.aemdata} 
                                    ecomdata={props.ecomdata} 
                                    fenddata={props.fenddata}
                                    key={index}
                                    title={logo.title}
                                    logoData={logo}
                                    data={data}
                                    tabSelected={tabSelected}
                                    menuSelected={menuSelected}
                                    handleMenuChange={handleMenuChange} />
                            );
                        })
                    }
                </Tabs>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767} onChange={handleMediaQueryChangeMob}>
                <Tabs selected={tabSelected} handleTabClick={handleTabChange} isMob={true}>
                    {logos.map((logo, index) => {
                        return (
                            <Scope
                                title={logo.title}
                                key={index}
                                data={data[tabSelected].scopes}
                                isMob={true}
                            />
                        )
                    })
                    }
                </Tabs>
            </MediaQuery>
        </React.Fragment>

    );
});

export default ServiceTab;