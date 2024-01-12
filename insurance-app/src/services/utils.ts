export const getHeaders = (token: string) => ({
  headers: {
    Authorization: `Token ${token}`,
    'Content-Type': 'application/json',
  },
});
