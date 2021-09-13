import React from 'react';

const App = () => {

    return (<div className="container">
        <div className="valid-keys">
            <span className="matched">gabr</span>
            <span className="remainder">iel</span>
        </div>

        <div className="typed-keys">asdsdsgabrafs</div>
        
        <div className="completed-words">
            <ol>
                <li>Gabriel</li>
                <li>Pedro</li>
            </ol>
        </div>
    </div>)

};

export default App;