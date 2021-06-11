import React from 'react';
import Heading from './Heading';
import WrappedCommentscount from './Commentscount';
import EnhancedLikescount from './Likescount';
function App() {
    return (
        <div>
            <Heading />
            <EnhancedLikescount />
            <WrappedCommentscount/>
        </div>
    );
}

export default App;