import React from 'react';
import "./Error.css" // Make sure to create this CSS file
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (

        <>
        <Header />
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Page Not Found</p>
        </div>
        <Footer />

        </>
    );
};

export default ErrorPage;
