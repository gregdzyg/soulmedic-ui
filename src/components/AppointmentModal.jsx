import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const generateTimeSlots = (start = 8, end = 18) => {
    const times = [];
    for (let h = start; h < end; h++) {
        for (let m = 0; m < 60; m += 15) {
            const hour = String(h).padStart(2, '0');
            const minute = String(m).padStart(2, '0');
            times.push(`${hour}:${minute}`);
        }
    }
    return times;
};

const unavailableTimes = ['10:15', '14:45', '16:00'];

const AppointmentModal = ({ show, handleClose, specialist }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            specialist: specialist?.name,
            date,
            time,
            reason,
        };

        console.log('Wysłano dane:', data);
        handleClose(); // zamknij modal po wysłaniu
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Umów wizytę z {specialist?.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="appointmentDate" className="mb-3">
                        <Form.Label>Data wizyty</Form.Label>
                        <Form.Control
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="appointmentTime" className="mb-3">
                        <Form.Label>Godzina wizyty</Form.Label>
                        <div className="d-flex flex-wrap">
                            {generateTimeSlots().map((slot) => (
                                <button
                                    key={slot}
                                    type="button"
                                    className={`btn btn-sm me-2 mb-2 ${unavailableTimes.includes(slot)
                                            ? 'btn-secondary disabled'
                                            : slot === time
                                                ? 'btn-primary'
                                                : 'btn-outline-primary'
                                        }`}
                                    disabled={unavailableTimes.includes(slot)}
                                    onClick={() => setTime(slot)}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </Form.Group>

                    <Form.Group controlId="appointmentReason" className="mb-3">
                        <Form.Label>Cel wizyty</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            required
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Opisz krótko, czego dotyczy konsultacja..."
                        />
                    </Form.Group>

                    <div className="text-end">
                        <Button variant="secondary" onClick={handleClose} className="me-2">
                            Anuluj
                        </Button>
                        <Button type="submit" variant="primary" disabled={!date || !time || !reason}>
                            Zarezerwuj
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AppointmentModal;