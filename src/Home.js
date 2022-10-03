import PostList from "./PostList";
import { useState, useEffect } from "react";
import PeriodFilter from "./PeriodFilter";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [dates, setDates] = useState(null);

  const handleFilter = (monthFilter) => {
    console.log(allBlogs);
    const filtered = allBlogs.filter((post) => {
      return post.date.substring(0,7) === monthFilter
    });
    console.log(filtered);
    setBlogs(filtered);
  }

  useEffect(() => {
    async function fetchBlogs() {
      fetch('http://localhost:3838/blogs')
        .then(response => {
          return response.json();
        })
        .then(parsedData => {
          setAllBlogs(parsedData);
          setBlogs(parsedData);
          setDates(parsedData.map(post => post.date));
        })
        .catch(error => {
          console.log(error.message);
        })
    }
    fetchBlogs();
  }, []);

  return (
    <div className="Home">
      {blogs && <PostList blogs={blogs} />}
      {dates && <PeriodFilter dates={dates} handleFilter={handleFilter}/>}
    </div>
  )
}

export default Home;