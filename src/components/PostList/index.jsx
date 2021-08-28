import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,  
};
PostList.defaultProps = {
    posts:[],
}
function PostList(props) {
    const {posts} = props;
    console.log(posts)
    return (
        <ul className="PostList">
            {posts.map(post => (
                <li key={post.id} >{post.title}</li>
            ))}
        </ul>
    );
}

export default PostList;