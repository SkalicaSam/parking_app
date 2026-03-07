const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Funkcia pre načítanie všetkých parkovacích miest.
 * @param {string} token - JWT token pre autorizáciu.
 * @returns {Promise<Array>} - Sľub, ktorý vráti pole parkovacích miest.
 */
export const fetchParkingSpots = async (token) => {
  const response = await fetch(`${API_BASE_URL}/parking-spots`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    // Špeciálne zaobchádzanie s chybou 401/403, aby sme mohli používateľa odhlásiť
    if (response.status === 401 || response.status === 403) {
      const error = new Error('Neplatný alebo exspirovaný token');
      error.status = response.status; // Pridáme status, aby sme naň mohli reagovať
      throw error;
    }
    throw new Error('Načítanie dát o parkovisku zlyhalo');
  }

  return response.json();
};

// V budúcnosti tu môžeme pridať ďalšie funkcie, napr.:
// export const updateParkingSpot = async (spotId, isOccupied, token) => { ... };
