// ContactPage.js
import React, { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to send the data to a server or display it
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        setSubmitted(true);
    };

    return (
        <div className="container flex flex-col items-center justify-center p-6 bg-purple-600">
            <h1 className="text-3xl font-bold mb-6 text-white underline font-mono">Contact Me</h1>
            <form onSubmit={handleSubmit} className="flex flex-col bg-purple-300 p-6 rounded-lg shadow-md w-full max-w-md">
                <label className="mb-4">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="block w-full mt-1 p-2 border border-gray-400 rounded-md"
                    />
                </label>

                <label className="mb-4">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full mt-1 p-2 border border-gray-400 rounded-md"
                    />
                </label>

                <label className="mb-4">
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="block w-full mt-1 p-2 border border-gray-400 rounded-md"
                        rows="4"
                    />
                </label>

                {/* Centered and shortened button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
                    >
                        Send Message
                    </button>
                </div>

                {submitted && (
                    <p className="mt-4 text-center text-white">Thank you for submitting your message!</p>
                )}
            </form>
        </div>
    );
}

export default ContactPage;
