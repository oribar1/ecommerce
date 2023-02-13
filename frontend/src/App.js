
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container} from 'react-bootstrap'
import HomeScrenn from './screens/HomeScrenn';
const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        <HomeScrenn />
      </Container>
    </main>
    <Footer />
    
    </>
  );
}

export default App;

