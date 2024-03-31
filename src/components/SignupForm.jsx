import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        enteredAmount: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.enteredAmount || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            // Send signup request to backend
            await axios.post('http://localhost:8080/api/users/signup', formData);
            alert('Signup successful!');
            // Clear form data after successful signup
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                enteredAmount: '',
                password: ''
            });
            setError('');
        } catch (error) {
            // Display error message if signup fails
            setError('Signup failed. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="number" name="enteredAmount" placeholder="Entered Amount" value={formData.enteredAmount} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
