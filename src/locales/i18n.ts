import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcomeMessage: 'Welcome to my app!',
          instructions: 'Please select a language.'
        }
      },
      es: {
        translation: {
          welcomeMessage: '¡Bienvenido a mi aplicación!',
          instructions: 'Por favor seleccione un idioma.'
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
});
