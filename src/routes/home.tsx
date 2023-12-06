import HomeDefault from '../components/Home/HomeDefault';
import HomeHeader from '../components/Home/HomeHeader';
import React from 'react';
import HomeAbout from '../components/Home/HomeAbout';
import HomeBlog from '../components/Home/HomeBlog';
import HomePortfolio from '../components/Home/HomePortfolio';
import HomeContact from '../components/Home/HomeContact';
import HomeNavigation from '../components/Home/HomeNavigation';
import useHomeNavigation from '../hook/useHome';

const Home = () => {
  const { innerWidth } = useHomeNavigation();

  return (
    <React.Fragment>
      <HomeHeader />
      <HomeDefault />
      <HomeAbout />
      <HomeBlog />
      <HomePortfolio />
      <HomeContact />
      { innerWidth < 600 && <HomeNavigation isMobile /> }
    </React.Fragment>
  );

}
export default Home;