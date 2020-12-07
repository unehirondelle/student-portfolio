import React from 'react';
import Project from "../components/Project/index.js";
import Burger from "../images/Burger.png";
import GetMeOutOfHere from "../images/GetMeOutOfHere.png";
import JavaScriptQuiz from "../images/JavaScriptQuiz.png";
import Quizzinc from "../images/Quizzinc.png";
import WeatherDashboard from "../images/WeatherDashboard.png";
import WorkdayScheduler from "../images/WorkdayScheduler.png";

// Create state
const Projects = () => {
  const projects = [
    {
      name: "Get Me Out of Here",
      src: GetMeOutOfHere,
      description: "Position locator that utilizes three server side APIs to cross-reference live Covid-19 data in your area with Google Map routes to airports. Also references flight tracker data for once you arrive at the airport. Languages: JavaScript, HTML, Bulma CSS",
      repo: "https://github.com/kylegold/get-me-out-of-here",
      website: "https://kylegold.github.io/get-me-out-of-here/"
    },
    {
      name: "QuizzInc",
      src: Quizzinc,
      description: "Quiz building application that logs user questions and stores them in a database. Application allows you to search quizzes based on generated quiz IDs, categories, and creators. Results are displayed at the end. Languages: JavaScript, Handlebars, Materialize CSS, MySQL",
      repo: "https://github.com/kylegold/Project-Two",
      website: "https://stormy-shelf-50629.herokuapp.com/"
    },
    {
      name: "Eat-Da-Burger!",
      src: Burger,
      description: "A restaurant app that lets users input the names of burgers they'd like to eat. User submits a burger's name, app displays and stores selection. User can choose to call on a burger order again or delete entirely. Languages: JavaScript, Handlebars, Bootstrap CSS, MySQL",
      repo: "https://github.com/jordanwhunter/eat-da-burger",
      website: "https://jordan-eats-da-burgers.herokuapp.com/"
    },
    {
      name: "5 Day Weather Dashboard",
      src: WeatherDashboard,
      description: "Weather forecaster that utilizes Open Weather API to accept user's city and return temparture, humidity, wind speed, UV index, as well as for five more days. Uses local storage to keep track of cities entered. Languages: JavaScript, HTML, Bootstrap CSS",
      repo: "https://github.com/jordanwhunter/5-day-weather-dashboard",
      website: "https://jordanwhunter.github.io/5-day-weather-dashboard/"
    },
    {
      name: "JavaScript Quiz Game",
      src: JavaScriptQuiz,
      description: "Timed quiz game of basic JavaScript questions. User starts with 100 seconds. Outputted score relates to how much time is left on timer once all questions are answered. High scores are logged (can be cleared). Languages: JavaScript, HTML, Bootstrap CSS",
      repo: "https://github.com/jordanwhunter/javascript-quiz-game-v2",
      website: "https://jordanwhunter.github.io/javascript-quiz-game-v2/"
    },
    {
      name: "Workday Scheduler",
      src: WorkdayScheduler,
      description: "Interactive day scheduler with color coded slots ranged between 9 AM and 5 PM. Entries stored until user chooses to clear them. Green slots are available time, red slots are current/unavailable, gray is passed. Languages: JavaScript, HTML, Bootstrap CSS",
      repo: "https://github.com/jordanwhunter/interactive-day-scheduler",
      website: "https://jordanwhunter.github.io/interactive-day-scheduler/"
    },
  ]

  return (
    <main className="container" id="main">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1><center>Portfolio</center></h1>
          </div>
        </div>
        <div className="row">
          <center>
            <Project
              name={projects[0].name}
              src={projects[0].src}
              description={projects[0].description}
              repo={projects[0].repo}
              website={projects[0].website} 
            />
            <Project
              name={projects[1].name}
              src={projects[1].src}
              description={projects[1].description}
              repo={projects[1].repo}
              website={projects[1].website} 
            />
          </center>
        </div>
        <div className="row">
          <center>
            <Project
              name={projects[2].name}
              src={projects[2].src}
              description={projects[2].description}
              repo={projects[2].repo}
              website={projects[2].website} 
            />
            <Project
              name={projects[3].name}
              src={projects[3].src}
              description={projects[3].description}
              repo={projects[3].repo}
              website={projects[3].website} 
            />
          </center>
        </div>
        <div className="row">
          <center>
            <Project
              name={projects[4].name}
              src={projects[4].src}
              description={projects[4].description}
              repo={projects[4].repo}
              website={projects[4].website} 
            />
            <Project
              name={projects[5].name}
              src={projects[5].src}
              description={projects[5].description}
              repo={projects[5].repo}
              website={projects[5].website} 
            />
          </center>
        </div>
      </div>
    </main>
  )
}

export default Projects