import React from 'react';
import ProfilePhoto from "../images/ProfilePhoto.jpg"
import "../App.css";

const Index = () => {
  return (
    <div className="container">
      <div 
        className="jumbotron text-center" 
        // style="margin-bottom: 0"
      >
        <h1 className="text-center text-uppercase">Jordan Hunter</h1>
        <p className="text-center font-italic">A quick look at my life</p>
      </div>

      <div 
        className="container" 
        // style="margin-top: 30px"
      >
        <div className="row">
          <div className="col-sm-4">
            <img
              className="center-block"
              src={ProfilePhoto}
              width="200"
              height="200"
              alt="Jordan sitting on a chair."
            />
            <h3 className="text-center">Addt'l Contacts</h3>
            <hr/>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="mailto:jordanwhunter@users.noreply.github.com"
                >Email</a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="sms:+15555555555&body=Hey what's up?"
                >Text</a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1TfMUxF7icG0-2VQ0IzEc1X7bx2smMLI_/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >Resume</a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.discord.com"
                  target="_blank"
                  rel="noreferrer"
                >Discord</a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.mirc.com"
                  target="_blank"
                  rel="noreferrer"
                >IRC</a>
              </li>
            </ul>

            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2 className="text-center">About Me</h2>
            <p>
              My name is Jordan Hunter. I reside in New York, NY. I graduated from
              the University of South Florida in 2016 with a degree in Health
              Sciences. I have lived professionally as a musician for the last 4
              years but, as everyone else in the industry (as well as many others
              outside of it), I have been stuck at home due to Covid-19
              restrictions. I enjoy running, playing guitar, being on computers,
              drinking coffee, traveling, and food. I aspire to grow within
              technology/computer sciences, and am excited to venture further into
              this course. Feel free to reach out to me with any questions or
              comments.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index