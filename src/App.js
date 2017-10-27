import React from 'react';
import { render } from 'react-dom';
import PaperSheet from './Paper';

function App() {
    return (
        <div class="main">
            <PaperSheet />

        </div>
    );
}

render(<App />, document.querySelector('#root'));

export default App;
