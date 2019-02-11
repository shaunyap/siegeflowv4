import React from 'react';

import "../styles/global.scss"

export default props => {
    return (
        <div>
            <head>
                <title>Siegeflow</title>
            </head>
            <body>
                  {props.children}
                  <footer className="text-center">Copyright siegeflow 2019. Terms and Conditions | Privacy Policy</footer>
            </body>
        </div>
    )
}
