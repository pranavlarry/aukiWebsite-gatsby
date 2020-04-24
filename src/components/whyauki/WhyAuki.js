import React, { Component } from 'react';
import LeftSideContent from './LeftSideContent'
import RightSideContent from './RightSideContent'
import './whyauki.scss';

const whyauki = [
    {
        data: '1',
        title: 'Accelerate Your Hiring',
        description: 'Start interviewing candidates in 3 days.',
        content: 'Our goal is to create valuable partnerships with our stakeholders and create a reputation of excellance based upon customer satisfaction, which ultimately will contribute to success for everyone involved.',
    },
    {
        data: '2',
        title: 'On Demand Hiring',
        description: 'Add and reduce your teamsize as per your budget anytime. We ensure that budgets do not overshoot anytime.',
        content: 'Our goal is to create valuable partnerships with our stakeholders and create a reputation of excellance based upon customer satisfaction, which ultimately will contribute to success for everyone involved.',
    },
    {
        data: '3',
        title: 'Work With Specialist',
        description: 'Specialist in any technology that suits your business project',
        content: 'Our goal is to create valuable partnerships with our stakeholders and create a reputation of excellance based upon customer satisfaction, which ultimately will contribute to success for everyone involved.',
    }
]

class WhyAuki extends Component {
    constructor(props) {
        super(props);
        this.state = { content: 1, mouse: 1, selected: 0 };
    }
    clickedHandle = (event, data, index) => {
        this.setState({ content: data, selected: index });

    }
    mouseOver = (event, data) => {
        this.setState({ mouse: data });
    }

    mouseOut = (event) => {
        this.setState({ mouse: this.state.content });
    }

    render() {
        return (
            <div className="d-flex whyauki__container">
                <LeftSideContent clickedHandle={this.clickedHandle}
                    mouseOver={this.mouseOver}
                    mouseOut={this.mouseOut}
                    whyauki={whyauki}
                    selected={this.state.selected} />
                <RightSideContent mouse={this.state.mouse} whyauki={whyauki} />
            </div>
        );
    }
}

export default WhyAuki;
