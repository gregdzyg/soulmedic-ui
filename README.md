💙 SOULMEDIC – Konsultacje online z lekarzem

Aplikacja React stworzona w ramach projektu zaliczeniowego.
Umożliwia pacjentom umawianie wizyt z lekarzami różnych specjalizacji w formie wideorozmowy lub telefonicznie, a także składanie wniosków o e-receptę.

🌐 Live Demo

Aplikacja online: https://soulmedic-ui-production.up.railway.app

🖼️ Layout i struktura

Projekt oparty o React, React Router, React Bootstrap i Vite. Layout oparty na własnych stylach z wykorzystaniem Bootstrap 5.
Komponenty layoutu: Layout.jsx, Navbar.jsx, Footer.jsx
Spójny nagłówek i stopka na wszystkich podstronach
Responsywny design (mobile, tablet, desktop)
Dodatkowe style w App.css oraz index.css

📍 Podstrony (Routing)

Wszystkie podstrony są zdefiniowane w pliku App.jsx:
/ – Strona główna (Home)
/o-nas – O nas
/specjalisci – Lista lekarzy z dynamicznym scrollowaniem do sekcji (hash routing)
/oferta – Oferta
/e-recepta – Formularz zamówienia e-recepty
/cennik – Cennik
/kontakt – Formularz kontaktowy + dane kontaktowe
/logowanie – Logowanie

🧩 Dodatkowe funkcjonalności

1. Modal umawiania wizyt (AppointmentModal.jsx)
Możliwość wyboru specjalisty
Wybór daty i godziny (sloty co 15 minut)
Szare (disabled) przyciski dla godzin niedostępnych
Obsługa zamykania tylko przyciskiem Anuluj / X
Formularz zawiera pole na cel wizyty
2. Scrollowanie do sekcji z URL (ScrollToHash.jsx)
Automatyczne przewinięcie do odpowiedniego specjalisty po kliknięciu linku
Obsługuje opóźnienia w renderowaniu komponentów
3. Formularze z walidacją
Formularz kontaktowy (Kontakt.jsx) i formularz e-recepty (Erecepta.jsx) z podstawową walidacją HTML5 (required, type, checkbox)

🧾 Technologie

React 18
React Router 6
Bootstrap 5 / React Bootstrap
Vite

🧩 Struktura projektu
src/
├── assets/           # Obrazy i ikony
├── components/       # Reużywalne komponenty UI
├── data/             # Pliki danych (lista specjalistów)
├── layout/           # Layout (Navbar + Footer + Outlet)
├── pages/            # Strony aplikacji
├── App.jsx           # Routing
├── main.jsx          # Root render
├── App.css / index.css # Globalne style

✅ Jak uruchomić lokalnie

npm install
npm run dev
Aplikacja uruchomi się pod adresem: http://localhost:5173

📚 Autor


Projekt wykonany przez Grzegorz Dżyg na zaliczenie ćwiczeń przedmiotu "Tworzenie interfejsów użytkownika" (2025).
