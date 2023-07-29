import React, { Fragment } from 'react';
import Navbar from '../../components/User-side/Navbar/Navbar';
import Banner from '../../components/User-side/Banner/Banner';
import Posts from '../../components/User-side/Posts/Posts';
import Footer from '../../components/User-side/Footer/Footer';

  
const Home = () => {
  return (
      <Fragment>
        <Navbar/>
        <Banner/>
        <Posts/>
        <Footer/>
      </Fragment>
  );
}

export default Home;
