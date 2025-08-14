import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const allItems = useSelector((store) => store.AllItems);

  useEffect(() => {
    dispatch({ type: "FETCH_ALL_ITEMS" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
   <div className="item-list"> 
     
   </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
