// Configuración de la API
export const API_CONFIG = {
  BASE_URL: 'http://localhost/backMemorial/api',
  ENDPOINTS: {
    MENSAJES: {
      CREATE: '/mensajes/crear.php',
      READ: '/mensajes/leer.php'
    }
  },
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3
};

// Configuración de HTTP
export const HTTP_CONFIG = {
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

// Mensajes de error
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
  SERVER_ERROR: 'Error en el servidor. Inténtalo más tarde.',
  VALIDATION_ERROR: 'Los datos enviados no son válidos.',
  TIMEOUT_ERROR: 'La solicitud tardó demasiado. Inténtalo de nuevo.',
  UNKNOWN_ERROR: 'Error desconocido. Contacta al administrador.'
};
