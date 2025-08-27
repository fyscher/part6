import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const VisibilityFilter = () =>
{
    const dispatch = useDispatch();
    const handleChange = (e) =>
    {
        dispatch(filterChange(e.target.value))
    }
    return(
        <input
            name="filter"
            onChange={handleChange}
            placeholder="Match any phrase..."
        />
    )
}

export default VisibilityFilter;
