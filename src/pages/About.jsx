import React from 'react';
import { Link } from 'react-router-dom';
import banner_oNas from '../assets/banner_oNas.png';

const About = () => {
    return (
        <div className="container py-5">
            {/* Nagłówek */}
            <h2 className="text-center mb-4" style={{ color: '#0b3d91' }}>
                O nas
            </h2>

            {/* Wprowadzenie */}
            <p className="lead text-center mb-5">
                W SOULMEDIC wierzymy, że dostęp do zdrowia psychicznego powinien być szybki, bezpieczny i komfortowy.
                Nasz zespół pomaga pacjentom z całej Polski odzyskać równowagę emocjonalną — bez wychodzenia z domu.
            </p>

            {/* Banner / Obraz */}
            <div className="text-center mb-5">
                <img
                    src={banner_oNas}
                    alt="Zespół medyczny"
                    className="img-fluid rounded shadow-sm"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
            </div>

            {/* Misja i wartości */}
            <h3 className="text-center mb-4">Nasze wartości</h3>
            <div className="row text-center mb-5">
                <div className="col-md-3">
                    <h5>Empatia</h5>
                    <p className="small text-muted">Każdego pacjenta traktujemy indywidualnie i z szacunkiem.</p>
                </div>
                <div className="col-md-3">
                    <h5>Profesjonalizm</h5>
                    <p className="small text-muted">Nasz zespół tworzą doświadczeni lekarze i terapeuci.</p>
                </div>
                <div className="col-md-3">
                    <h5>Dostępność</h5>
                    <p className="small text-muted">Konsultacje możliwe są już tego samego dnia — bez kolejek.</p>
                </div>
                <div className="col-md-3">
                    <h5>Bezpieczeństwo</h5>
                    <p className="small text-muted">Twoje dane są chronione zgodnie z najwyższymi standardami.</p>
                </div>
            </div>

            {/* Zespół */}
            <div className="mb-5">
                <h3 className="text-center mb-4">Nasz zespół</h3>
                <p className="text-center">
                    Tworzymy grupę specjalistów z zakresu psychiatrii, psychologii, psychoterapii i seksuologii.
                    Nasi eksperci łączą wiedzę medyczną z nowoczesnymi narzędziami e-medycyny, aby zapewnić Ci
                    skuteczną i wygodną pomoc online.
                </p>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h4 className="mb-3">Masz pytania?</h4>
                <p className="mb-4">Skontaktuj się z nami — chętnie pomożemy i odpowiemy na wszystkie Twoje pytania.</p>
                <Link to="/kontakt" className="btn btn-primary px-4 py-2">
                    Przejdź do kontaktu
                </Link>
            </div>
        </div>
    );
};

export default About;