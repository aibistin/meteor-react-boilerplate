import React from 'react';
import PropTypes from 'prop-types';
///
////// Local Imports
///
import Header from './Header';

const App = (props) => {
    return (
        <div>
          <Header subHeading={props.subHeading} />
        </div>
        );
};

App.PropTypes = {
}

export default App;
