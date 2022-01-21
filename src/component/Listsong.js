import React ,{useState} from 'react';
import {v4 as uuid} from 'uuid';
import NewSongForm from './Newsongform';

const ListSong = () => {
    const [songs , setsong]=useState([
        {title: 'one' ,id: 1},
        {title: 'two' ,id: 2},
        {title: 'three' ,id: 3}
    ])
    // const addsong =()=>{
    //     setsong([...songs ,{title:'new song',id:uuid()}])
    // }

    const addsong =(title)=>{
        setsong([...songs ,{title,id:uuid()}])
    }
    return (
      <ul>
          {songs.map(songs => <li key={songs.id}>{songs.title}</li>)}
          <button onClick={addsong}>add new song</button>
          <NewSongForm addsong={addsong}/>
      </ul>  
     );
}
 
export default ListSong;