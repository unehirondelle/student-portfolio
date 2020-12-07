import React from 'react';
import "../App.css"

const Contact = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="below">
        <form>
          <div className="form-group">
            <label for="usr">Name:</label>
            <input type="text" className="form-control" id="usr"/>
          </div>
          <br/>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <br/>
          <div className="form-group">
            <label for="comment">Message:</label>
            <textarea className="form-control" rows="5" id="comment"/>
          </div>
          <br/>
          <br/>
          <button id="submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact