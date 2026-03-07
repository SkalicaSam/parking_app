const API_BASE_URL = 'http://localhost:8080/api';

/**
 * Funkcia pre prihlásenie používateľa.
 * @param {string} username - Používateľské meno.
 * @param {string} password - Heslo.
 * @returns {Promise<object>} - Sľub, ktorý vráti dáta s tokenom.
 */
export const login = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    // Tu môžeme v budúcnosti spracovať špecifické chyby pri prihlásení
    throw new Error('Prihlásenie zlyhalo. Skontrolujte meno a heslo.');
  }

  return response.json();
};