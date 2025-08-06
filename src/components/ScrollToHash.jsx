import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const scrollToElement = () => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return true;
            }
            return false;
        };

        // Próbuj co 100ms przez maksymalnie 2 sekundy
        let attempts = 0;
        const interval = setInterval(() => {
            const success = scrollToElement();
            attempts++;
            if (success || attempts > 20) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [hash]);

    return null;
};

export default ScrollToHash;