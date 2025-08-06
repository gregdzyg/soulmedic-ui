import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container">
            <div className="row py-4 border-top">
                <div className="col-md-4 mb-3">
                    <h5>Kontakt</h5>
                    <p className="mb-1">tel. +48 123 456 789</p>
                    <p className="mb-1">kontakt@soulmedic.pl</p>
                </div>

                <div className="col-md-4 mb-3">
                    <h5>Adres</h5>
                    <p className="mb-1">ul. Zdrowia 1</p>
                    <p className="mb-1">00-123 Warszawa</p>
                </div>

                <div className="col-md-4 mb-3">
                    <h5>Linki</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/oferta" className="text-decoration-none">Oferta</Link></li>
                        <li><Link to="/kontakt" className="text-decoration-none">Kontakt</Link></li>
                        <li><Link to="/logowanie" className="text-decoration-none">Zaloguj się</Link></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-muted small py-3 border-top">
                © 2025 SOULMEDIC – Wszelkie prawa zastrzeżone
            </div>
        </div>
    );
};

export default Footer;