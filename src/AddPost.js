const AddPost = () => {
  return (
    <div className="AddPost">
      <div className="formDiv">
        <label htmlFor="title" id="labelTitle">Title:</label>
        <input type={"text"} id="title" />
        <label htmlFor="content" id="labelContent">Your post:</label>
        <textarea id="content"></textarea>
        <div className="dateDiv">
          <label htmlFor="date">Date:</label>
          <input type={"date"} id="date"/>
        </div>
        <input type={"submit"} id="submit" />
      </div>
    </div>
  )
}

export default AddPost;