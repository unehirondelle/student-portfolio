import React from 'react';
import SocialPanel from "../components/SocialPanel/index.js";
import Facebook from "../images/Facebook.png";
import GitHub from "../images/GitHub.png";
import Instagram from "../images/Instagram.png";
import LinkedIn from "../images/LinkedIn.png"

// create state
const SocialPanels = () => {
  const socialPanels = [
    {
      name: "GitHub",
      src: GitHub,
      website: "https://github.com/jordanwhunter"
    },
    {
      name: "LinkedIn",
      src: LinkedIn,
      website: "https://www.linkedin.com/in/jordanhunterr/"
    },
    {
      name: "Facebook",
      src: Facebook,
      website: "https://www.facebook.com/jordanwhunterr"
    },
    {
      name: "Instagram",
      src: Instagram,
      website: "https://www.instagram.com/jordanwhunter/"
    },
  ]

  return (
    <main className="container" id="main">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1><center>Socials</center></h1>
          </div>
        </div>
        <div className="row">
          <center>
            <SocialPanel
              name={socialPanels[0].name}
              src={socialPanels[0].src}
              website={socialPanels[0].website}
            />
            <SocialPanel
              name={socialPanels[1].name}
              src={socialPanels[1].src}
              website={socialPanels[1].website}
            />
          </center>
        </div>
        <div className="row">
          <center>
            <SocialPanel
              name={socialPanels[2].name}
              src={socialPanels[2].src}
              website={socialPanels[2].website}
            />
            <SocialPanel
              name={socialPanels[3].name}
              src={socialPanels[3].src}
              website={socialPanels[3].website}
            />
          </center>
        </div>
      </div>
    </main>
  )
}

export default SocialPanels