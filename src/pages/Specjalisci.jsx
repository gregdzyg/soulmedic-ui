import React, { useEffect, useState } from 'react';
import { psycholodzy, psychiatrzy, psychoterapeuci, seksuolodzy } from '../data/specjalisci.jsx';
import AppointmentModal from '../components/AppointmentModal.jsx';


const generateId = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');

const Specjalisci = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedSpecialist, setSelectedSpecialist] = useState(null);

    const handleBook = (spec) => {
        setSelectedSpecialist(spec);
        setShowModal(true);
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500);
        }
    }, []);

    const SpecialistCard = ({ name, title, description, image }) => (
        <div className="col-md-3 mb-4" id={generateId(name)}>
            <div className="card h-100 text-center border-0 shadow-sm p-3 d-flex flex-column align-items-center">
                <div
                    style={{
                        width: '120px',
                        height: '120px',
                        overflow: 'hidden',
                        borderRadius: '50%',
                        marginBottom: '1rem',
                        border: '4px solid #e0e0e0',
                    }}
                >
                    <img
                        src={image}
                        alt={name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="card-body p-0">
                    <h5 className="card-title mb-1">{name}</h5>
                    <p className="text-muted small mb-2">{title}</p>
                    <p className="card-text small mb-3">{description}</p>
                </div>
                <button className="btn btn-outline-primary mt-auto" onClick={() => handleBook({ name, title })}>
                    Umów wizytę
                </button>
            </div>
        </div>
    );

    return (
        <div className="container-fluid px-4 py-5">
            <h2 className="text-center mb-5" style={{ color: '#0b3d91' }}>
                Nasi lekarze i specjaliści
            </h2>

            <section id="psycholog" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <h3 className="text-center mb-4">Psychologowie</h3>
                <div className="row">
                    {psycholodzy.map((s, i) => (
                        <SpecialistCard key={`psycholog-${i}`} {...s} />
                    ))}
                </div>
            </section>

            <section id="psychiatra" className="py-5 bg-white">
                <h3 className="text-center mb-4">Psychiatrzy</h3>
                <div className="row">
                    {psychiatrzy.map((s, i) => (
                        <SpecialistCard key={`psychiatra-${i}`} {...s} />
                    ))}
                </div>
            </section>

            <section id="psychoterapeuta" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <h3 className="text-center mb-4">Psychoterapeuci</h3>
                <div className="row">
                    {psychoterapeuci.map((s, i) => (
                        <SpecialistCard key={`psychoterapeuta-${i}`} {...s} />
                    ))}
                </div>
            </section>

            <section id="seksuolog" className="py-5 bg-white">
                <h3 className="text-center mb-4">Seksuolodzy</h3>
                <div className="row">
                    {seksuolodzy.map((s, i) => (
                        <SpecialistCard key={`seksuolog-${i}`} {...s} />
                    ))}
                </div>
            </section>

            {/* Modal rezerwacji */}
            <AppointmentModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                specialist={selectedSpecialist}

            />
        </div>
    );
};

export default Specjalisci;