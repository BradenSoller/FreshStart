import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { all } from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const allItems = useSelector((store) => store.AllItems);
  console.log('allItems:', allItems);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ALL_ITEMS" });
    window.scrollTo(0, 0);
  }, []);

  const [title, setTitle] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  
  const eventForm = new FormData();

  const newItem = (event) => {
    event.preventDefault();
    eventForm.append("image", imageInput);
    eventForm.append("title", title);
    eventForm.append("description", description);
    eventForm.append("size", size);
    console.log("eventForm:", eventForm);

    dispatch({
      type: "FETCH_NEW_ITEM",
      payload: eventForm,
    });
    setTitle("");
    setImageInput("");
    setDescription("");
    setSize("");
  };


  return (
    <div className="container">
   <div className="item-list"> 
        {allItems.map((item) => {
          
          return (
            <div key={item.id} className="item-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.image} alt={item.name} />
            </div>
          );


        })}

       
          
        
       
        
   </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
