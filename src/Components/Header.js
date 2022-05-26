import React, { useContext } from "react";
import { MainContext } from "./context";
const Header = () => {
  const { setQuery, search, setSearch, setBook } = useContext(MainContext);
  function formHandle(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setBook("");
  }
  return (
    <header>
      <h1 className="header__title">Bookilify</h1>
      <div className="header__container">
        <span>books of</span>
        <form onSubmit={formHandle}>
          <input
            className="header__input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="the author"
          />
          <input className="header__btn" type="submit" value="find" />
        </form>
      </div>
    </header>
  );
};

export default Header;
