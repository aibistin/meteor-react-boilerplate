import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    signupSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        if (password.length < 8) {
            this.setState({ error: "Password must be at least 8 characters long" });
            return;
        }

        /* Note: { email: email, password: password } */
        Accounts.createUser({ email, password }, (err) => {
            this.setState({
                error: err ? err.reason : '',
            });
        });
    }

    render() {
        return (
            <div className="boxed-view">
            <div className="boxed-view__box">
              <h2>Signup Page</h2>

                    { this.state.error ?
                    (
                    <div className="item__status-message">
                       <p>{this.state.error}</p>
                    </div>
                    )
                    : undefined }

              <form className="boxed-view__form" onSubmit={ this.signupSubmit.bind(this) } noValidate>
                  <input type="email" name="email" ref="email" placeholder="Email Address" />
                  <input type="password" name="password" ref="password" placeholder="Password"/>
                  <button className="button">Create Account</button>
              </form>
              <Link to="/">Already have an account?</Link>
            </div>
            </div>
        );
    }
}
