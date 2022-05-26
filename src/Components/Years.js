import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MainContext } from "./context";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { BiBookReader } from "react-icons/bi";

const Years = () => {
  const [selected, setSelected] = useState(null);
  const { query, book, setBook } = useContext(MainContext);
  let dates = [];
  //OL1394244A

  useEffect(() => {
    axios
      .get(`http://openlibrary.org/search.json?language=eng&author=${query}`)
      .then((response) => {
        setBook(response.data.docs);
      });
  }, [query, setBook]);
  const sortDates = () => {
    if (book) {
      book.map((item) => {
        if (!dates.includes(item.first_publish_year)) {
          dates.push(item.first_publish_year);
          dates.sort((a, b) => a - b);
        }
        return dates;
      });
    }
  };
  const isOpen = (key) => {
    if (selected === key) {
      return setSelected(null);
    }
    setSelected(key);
  };

  sortDates();

  return (
    <main>
      {dates.map((year, index) => (
        <section className="years__container" key={index}>
          <h2 className="years__date">{year}</h2>
          <div
            className="years__line"
            style={{
              background: `rgb(${255 - (255 / dates.length) * index},${
                (128 / dates.length) * index
              },0)`,
            }}
          ></div>
          {book && (
            <ul>
              {book.map(
                (item) =>
                  year === item.first_publish_year && (
                    <li key={item.key} onClick={() => isOpen(item.key)}>
                      <div
                        className="years__book"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        <div className="years__title">
                          <h3>
                            {selected === item.key
                              ? item.title
                              : item.title.length > 20
                              ? item.title.substring(0, 20) + "..."
                              : item.title}
                          </h3>
                          <MdArrowForwardIos
                            className={
                              selected === item.key
                                ? "years__icon--active"
                                : "years__icon"
                            }
                          />
                        </div>

                        <ul
                          className={
                            selected === item.key
                              ? "years__content--open"
                              : "years__content"
                          }
                        >
                          <li className="years__edition">
                            {item.edition_count}
                            {item.edition_count > 1 ? ` Editions` : " Edition"}
                          </li>
                          <li>
                            First Published:{" "}
                            <span>{item.first_publish_year}</span>
                          </li>
                          <li>
                            <IoIosApps />
                            <span> {item.number_of_pages_median}</span> pages
                          </li>
                          <li>
                            <BiBookReader />{" "}
                            <span>{item.number_of_pages_median * 1.5}</span>{" "}
                            minutes
                          </li>
                        </ul>
                      </div>
                    </li>
                  )
              )}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
};

export default Years;
