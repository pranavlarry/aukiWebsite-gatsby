import React, { Component } from 'react';
import Form from '../forms/form.jsx';
import './Say-hello.scss';
import $ from 'jquery';
import guy from '../../assets/images/guy.png'


class SayHello extends Component {
    state = {
        submitted: false
    }

    handleSubmit = (val) => {
        this.setState({
            submitted: val
        })
    }
    render() {
        return (
            <div className="hello-main-container">
                <div>
                    {this.props.case && <h1 className="coffee">Got a project in mind, let's grab a coffee.</h1>}

                    <h1 className="hello-title">Say Hello</h1>
                </div>
                <div className="hello-container">
                    <div className="hello-guy">
                        <img src={guy} width="100%" alt="guy" />
                    </div>
                    <div className="hello-form-container">
                        <h1 className="hello-desc">Whether you are ready to hire or just want to understand the quality of resources, fill in this simple form to start a discussion with AUKI. It's completely free.<br /> We will connect with you for a start.</h1>
                        {!this.state.submitted ? <Form onSubmitForm={this.handleSubmit} /> : <ThankYou status={this.state.submitted} close={this.handleSubmit} />}
                    </div>
                </div>
            </div>
        );
    }
}

const ThankYou = React.memo((props) => {
    const styles = {
        width: $(".form-outter-container").width() ? $(".form-outter-container").width() : 630,
        height: $(".form-outter-container").height() ? $(".form-outter-container").height() : 470
    }
    const handleClick = () => {
        props.close(false);
    }
    const message = () => {
        if (props.status === true) {
            return (
                <p className="form-thankYou-msg"><b>Thank you for reaching out, we have <br /> sent you an email from <br /> <span>founder@au-ki.com</span> <br /> please check spam folder if you <br /> have not got them.</b></p>
            )
        }
        else if (props.status === "error") {
            return (
                <p className="form-thankYou-msg">Sorry Something Went Wrong</p>
            )
        }
        else if (props.status === "loading") {
            return (
                <p className="form-thankYou-msg">Submitting...</p>
            )
        }
    }
    return (
        <div className="form-thankYou" style={styles}>
            {message()}
            <button className="form-thankYou-close" onClick={handleClick}><b>Close[x]</b></button>
        </div>
    );
});

export default SayHello;