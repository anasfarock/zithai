import React from 'react';

const CafeMap = () => {
    return (
        <div className="w-full h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.234567890123!2d174.7968966653524!3d-36.83012436574056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ5JzQ4LjQiUyAxNzTCsDQ3JzQ4LjgiRQ!5e0!3m2!1sen!2snz!4v1234567890123!5m2!1sen!2snz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Go Goa Eatery Location - Devonport, Auckland"
            />
        </div>
    );
};

export default CafeMap;