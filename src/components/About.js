import React from "react";
import user from '../data/user.js'
import Links from './Links'

function About(prop) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {prop.bio}
      {/* {user.bio && <p>{user.bio}</p>} */}
      {/*user.bio ? <p>{user.bio}</p> : null*/}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links />
    </div>
  );
}

export default About;
