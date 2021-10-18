import { useEffect, useState } from 'react';

const useItems = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/data.JSON')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useItems;
