import React from 'react';

import Header from '../components/Header';
import Map from '../components/Map';
import withRoot from '../withRoot';

const App = () => {
  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default withRoot(App);
