import { Divider, Input } from 'antd';

// Iteration 5
const Search = ({ setSearchInput }) => {

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

  return (
    <div  style={{width: '30%'}} >
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleChange} />
    </div>
  );
}

export default Search;