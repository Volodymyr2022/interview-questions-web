// Function to get JWT from cookies
export function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) return value;
    }
    return null;
  }
  
  // Function to parse and decode the JWT
  function parseJWT(token) {
    if (!token) {
      console.error("Token not found");
      return null;
    }
  
    const payloadBase64 = token.split('.')[1]; // Extract the payload part
    try {
      const payloadDecoded = atob(payloadBase64); // Decode base64 string
      return JSON.parse(payloadDecoded); // Convert to JSON object
    } catch (error) {
      console.error("Invalid token format", error);
      return null;
    }
  }
  
  // Example usage
  const token = getCookieValue('token'); // Replace 'token' with your cookie name
  if (token) {
    const parsedData = parseJWT(token);
    console.log('Parsed JWT:', parsedData);
  }
  