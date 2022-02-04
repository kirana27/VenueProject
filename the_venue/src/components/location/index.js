import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.694003685738!2d116.39432251538311!3d39.99294307941665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f054c407008c87%3A0xee35c9d7f5e387b6!2sNational%20Stadium!5e0!3m2!1sen!2sus!4v1642572326399!5m2!1sen!2sus"
                width="100%" height="500px" frameBorder="0"
                allowFullScreen title="B R U H">

            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
