import React from "react";
import moment from "moment";
import { useState } from "react";
import "./Home.css";
// const time = moment.day(7);
function Home() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  function handleDeleteClick(id) {
    const removeItem = toDos.filter((toDo) => {
      return toDo.id !== id;
    });
    setToDos(removeItem);
  }
  const addButtonHandler = (e) => {
    e.preventDefault();

    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };
  return (
    <div className="home">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>
          Whoop, it's ❤ {moment().format("dddd")}
          {/* {moment.locale("ml").format("dddd")} */}
        </h2>
        <h3>lets organize our day </h3>
      </div>
      <div className="input">
        <form action="" onSubmit={addButtonHandler}>
          <input
            type="text"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            placeholder="🖊️ Add item..."
          />
          {/* <button type="submit"></button> */}
        </form>
        <i className="fas fa-plus" onClick={addButtonHandler}>
          +
        </i>
      </div>
      <div className="todos">
        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setToDos(
                      toDos.filter((obj) => {
                        if (obj.id === value.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => handleDeleteClick(value.id)}
                  className="fas fa-times"
                >
                  delete
                </i>
              </div>
            </div>
          );
        })}

        {toDos.map((value) => {
          if (value.status) {
            return <h1 className="list">{value.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Home;
