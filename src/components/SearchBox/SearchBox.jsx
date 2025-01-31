import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filterSlise";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filters);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <label className={s.inputBox} htmlFor="id-form">
        Find contacts by name
      </label>
      <input
        value={filter}
        onChange={handleChange}
        className={s.input}
        id="id-form"
      ></input>
    </div>
  );
}
