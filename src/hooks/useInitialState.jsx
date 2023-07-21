import { useEffect, useState } from "react";

const API = "https://api.escuelajs.co/api/v1/products?limit=20&offset=20"

const useInitialState = () => {
    const [products, setProducts] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);
  const fetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = async () => {
    await fetchData();
    setRefreshCount(refreshCount + 1);
    console.log(`El componente se ha recargado ${refreshCount + 1} veces`)
  }

  return { products, handleRefresh };
};

export default useInitialState;