import React from 'react';
import { useState } from 'react';
import mapa from '../assets/mapa.png'; 

const Kontakt = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Wiadomość została wysłana!');
        // W realnej aplikacji: wysyłka do backendu przez API
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4" style={{ color: '#0b3d91' }}>Skontaktuj się z nami</h2>

            {/* Informacje kontaktowe */}
            <div className="row mb-5">
                <div className="col-md-6">
                    <p>Możesz się z nami skontaktować telefonicznie, mailowo lub za pomocą formularza.</p>
                    <ul className="list-unstyled">
                        <li><strong>Telefon:</strong> +48 123 456 789</li>
                        <li><strong>Email:</strong> kontakt@soulmedic.pl</li>
                        <li><strong>Adres:</strong> ul. Zdrowia 1, 00-123 Warszawa</li>
                    </ul>
                </div>

                {/* Obrazek z mapą */}
                <div className="col-md-6 text-center">
                    <img
                        src={mapa}
                        alt="Mapa lokalizacji"
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Formularz kontaktowy */}
            <h4 className="mb-3">Napisz do nas</h4>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Imię i nazwisko"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Adres e-mail"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-12">
                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Wiadomość"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary px-4">
                        Wyślij wiadomość
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Kontakt;