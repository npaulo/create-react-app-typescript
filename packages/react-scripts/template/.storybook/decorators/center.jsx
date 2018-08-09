import React from 'react';

export const CenterDecorator = getStory => {
    return (
        <div style={{padding: '40px'}}>
            {getStory()}
        </div>
    );
};