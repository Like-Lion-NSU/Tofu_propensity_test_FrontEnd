import {React} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resultpages from './pages/Resultpages';
import Alltypespages from './pages/Alltypespages';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Resultpages/>} />
                <Route path='/alltypes' element={<Alltypespages/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;