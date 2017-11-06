import React from 'react';
import { render } from 'react-dom';
import PersistentDrawer from './de/ergovia/components/schublade/schubladeAppBalken';


function App() {
    return (
        <div>
            <PersistentDrawer />
        </div>
    );
}

render(<App />, document.querySelector('#root'));

export default App;
