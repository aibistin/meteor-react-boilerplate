import React from 'react';
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

export default App;
