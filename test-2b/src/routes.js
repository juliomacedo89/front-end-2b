import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuMobile from './pages/MenuMobile'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mobile" element={<MenuMobile />} /> 
            </Routes> 
    </BrowserRouter>
    )
}

export default RoutesApp