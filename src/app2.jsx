import React, { useState } from 'react';
import "./FitnessPage.css";

const FitnessPage = () => {
    const [showContact, setShowContact] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [expandedCards, setExpandedCards] = useState({});

    const toggleContent = (index) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="fitness-page">
            <ul className="nav">
                <li><a className="active" href="/">Home</a></li>
                <li><a href="https://www.sciencedaily.com/news/health_medicine/fitness/">News</a></li>
                <li><button onClick={() => setShowContact(!showContact)}>Contact</button></li>
                <li><button onClick={() => setShowAbout(!showAbout)}>About</button></li>
            </ul>

            {showContact && (
                <div className="info-box">
                    <p><b>Customer Support:</b> <a href="mailto:support@getfitapp.com">support@getfitapp.com</a></p>
                    <p><b>Phone:</b> <a href="tel:+18041234567">+1-804-123-4567</a></p>
                    <p><b>Address:</b> 123 Get Fit Fitness St, Richmond City, Virginia State</p>
                </div>
            )}

            {showAbout && (
                <div className="info-box">
                    <h2>About Us</h2>
                    <p>At Get Fit, we believe that fitness is for everyone...</p>
                </div>
            )}

            <h1>Welcome to Get Fit Journey</h1>
            <h2>Start Your Journey</h2>

            <div className="card-container">
                {workoutPlans.map((plan, index) => (
                    <div className="card" key={index}>
                        <img src={plan.image} alt="workout" />
                        <div className="card-body">
                            <button onClick={() => toggleContent(index)}>{plan.title}</button>
                            {expandedCards[index] && (
                                <div className="hidden-content">
                                    {plan.exercises.map((exercise, i) => <p key={i}>{exercise}</p>)}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                <p>&copy; 2025 Get Fit. All rights reserved.</p>
            </footer>
        </div>
    );
};

const workoutPlans = [
    {
        title: "Day 1: Upper Body Strength",
        image: "workout1.png",
        exercises: ["Push-ups: 3 sets of 12 reps", "Pull-ups: 3 sets of 8 reps"]
    },
    {
        title: "Day 2: Lower Body Strength",
        image: "workout2.png",
        exercises: ["Squats: 3 sets of 12 reps", "Lunges: 3 sets of 10 reps per leg"]
    },
    // Add more workout plans as needed
];

export default FitnessPage;
