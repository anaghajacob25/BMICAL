import React, { useState } from 'react';
import './BMICalculator.css';

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = () => {
        const heightMeters = height / 100; 
        const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2); 
        setBMI(bmiValue); 

        if (bmiValue < 18.5) {
            setStatus('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            setStatus('Normal weight');
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            setStatus('Overweight');
        } else {
            setStatus('Obesity');
        }
    };

    return (
        <div className="container">
            <h2 className="heading">BMI Calculator</h2>
            <div className="input-group">
                <label className="label">Weight (kg):</label>
                <input
                    type="number"
                    className="input"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label className="label">Height (cm):</label>
                <input
                    type="number"
                    className="input"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button className="btn" onClick={calculateBMI}>Calculate BMI</button>

            {bmi && (
                <div className="result">
                    <h3 className="result-heading">Your BMI: {bmi}</h3>
                    <p className="result-status">Status: {status}</p>
                    <p className="result-categories">
                        BMI Categories:
                        <ul className="category-list">
                            <li>Underweight: less than 18.5</li>
                            <li>Normal weight: 18.5–24.9</li>
                            <li>Overweight: 25–29.9</li>
                            <li>Obesity: 30 or more</li>
                        </ul>
                    </p>
                </div>
            )}
        </div>
    );
}

export default BMICalculator;
