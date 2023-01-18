import { Input } from "./styles";

const SearchField = (props) => {
    return (
        <Input 
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e)=>props.setValue(e.target.value)}
        />
    )
}

export default SearchField;