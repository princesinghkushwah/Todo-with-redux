import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../redux/actions/actions";
import Todo from "./Todo";

const Home = () => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const addData = () => {
    if (data !== "") dispatch(Add(data));
    setData("");
  };

  return (
    <>
      <div className="container">
        <section className="mt-3  text-center">
          <h4>Enter your Task</h4>
        </section>

        <div className="mt-3 text-center">
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="form-control"
          />
          <button onClick={() => addData()}>Add</button>
        </div>
        <Todo />
      </div>
    </>
  );
};

export default Home;
