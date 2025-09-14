import React from "react";

export default function Map() {
    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.234567890123!2d174.79699242988755!3d-36.82952792637945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ5JzQ2LjMiUyAxNzTCsDQ3JzQ5LjIiRQ!5e0!3m2!1sen!2snz!4v1234567890123!5m2!1sen!2snz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zithai Location - Devonport, Auckland"
            />
        </div>
    );
}