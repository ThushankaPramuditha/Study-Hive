export const decodeJWT = (token) => {
  const [header, payload, signature] = token.split(".");
  if (!header || !payload || !signature) {
    console.error("Invalid token structure");
    return null;
  }

  const base64UrlToBase64 = (base64Url) =>
    base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const decodeBase64 = (base64) => {
    try {
      return JSON.parse(atob(base64));
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return null;
    }
  };

  return decodeBase64(base64UrlToBase64(payload));
};
