import React from 'react';
import { useState } from 'react';

const Erecepta = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container py-5">
            {/* Nagłówek */}
            <h2 className="text-center mb-4" style={{ color: '#0b3d91' }}>
                Zamów e-receptę online — szybko, bezpiecznie, bez wychodzenia z domu
            </h2>

            <p className="lead text-center mb-5">
                Wystarczy kilka minut, aby kontynuować swoje leczenie. Nasz zespół lekarzy przeanalizuje Twoje zgłoszenie i wystawi e-receptę — kod otrzymasz SMS-em.
            </p>

            {/* Sekcja informacyjna */}
            <div className="row text-center mb-5">
                <div className="col-md-3">
                    <span role="img" aria-label="pill">💊</span>
                    <h5 className="mt-2">Kontynuacja leczenia</h5>
                    <p className="small text-muted">Dla pacjentów posiadających wcześniejszą diagnozę.</p>
                </div>
                <div className="col-md-3">
                    <span role="img" aria-label="clock">⏱</span>
                    <h5 className="mt-2">Szybki proces</h5>
                    <p className="small text-muted">Wypełnij formularz w kilka minut.</p>
                </div>
                <div className="col-md-3">
                    <span role="img" aria-label="lock">🔒</span>
                    <h5 className="mt-2">Bezpieczeństwo</h5>
                    <p className="small text-muted">Chronimy Twoje dane zgodnie z RODO.</p>
                </div>
                <div className="col-md-3">
                    <span role="img" aria-label="sms">📱</span>
                    <h5 className="mt-2">Kod SMS-em</h5>
                    <p className="small text-muted">Otrzymasz kod e-recepty bezpośrednio na telefon.</p>
                </div>
            </div>

            {/* Formularz */}
            {!submitted ? (
                <form className="mb-5" onSubmit={handleSubmit}>
                    <h4 className="mb-4">Formularz zamówienia</h4>
                    <div className="mb-3">
                        <label className="form-label">Imię i nazwisko</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PESEL</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Adres email</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telefon</label>
                        <input type="tel" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nazwa leku i dawkowanie</label>
                        <textarea className="form-control" rows="3" required></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="zgoda" required />
                        <label className="form-check-label" htmlFor="zgoda">
                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji zamówienia.
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Zamów e-receptę</button>
                </form>
            ) : (
                <div className="alert alert-success">
                    Dziękujemy! Formularz został przesłany. Skontaktujemy się z Tobą w ciągu 24h.
                </div>
            )}

            {/* Cennik + CTA */}
            <div className="text-center">
                <h5 className="mb-2">Koszt usługi: <strong>69,99 zł</strong></h5>
                <p className="small text-muted">Płatność zostanie dokonana po pozytywnej weryfikacji formularza.</p>
            </div>
        </div>
    );
};

export default Erecepta;