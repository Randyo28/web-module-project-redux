import React from 'react';

import {Header, AddedFeatures, AdditionalFeatures, Total} from './index'

const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total />
      </div>
    </div>
  );
};

export default App;
