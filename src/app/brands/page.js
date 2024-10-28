'use client'

import React, { useEffect } from 'react';
import styles from './style.module.css'
const page = () => {

    // useEffect(() => {
    //     // Dynamically import Bootstrap JS for client-side
    //     typeof document !== 'undefined'
    //       ? import('bootstrap/dist/js/bootstrap.bundle.min.js')
    //       : null;
    //   }, []);

    return (
        <div>
           
            <p className={styles.moduleCss}> hello </p>
            {/* <button onClick={alert('ok')} className="btn btn-primary">
                    Click Me gg
            </button>  */}

            <div className="container">
            <h1 className="text-center">Welcome to Next.js with Bootstrap</h1>
            <button className="btn btn-primary">Hello</button>
            
            {/* 27-10-2024 */}

            <ul>
                <li>Symphony</li>
                <li>Motorola</li>
                <li>Nokia</li>
            </ul> 

            

    </div>
        </div>
    );
};

export default page;