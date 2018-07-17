import React from 'react';

// relative path to ./public
// package.json -> "storybook": "start-storybook -s ./public -p 6006",
export const AltitudeCSS = getStory => {
    return (
        <div>
            <link type="text/css" rel="stylesheet" href={process.env.REACT_APP_BOOTSTRAP_CSS} />
            <link type="text/css" rel="stylesheet" href={process.env.REACT_APP_ALTITUDE_CSS} />
            {getStory()}
        </div>
    );
};