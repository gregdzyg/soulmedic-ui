import { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Homepage_tlo from '../assets/Homepage_tlo.png';
import icon_clock from '../assets/icon_clock.png';
import icon_rec from '../assets/icon_rec.png';
import icon_step1 from '../assets/icon_step1.png';
import icon_step2 from '../assets/icon_step2.png';
import icon_step3 from '../assets/icon_step3.png';
import icon_step4 from '../assets/icon_step4.png';
import { psycholodzy, psychiatrzy, psychoterapeuci, seksuolodzy } from '../data/specjalisci';


const generateId = (name) =>
    name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
// 🔧 Funkcja pomocnicza do generowania godzin
const generateTimes = () => {
    const baseHours = [8, 9, 10, 11, 12, 14, 15, 16];
    const result = [];
    for (let i = 0; i < 3; i++) {
        const hour = baseHours[Math.floor(Math.random() * baseHours.length)];
        result.push(`${String(hour).padStart(2, '0')}:00`);
    }
    return result.sort();
};

// 🔧 Połączone dane specjalistów z automatycznymi godzinami
const allSpecialists = [
    ...psycholodzy.map(s => ({
        ...s,
        specialty: 'psycholog',
        id: s.name.toLowerCase().replace(/\s+/g, '-'),
        availableTimes: generateTimes()
    })),
    ...psychiatrzy.map(s => ({
        ...s,
        specialty: 'psychiatra',
        id: s.name.toLowerCase().replace(/\s+/g, '-'),
        availableTimes: generateTimes()
    })),
    ...psychoterapeuci.map(s => ({
        ...s,
        specialty: 'psychoterapeuta',
        id: s.name.toLowerCase().replace(/\s+/g, '-'),
        availableTimes: generateTimes()
    })),
    ...seksuolodzy.map(s => ({
        ...s,
        specialty: 'seksuolog',
        id: s.name.toLowerCase().replace(/\s+/g, '-'),
        availableTimes: generateTimes()
    }))
];

const Home = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');

    return (
        <div className="container py-5">
            {/* HERO SECTION */}
            <div className="hero-section d-flex align-items-center justify-content-center">
                <h1 className="display-4 fw-bold">Lekarz online: umów konsultację</h1>
            </div>

            {/* FORMULARZ KONSULTACJI */}
            <div className="d-flex justify-content-center mt-4">
                <div
                    className="bg-light p-4 rounded shadow"
                    style={{
                        maxWidth: '600px',
                        width: '100%',
                        ...(selectedSpecialty ? {} : { minHeight: '0px' }),
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    <h2 className="mb-4 text-center">E-konsultacja</h2>

                    {/* Wybór formy konsultacji */}
                    <div className="d-flex justify-content-center mb-3 gap-3">
                        <button
                            type="button"
                            className={`btn w-100 ${selectedMethod === 'telefon' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setSelectedMethod('telefon')}
                        >
                            Telefon
                        </button>
                        <button
                            type="button"
                            className={`btn w-100 ${selectedMethod === 'wideo' ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setSelectedMethod('wideo')}
                        >
                            Wideo
                        </button>
                    </div>

                    {/* Dropdown specjalizacji */}
                    <div className="mb-4">
                        <select
                            className="form-select"
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                        >
                            <option value="">Wybierz specjalistę</option>
                            <option value="psycholog">Psycholog</option>
                            <option value="psychiatra">Psychiatra</option>
                            <option value="psychoterapeuta">Psychoterapeuta</option>
                            <option value="seksuolog">Seksuolog</option>
                        </select>
                    </div>

                    {/* Sekcja z listą lekarzy */}
                    {selectedSpecialty && (
                        <div className="bg-white p-3 rounded border">
                            <h5 className="mb-3">Dostępni specjaliści</h5>
                            {allSpecialists
                                .filter(spec => spec.specialty === selectedSpecialty)
                                .sort((a, b) => a.availableTimes[0].localeCompare(b.availableTimes[0]))
                                .slice(0, 4)
                                .map((spec, i) => (
                                    <div key={i} className="mb-4">
                                        <strong>{spec.name} – {spec.title}</strong>
                                        <div className="d-flex gap-2 mt-1 flex-wrap">
                                            {spec.availableTimes.map((time, idx) => (
                                                <button key={idx} className="btn btn-sm btn-outline-secondary">{time}</button>
                                            ))}
                                            <Link
                                                to={`/specjalisci#${generateId(spec.name)}`}
                                                className="btn btn-sm btn-link text-decoration-underline"
                                            >
                                                Zobacz więcej
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* DWA BANERY */}
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="p-4 rounded text-center h-100 d-flex flex-column align-items-center justify-content-between"
                            style={{ backgroundColor: '#d9dcdf', minHeight: '200px', color: '#212529' }}>
                            <div className="mb-3">
                                <img src={icon_clock} alt="Zegar" style={{ width: '60px', background: '#fff', padding: '8px', borderRadius: '50%' }} />
                            </div>
                            <h3 className="mb-4">Lekarz jeszcze dziś</h3>
                            <Link to="/specjalisci" className="btn btn-light text-dark mt-auto"
                                style={{ borderRadius: '2rem', padding: '12px 24px', fontWeight: 'bold', border: 'none' }}>
                                Lekarz online już od 119.99
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 rounded text-center h-100 d-flex flex-column align-items-center justify-content-between text-white"
                            style={{ backgroundColor: '#0b3d91', minHeight: '200px' }}>
                            <div className="mb-3">
                                <img src={icon_rec} alt="Zegar" style={{ width: '60px', background: '#fff', padding: '8px', borderRadius: '50%' }} />
                            </div>
                            <h3 className="mb-4">Recepta online</h3>
                            <Link to="/e-recepta" className="btn btn-light text-dark mt-auto"
                                style={{ borderRadius: '2rem', padding: '12px 24px', fontWeight: 'bold', border: 'none' }}>
                                Recepta online już za 69.99
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* JAK TO DZIAŁA */}
            <div className="container py-5">
                <h2 className="text-center mb-5" style={{ color: '#0b3d91' }}>Jak to działa?</h2>
                <div className="row text-center g-4">
                    <div className="col-md-3"><img src={icon_step1} alt="Krok 1" style={{ width: '60px', marginBottom: '1rem' }} />
                        <h5>Wybierz konsultację</h5>
                        <p className="text-muted small">Zacznij od wyboru lekarza lub recepty.</p></div>
                    <div className="col-md-3"><img src={icon_step2} alt="Krok 2" style={{ width: '60px', marginBottom: '1rem' }} />
                        <h5>Wypełnij formularz</h5>
                        <p className="text-muted small">Podaj dane zdrowotne i informacje niezbędne do diagnozy.</p></div>
                    <div className="col-md-3"><img src={icon_step3} alt="Krok 3" style={{ width: '60px', marginBottom: '1rem' }} />
                        <h5>Poczekaj na kontakt</h5>
                        <p className="text-muted small">Lekarz może się z Tobą skontaktować telefonicznie.</p></div>
                    <div className="col-md-3"><img src={icon_step4} alt="Krok 4" style={{ width: '60px', marginBottom: '1rem' }} />
                        <h5>Odbierz dokumentację</h5>
                        <p className="text-muted small">Recepta lub wynik trafi do Ciebie SMS-em lub mailem.</p></div>
                </div>
            </div>

            {/* OPINIE */}
            <div className="py-5" style={{ backgroundColor: '#f4f6f9' }}>
                <h3 className="text-center mb-5" style={{ color: '#0b3d91' }}>Opinie naszych pacjentów</h3>
                <div className="container">
                    <div className="row text-center g-4">
                        {[
                            { text: 'Szybko, sprawnie i bez wychodzenia z domu. Polecam!', author: 'Anna K., Warszawa' },
                            { text: 'Dostałam receptę w 15 minut. Super kontakt z lekarzem.', author: 'Piotr N., Kraków' },
                            { text: 'Profesjonalnie i wygodnie. Na pewno wrócę!', author: 'Ewa L., Gdańsk' },
                            { text: 'Świetna opcja w nagłych przypadkach. Wszystko online.', author: 'Tomasz R., Poznań' },
                            { text: 'Bez kolejek, bez stresu. Tylko kilka kliknięć.', author: 'Magda B., Wrocław' },
                            { text: 'Lekarz zadzwonił, porozmawialiśmy i dostałem receptę. Rewelacja!', author: 'Bartek D., Lublin' }
                        ].map((op, i) => (
                            <div className="col-md-4" key={i}>
                                <blockquote className="blockquote mb-0">
                                    <p className="small fst-italic">"{op.text}"</p>
                                    <footer className="blockquote-footer mt-2">{op.author}</footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center py-5">
                <h2 className="mb-4" style={{ color: '#0b3d91' }}>Gotowy, by rozpocząć?</h2>
                <p className="mb-4">Umów się na konsultację z lekarzem online już teraz.</p>
                <Link to="/specjalisci" className="btn btn-outline-primary btn-lg px-5 py-2">Umów wizytę</Link>
            </div>
        </div>
    );
};

export default Home;
