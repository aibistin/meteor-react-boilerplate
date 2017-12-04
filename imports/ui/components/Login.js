import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        };
    }

    loginSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({ email }, password, (err) => {
            this.setState({
                error: err ? ("Check your email and password!") : ''
            });
        });
    }


    render() {
        return (
            <div className="boxed-view">
              <div className="boxed-view__box">

                    { this.state.error ?
                    (
                      <div className="item__status-message">
                         <p>{this.state.error}</p>
                      </div>
                    )
                    : undefined }

                <h2>Login Page</h2>
                  <form className="boxed-view__form" onSubmit={ this.loginSubmit.bind(this) }>
                    <input type="email" name="email" ref="email" placeholder="Email Address" />
                    <input type="password" name="password" ref="password" placeholder="Password"/>
                    <button className="button">Login</button>
                  </form>
                <Link to="/signup">Don't have an account?</Link>
             </div>
           </div>
        );
    }

}
