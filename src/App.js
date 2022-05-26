import { useState } from "react";
import { MainContext } from "./Components/context";
import Header from "./Components/Header";
import Years from "./Components/Years";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
function App() {
  const [query, setQuery] = useState("OL26320A");
  const [search, setSearch] = useState("");
  const [book, setBook] = useState("");
  const data = {
    query,
    setQuery,
    search,
    setSearch,
    book,
    setBook,
  };
  return (
    <MainContext.Provider value={data}>
      <Header />
      <Years />
      <Loading />
      <Error />
    </MainContext.Provider>
  );
}

export default App;
