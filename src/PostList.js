const PostList = (props) => {
  const postList = props.blogs;

  return (
    <div className="PostList">
      {postList.sort((a,b) => new Date(b.date) - new Date(a.date))
      .map(post => (
        <div className="Post" key={post.id}>
          <h2>{post.title}</h2>
          <h4>{post.date}</h4>
          {post.body}
        </div>
      ))}
    </div>
  )
}

export default PostList;