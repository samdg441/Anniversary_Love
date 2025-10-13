import { useState, useEffect } from 'react';
import RomanticCarousel from './components/RomanticCarousel';
import FutureCarousel from './components/FutureCarousel';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const palabra = formData.get('palabra');
    const fecha = formData.get('fecha');

    // Validación - cambia estos valores por los correctos
    if (palabra.toLowerCase() === 'tesoro' && fecha === '12/01/2025') {
      setIsLoggedIn(true);
    } else {
      setError('Respuesta incorrecta. Intenta nuevamente.');
    }
  };

  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Felices 9 meses</h1>

        <form onSubmit={handleSubmit}>
          <h2>Como me dices?</h2>
          <input 
            type="text" 
            name="palabra" 
            placeholder="Elige la palabra mas romantica" 
          />
          <h2>Cuando iniciamos?</h2>
          <input 
            type="text" 
            name="fecha" 
            placeholder="dia/mes/año" 
          />
          <button type="submit">Ingresar</button>
          {error && <p className="error">{error}</p>}
        </form>

        <p>Hecho con ❤️ para nuestro aniversario</p>
      </div>
    </div>
  );
}

// Componente para la página principal después del login
function HomePage() {
  const [showHeart, setShowHeart] = useState(true);
  
  // Ocultar la animación del corazón después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeart(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Fecha de inicio de la relación - CAMBIA ESTA FECHA POR LA TUYA
  const startDate = new Date('2025-01-12');
  const currentDate = new Date();
  
  // Calcular días, minutos y segundos
  const diffTime = Math.abs(currentDate - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="home-container">
      {showHeart && <HeartAnimation />}
      
      <div className="content">
      <h1 className="section-title">Nuestros 9 Meses</h1>
        
        {/* Carrusel del tiempo juntos */}
        <RomanticCarousel 
          diffDays={diffDays}
          diffMinutes={diffMinutes} 
          diffSeconds={diffSeconds}
        />
        
          <h1 className="section-title">Y lo que nos falta vivir juntos</h1>
          <FutureCarousel />
      </div>
    </div>
  );
}

// Componente para la animación del corazón
function HeartAnimation() {
  return (
    <div className="heart-animation">
      <div className="heart"></div>
    </div>
  );
}

export default App;