const apiUrl = process.env.REACT_APP_API_URL;

export const fetchTransactions = async () => {
  const response = await fetch(`${apiUrl}/transactions`);
  const data = await response.json();
  return data;
};
