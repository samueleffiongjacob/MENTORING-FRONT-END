import React  from "react";

// import Banner from "../components/Banner";
import FlashCards from "../components/FlashCards"
import Team from "../components/Team"
//import SocialMediaBar  from "../components/SOCIALMeadia/social"
import Blog from '../pages/blog'

const Home = () => {
    return (
      <div>
        {/* <Banner /> */}
        <FlashCards />
        <Team />
        {/* < SocialMediaBar /> */}
        <Blog />
      </div>
    );
  };
  
export default Home;