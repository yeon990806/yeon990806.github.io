import HomeDefault from '../components/Home/HomeDefault';
import HomeHeader from '../components/Home/HomeHeader';
import React from 'react';
import HomeAbout from '../components/Home/HomeAbout';
import HomeBlog from '../components/Home/HomeBlog';
import HomePortfolio from '../components/Home/HomePortfolio';
import HomeContact from '../components/Home/HomeContact';

const Home = () => (
  <React.Fragment>
    <HomeHeader />
    <HomeDefault />
    <HomeAbout />
    <HomeBlog />
    <HomePortfolio />
    <HomeContact />
  </React.Fragment>
);
export default Home;