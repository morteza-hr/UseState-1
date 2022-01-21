import React,{useState} from 'react';

const NewSongForm = ({addsong}) => {
    const [title , settitle]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        addsong(title)
        settitle('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>New Song :</label>
            <input type="text" required value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            <input type="submit"/>
        </form>
     );
}
 
export default NewSongForm;