import React from 'react';
import { Col,Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Component } from 'react';
import validateInput from '../../utilities/validations/Login';
import classnames from 'classnames';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : {
                email : '',
                password : ''
            },
            errors : {}
        }
    }

    onChange = (key,e) => {
        let { user } = this.state;
        user[key] = e.target.value;
        this.setState({ user });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.isValid()){
            console.log(this.state.user);
        }
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.state.user); 
        
        if(!isValid) { this.setState({ errors }); } 
        
        return isValid;
    }    

render(){
    const { errors } = this.state; 
    return(
        <div className="container">

            <Col md={6}>
                <div className="box">
                    <h1>Login</h1> 
                        <p className="lead">Already our customer?</p>
                        <p className="text-muted">Pellentesque habitant 
                            morbi tristique senectus et netus et malesuada 
                            fames ac turpis egestas. Vestibulum tortor quam, 
                            feugiat vitae, ultricies eget, tempor sit amet, 
                            ante. Donec eu libero sit amet quam egestas semper. 
                            Aenean ultricies
                            mi vitae est. Mauris placerat eleifend leo.
                        </p>

                        <hr />

                        <Form horizontal onSubmit={this.onSubmit}>
                            <FormGroup controlId="formHorizontalEmailLogin">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10} className={classnames("", { 'has-error': errors.email })}>
                                    <FormControl 
                                        type="text" 
                                        placeholder="Email" 
                                        value={this.state.user.email} 
                                        onChange={this.onChange.bind(this, 'email')}
                                    />
                                    { errors.email && <span className="help-block error">{errors.email}</span> }
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPasswordLogin">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl 
                                        type="password" 
                                        placeholder="Password" 
                                        value={this.state.user.password}
                                        onChange={this.onChange.bind(this, 'password')}
                                    />
                                    <p className="errorColor">{errors.password}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
            </Col>    
        </div>                            
    );
}
}

