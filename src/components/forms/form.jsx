import React, { Component } from 'react';
import Input from './input.jsx';
import $ from 'jquery';
class FormTest extends Component {
    state = { 
        form:{
            fname: {
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "First Name"
                },
                validation: {
                    required: true,
                    minLength: 3,
                    onlyAlpha: true
                },
                touched:false,
                valid: false,
                value: ""
            },
            lname:{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "Last Name"
                },
                validation: {
                    required: true,
                    minLength: 3,
                    onlyAlpha: true
                },
                touched:false,
                valid: false,
                value: ""
            },
            email:{
                elementType: "input",
                elementConfig: {
                    type:"email",
                    placeholder: "Email"
                },
                validation: {
                    required: true,
                    emailVal: true
                },
                touched:false,
                valid: false,
                value: ""
            },
            phone:{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "Phone"
                },
                validation: {
                    required: true,
                    minLength: 10,
                    onlyNum: true,
                    maxLength: 10
                },
                valid: false,
                touched:false,
                value: ""
            },
            companayName:{
                elementType: "input",
                elementConfig: {
                    type:"text",
                    placeholder: "Company Name"
                },
                validation: {
                    required: true,
                    onlyAlphaNum: true,
                    minLength: 3
                },
                valid: false,
                touched:false,
                value: ""
            },
            companySize:{
                elementType: "select",
                elementConfig: {
                    options: {
                        heading: 'Company Size',
                        data:[1,2,3,4,5,6,7,8,9]
                    }
                },
                validation: {
                    required: true,
                    onlyNum: true
                },
                touched:false,
                valid: false,
                value: ""
            },
            contractorHiring:{
                elementType: "select",
                elementConfig: {
                    options: {
                        heading: 'How many contractors do you plan to hire in next 12 months?',
                        data:[1,2,3,4,5,6,7,8,9]
                    }
                },
                validation: {
                    required: true,
                    onlyNum: true
                },
                touched:false,
                valid: false,
                value: ""
            },
            skillAndExpirence:{
                elementType: "input",
                elementConfig: {
                    placeholder: "Breifly describle the skills and expirence you are seeking",
                    name: "skillAndExpirence",
                },
                validation: {
                    required: true,
                    onlyAlphaNum: true,
                    minLength: 10
                },
                touched:false,
                valid: false,
                value: ""
            }
        },
        formIsValid: false
    }
    isVaild=(value,rules)=>{
        let valid = true;
        let regx;
        if(rules.required) {
            valid = value.trim() !== '' && valid;
        }
        if(rules.minLength) {
            valid = value.length >= rules.minLength && valid;
        }
        if(rules.maxLength) {
            valid = value.length <= rules.maxLength && valid;
        }
        if(rules.onlyAlpha) {
            regx = /^[a-zA-Z]+$/;
            valid = regx.test(value) && valid;
        }
        if(rules.onlyAlphaNum) {
            regx = /^[a-zA-Z0-9 ]+$/;
            valid = regx.test(value) && valid;
        }
        if(rules.onlyNum) {
            regx =/^[0-9]+$/;
            valid = regx.test(value) && valid;
        }
        if(rules.emailVal) {
            regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            valid = regx.test(value) && valid;
        }
        return valid;

    }
    handleChange = (e,name)=> {
        const updateForm = {...this.state.form};
        const updateFormData = {...updateForm[name]};
        let value='';
        if(name === 'contractorHiring' || name === 'companySize') {
            value = $("."+name+"-dropdown .active").text();
        }
        else {
            value = e.target.value;
        }
        updateFormData.valid = this.isVaild(value,this.state.form[name].validation);
        updateFormData.value = value;
        updateFormData.touched = true;
        updateForm[name]=updateFormData;
        let formIsValid = true;
        for (let name in updateForm) {
            formIsValid = updateForm[name].valid && formIsValid;
        }
        this.setState({
            form : updateForm,
            formIsValid: formIsValid
        });
    }

    handleSubmit= (e)=> {
        
        e.preventDefault();
        const self=this;
        if(self.state.formIsValid) {
            const formData = {};
            for (let id in self.state.form) {
                formData[id] = self.state.form[id].value;
            }
            $.post(
                '/aukiserver/sayhello',
                formData,
                function(result){
                    result === 'success' ? self.props.onSubmitForm(true) : self.props.onSubmitForm("error");
                }
            );
            self.props.onSubmitForm("loading")
        }

        
    }

    componentDidMount() {
        $(window).on("click.dropdown",(e)=>{
            if(!$(e.target).parents(".dropdown").length && !$(e.target).hasClass("dropdown")){
                $(".dropdown-lists").removeClass("activeDrop");
            }
        })
    }

    componentWillUnmount() {
        $(window).off("click.dropdown");
    }

    render() { 
        let formElementsArray = [];
        for(let key in this.state.form) {
            formElementsArray.push({
                name: key,
                config: this.state.form[key]
            });
        }
        return ( 
            <div className="form-outter-container">
                <form >
                    {
                        formElementsArray.map((formElement,index)=> {
                            return <Input elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value} 
                                key={index}
                                changed={(e)=>this.handleChange(e,formElement.name)}
                                valid={formElement.config.valid}
                                touched={formElement.config.touched}
                                type={formElement.name}
                                />
                        })
                    }
                    <button type="submit" onClick={this.handleSubmit} className="hello-form-submit">SUBMIT</button>
                </form>
            </div>
         );
    }
}
 
export default FormTest;
