import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withRouter }
from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

import PropTypes from 'prop-types';

const Header = (props) => {

    return (
        <div className="header">
          <div className="header__content">
             <h1 className="header__title">Some Header</h1>
                {props.subHeading ? <h3 className="header__title">{props.subHeading}</h3> : undefined  }
                   {
                       Meteor.userId ? 
                       <button className="button button__link-text" onClick={ () => Accounts.logout() }>Log Out</button>
                       : undefined
                  }
          </div>
        </div>
    );
};

Header.PropTypes = {
    subHeading: PropTypes.string,
};

export default withRouter(Header);

// const { match, location, history } = this.props;
// console.log("Location,", location);
