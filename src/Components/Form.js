import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../Slices/FactsSlice";

export default function Form() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.facts.count);
  const factsList = useSelector((state) => state.facts.factsList);

  const handleChange = ({ target }) => {
    dispatch(changeCount(target.value));
  };

  return (
    <div>
      <input
        type="number"
        min={1}
        max={5}
        onChange={handleChange}
        value={count}
      ></input>
      <ul>
        {factsList.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
