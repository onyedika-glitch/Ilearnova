const API_BASE_URL = 'http://localhost:8000';

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const getDashboardData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/admin/dashboard`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

// Other API functions...