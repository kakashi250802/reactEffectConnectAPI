import React, {useEffect, useState} from 'react';
import './App.css';
import PostList from './components/PostList';
function App() {


  const[postList,setPostList] = useState([]);
  useEffect( ()=>{
    async function fetchPostList(){
      try {
        
      const requestUrl='http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const reponse=await fetch(requestUrl);
        const reponseJSON= await reponse.json();
        const {data}=reponseJSON;
        setPostList(data);
      } catch (error) {
        console.error('Failed to fetch post list',error.message);
      }
    }
    
    
    
    fetchPostList()
  }, []);

  return (
    <div className="App">
  
    <PostList posts={postList} />
    </div>
  );
}

export default App;
