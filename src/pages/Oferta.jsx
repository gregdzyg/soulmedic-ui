import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaPrescriptionBottleAlt, FaUsers, FaComments } from 'react-icons/fa';

const services = [
    {
        icon: <FaStethoscope size={40} className="mb-3 text-primary" />,
        title: 'E-konsultacje',
        description: 'Szybkie konsultacje z lekarzem psychiatrii, psychologiem lub terapeutą bez wychodzenia z domu.'
    },
    {
        icon: <FaPrescriptionBottleAlt size={40} className="mb-3 text-success" />,
        title: 'E-recepty',
        description: 'Wystawiamy recepty elektroniczne w krótkim czasie na podstawie szybkiej konsultacji.'
    },
    {
        icon: <FaUsers size={40} className="mb-3 text-info" />,
        title: 'Terapia indywidualna',
        description: 'Prowadzimy terapie indywidualne dostosowane do potrzeb emocjonalnych pacjenta.'
    },
    {
        icon: <FaComments size={40} className="mb-3 text-warning" />,
        title: 'Terapia par',
        description: 'Pomoc dla par w kryzysie – wsparcie w komunikacji, budowaniu więzi i pokonywaniu trudności.'
    }
];

function Oferta() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5" style={{ color: '#0b3d91' }}>Nasza oferta</h2>

            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-6 col-lg-3 mb-4" key={index}>
                        <div className="card h-100 text-center shadow-sm border-0">
                            <div className="card-body">
                                {service.icon}
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text small text-muted">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5">
                <h4 className="mb-3">Gotowy, aby rozpocząć?</h4>
                <Link to="/specjalisci" className="btn btn-primary px-4 py-2">
                    Wybierz specjalistę
                </Link>
            </div>
        </div>
    );
}

export default Oferta;