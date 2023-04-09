import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const baseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default baseRouter