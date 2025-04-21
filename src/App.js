import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, { useEffect, useRef, useState } from "react";


function App() {

  //initial item
   const [items, setItems] = useState(JSON.parse(localStorage.getItem('TO-do-list')) || []);

  //checkbox 
    const handleChange = (id) => {
      const listitem = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item)
      setItems(listitem)
      localStorage.setItem('TO-do-list', JSON.stringify(listitem))
    }
  //delete the list
    const handleClick = (id) => {
      const listitem = items.filter((item) =>
        item.id !== id)
      setItems(listitem)
      localStorage.setItem('TO-do-list', JSON.stringify(listitem))
    }

  
  //get the value from the input and store the value in the Newitem
  const [Newitem, setNewitem] = useState("")
    
  const handlesubmit = (e) =>{
      console.log(Newitem)
      additem(Newitem)
      setNewitem("")
      localStorage.setItem('TO-do-list', JSON.stringify(Newitem))

    }
  //adding new item into array
  const additem = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newadditem = { id, checked: false, item };
    const listitems = [...items, newadditem];
    setItems(listitems);
    localStorage.setItem('TO-do-list', JSON.stringify(listitems));
  };

  //search filter

  const [search, setSearch] = useState('')
  
  //useRef for input focus
   const userefer = useRef()

  return(
    <div>
    <Header title="To-Do-List"/>
    <Content items={items.filter(item => item.item.toLowerCase().includes(search))} setItems={setItems} handleChange={handleChange} handleClick={handleClick} newitem ={Newitem} setNewitem={setNewitem} handlesubmit={handlesubmit} search={search} setSearch={setSearch} userefer={userefer}/>
    <Footer length={items.length}/>
    </div>
  )
}

export default App;
