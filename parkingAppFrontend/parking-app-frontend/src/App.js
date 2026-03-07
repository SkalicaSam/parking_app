import React, { useState } from 'react';

// Importujeme servisnú funkciu len pre prihlásenie
import { login as loginUser } from './services/authService';

// Importujeme komponenty
import Header from './components/Header';
import ParkingGrid from './components/ParkingGrid';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState(localStorage.getItem('parkingAppToken'));
  const [loginError, setLoginError] = useState('');

  // --- DOČASNÉ DÁTA ---
  // Namiesto načítavania z backendu si vytvoríme dočasné dáta priamo tu.
  const [spots, setSpots] = useState([
    { id: 1, spotNumber: 'A1', isOccupied: false },
    { id: 2, spotNumber: 'A2', isOccupied: true },
    { id: 3, spotNumber: 'A3', isOccupied: false },
    { id: 4, spotNumber: 'A4', isOccupied: false },
    { id: 5, spotNumber: 'B1', isOccupied: true },
    { id: 6, spotNumber: 'B2', isOccupied: false },
    { id: 7, spotNumber: 'B3', isOccupied: true },
    { id: 8, spotNumber: 'B4', isOccupied: false },
  ]);
  // --------------------

  const handleLogin = async (username, password) => {
    try {
      setLoginError('');
      const data = await loginUser(username, password);
      localStorage.setItem('parkingAppToken', data.accessToken);
      setToken(data.accessToken);
    } catch (error) {
      console.error(error);
      setLoginError('Prihlásenie zlyhalo. Skontrolujte údaje.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('parkingAppToken');
    setToken(null);
  };

  const handleSpotClick = (spotId) => {
    // Táto funkcia teraz mení stav len lokálne v prehliadači.
    setSpots(currentSpots =>
      currentSpots.map(spot =>
        spot.id === spotId ? { ...spot, isOccupied: !spot.isOccupied } : spot
      )
    );
  };

  // --- Zobrazenie komponentov ---

  // Ak nemáme token, zobrazíme prihlasovací formulár
  if (!token) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  // Ak máme token, zobrazíme parkovisko s našimi dočasnými dátami
  return (
    <div className="App">
      <Header onLogout={handleLogout} />
      <main className="container mx-auto p-4">
        <ParkingGrid spots={spots} onSpotClick={handleSpotClick} />
      </main>
    </div>
  );
}

export default App;