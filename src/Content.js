import { FaTrash } from "react-icons/fa";
import "./Content.css";

const Content = ({items, handleChange, handleClick, newitem, setNewitem, handlesubmit, search, setSearch, userefer}) => {

  return (
    <main className="content-container">
      <h2 className="title">My Activities</h2>
      <label className="text-input"><input required ref={userefer} autoFocus type="text" id="add-item" placeholder="Enter the text" value={newitem} onChange={(e) => setNewitem(e.target.value)}></input><button onClick={()=>{handlesubmit(); userefer.current.focus()}}>Add</button></label>

      <label className="search"><input id="search-item" placeholder="Search the item" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input></label>

      {(items.length) ? (
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <input onChange={() => handleChange(item.id)} type="checkbox" checked={item.checked} className="checkbox"
            />
            <label style ={(item.checked) ? {textDecoration:"line-through"} : null} onDoubleClick={() => handleChange(item.id)} className="checkbox-label">
              {item.item}
            </label>

            <FaTrash onClick={() => handleClick(item.id)} role="button" className="delete-icon" />
          </li>
        ))}
      </ul>
      ) : (<p style={{textAlign:"center"}}>your list is empty</p>)}
    </main>
  );
};

export default Content;
