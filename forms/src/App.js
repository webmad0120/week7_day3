import React from 'react';

import DynamicMoviesList from './components/dynamicLists/dynamicMoviesList'


import Container from 'react-bootstrap/Container'


function App() {

  return (

    <Container as="main">

      <h1>App de listas e iteraciones</h1>
      <hr></hr>



      <DynamicMoviesList />


    </Container>

  );
}

export default App;
