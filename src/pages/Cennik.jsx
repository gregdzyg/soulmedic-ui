import React from 'react';
import { Link } from 'react-router-dom';

const Cennik = () => {
    return (
        <div className="container py-5">
            {/* Nagłówek */}
            <h2 className="text-center mb-4" style={{ color: '#0b3d91' }}>
                Cennik usług
            </h2>

            {/* Opis */}
            <p className="text-center mb-5">
                Poniżej znajdziesz orientacyjne ceny naszych konsultacji i usług.
                Każda konsultacja realizowana jest w formie wygodnej i bezpiecznej wideorozmowy, bądź rozmowy telefonicznej.
            </p>

            {/* Tabela cenowa */}
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-bordered text-center">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Usługa</th>
                                <th scope="col">Cena</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Konsultacja psychiatryczna</td>
                                <td>od 119,99 zł</td>
                            </tr>
                            <tr>
                                <td>Konsultacja psychologiczna</td>
                                <td>od 129,99 zł</td>
                            </tr>
                            <tr>
                                <td>Psychoterapia indywidualna</td>
                                <td>od 149,99 zł</td>
                            </tr>
                            <tr>
                                <td>Konsultacja seksuologiczna</td>
                                <td>od 139,99 zł</td>
                            </tr>
                            <tr>
                                <td>Wystawienie e-recepty</td>
                                <td>69,99 zł</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Informacja o płatności */}
            <div className="text-center my-5">
                <p className="small text-muted">
                    Płatności realizowane są bezpiecznie za pomocą systemów online. Istnieje możliwość otrzymania faktury.
                </p>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h5 className="mb-3">Chcesz umówić wizytę?</h5>
                <Link to="/specjalisci" className="btn btn-primary px-4 py-2">
                    Wybierz specjalistę
                </Link>
            </div>
        </div>
    );
};

export default Cennik;