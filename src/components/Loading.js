import React from 'react';
import { Loader } from 'semantic-ui-react';

export default function Loading() {
    return (
        <div className="loading">
            <p>Loading data...</p>
            <Loader active inline='centered' size="massive" color="#F4511E" />
        </div>
    );
}
