import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Erecepta from './pages/Erecepta';
import Cennik from './pages/Cennik';
import Kontakt from './pages/Kontakt';
import Login from './pages/Login';
import Specjalisci from './pages/Specjalisci';
import Oferta from './pages/Oferta';


function App() {
    return (
       
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/o-nas" element={<About />} />
                <Route path="/specjalisci" element={<Specjalisci />} />
                <Route path="/oferta" element={<Oferta />} />
                <Route path="/e-recepta" element={<Erecepta />} />
                <Route path="/cennik" element={<Cennik />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/logowanie" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default App;

