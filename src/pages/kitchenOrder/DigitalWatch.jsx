import React, { useState, useEffect } from 'react';

const DigitalWatch = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    return (
        <div className="digital-watch">
           <h5 style={{textAlign:"center" , marginTop:"12PX"}}> {formattedTime} </h5>
        </div>
    );
};

export default DigitalWatch;