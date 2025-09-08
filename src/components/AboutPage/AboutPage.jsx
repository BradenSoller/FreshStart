
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { all } from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function AboutPage() {
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
      <div className='titleInput'>
        <input
          id="inputAnime"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
  
      <Button className='ImageUploadButton'>
        <AttachFileIcon /> 
      <div className='imageInput'>
        <input
          id="image-upload"
          type="file"
          onChange={(e) => setImageInput(e.target.files[0])}
          style={{ display: "none" }}
          />
          </div>
      </Button>
          
          
       
       
    </div>



  )


}

export default AboutPage;
