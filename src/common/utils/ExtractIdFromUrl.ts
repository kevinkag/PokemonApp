export const extractIdFromUrl = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2]; // El penúltimo segmento es el ID
};