import { createContext, useState } from "react";

const Store = createContext({
  data: [],
});

export function StoreProvider({ children }) {
  const [data, setData] = useState([]);

  const context = { data };
  return <Store.Provider value={context}>{children}</Store.Provider>;
}

export default Store;
