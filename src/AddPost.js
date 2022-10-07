import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [date, setDate] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, date};

    fetch('http://localhost:3838/blogs', {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added');
    })
  }

  return (
    <div className="AddPost">
      <h2>Add a new post</h2>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <div className="formDiv">
          <label htmlFor="title" id="labelTitle">Title:</label>
          <input required type={"text"} id="title" onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="content" id="labelContent">Your post:</label>
          <textarea required id="content" onChange={(e) => setBody(e.target.value)}></textarea>
          <div className="dateDiv">
            <label required htmlFor="date">Date:</label>
            <input type={"date"} id="date" onChange={(e) => setDate(e.target.value)}/>
          </div>
          <input type={"submit"} id="submit" value={"Add post"}/>
        </div>
      </form>
    </div>
  )
}

export default AddPost;