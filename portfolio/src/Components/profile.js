import React from "react";
import {IntroProfile} from './IntroProfile'
import {CurrentPosition} from './CurrentPosition'
import {SocialMedia as Media} from './SocialMedia'
// Profile component is the left side component
// Contains name, schooling, and active social media links
// Creating a function component which is named

export const Profile = () => {
  return (
    <>
    <div className='left-upper'>
     <IntroProfile/>
     <CurrentPosition/>
     <Media/>
     </div>
    </> 
  );
};
