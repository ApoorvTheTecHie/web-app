import React from 'react';
import { Col , Form , FormControl , FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import validateInput from '../../utilities/validations/Register';
import classnames from 'classnames';
import Login from './Login';


export default class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            user : {
                name : '',
                email : '',
                password : ''
            },
            errors : {}
        }
    }

    onChange =(key , e) => {
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
    <div> 
        <div id="content">
            <div className="container">   
                <div>
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="register.html#">Home</a>
                            </li>
                            <li>New account / Sign in
                            </li>
                        </ul>
                    </Col>    
                </div>    
                <div>
                    <Col md={6}>
                        <div className="box">
                            <h1>New account</h1>

                            <p className="lead">Not our registered customer yet?</p>
                            <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                            <p className="text-muted">If you have any questions, please feel free to <Link to="/contact">contact us</Link>, our customer service center is working htmlFor you 24/7.</p>

                            <hr />

                            <Form horizontal onSubmit={this.onSubmit}>
                            <FormGroup controlId="formHorizontalNameRegister">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                </Col>
                                <Col sm={10} className={classnames("", { 'has-error': errors.name })}>
                                    <FormControl 
                                        type="text" 
                                        placeholder="Name" 
                                        value={this.state.user.name} 
                                        onChange={this.onChange.bind(this, 'name')}
                                    />
                                    { errors.name && <span className="help-block error">{errors.name}</span> }
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmailRegister">
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

                            <FormGroup controlId="formHorizontalPasswordRegister">
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
                        <Login />       
                </div>  
            </div>
        </div>                
    </div>            
    );
    }
}
