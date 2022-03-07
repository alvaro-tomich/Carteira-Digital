const getCurrencies = async () => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await result.json();
  return data;
};

export default getCurrencies;
