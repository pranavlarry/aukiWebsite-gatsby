import React from 'react';
import GenericInfo from './GenericInfo';
import './genericinfo.scss';
import '../hireteamtalent/hiret.scss';
const GenericInfoCaller = () => {
    const infos = [
        {
            title: 'Full tech implementation',
            maininfo: 'You can easily outsource implementation and have a complete team of developers for your project. Our full team comprises architect, lead, project manager, developers, UI developers, teasting.<br>We also bring in experts on a need basis.',
            subinfo: 'You can hire the team and scale in an agile model.',
            link: '#'
        },
        {
            title: 'Hire talent',
            maininfo: 'Now you can easily hire developers, starting with one full-time or part-time developer from our managed pool of developers, architects, and functional experts.',
            subinfo: 'Easily integrate them with your existing team and scale faster.',
            link: '#'
        }
    ];
    const infoArray = infos.map((info, index) => {
        return (
            <GenericInfo key={index} title={info.title} maininfo={info.maininfo} subinfo={info.subinfo} link={info.link} />
        );
    });
    return (
        <div className="genericinfo__container">
            <div className="genericinfo__wrapper d-flex">
                {infoArray}
            </div>
        </div>
    );
};
export default GenericInfoCaller;