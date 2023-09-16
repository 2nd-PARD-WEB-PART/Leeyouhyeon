import React from "react";
import "./Form.css";

function App() {
    return (
        <form className="form-container">
            <label className="form-label">Name:</label>
            <input className="form-input" type="type" name="name"/>

            <label className="form-label">Email:</label>
            <input className="form-input" type="email" name="eamil"/>

            <label className="form-label">Message:</label>
            <textarea className="form-textarea" name="message"></textarea>

            <button className="form-submit-button" type="submit">Submit</button>
        </form>
    );
}

export default App;