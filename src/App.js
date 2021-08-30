import React, {useEffect, useState} from 'react';
import queryString from 'query-string'
import './App.css';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
function App() {


  const[postList,setPostList] = useState([]);
  const [pagination,setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 10
  });


  const[filters,setFilters] = useState({
    _limit:10,
    _page:1,
  
  })


  useEffect( ()=>{
    async function fetchPostList(){
      try {
        const paramsString = queryString.stringify(filters);
      const requestUrl=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const reponse=await fetch(requestUrl);
        const reponseJSON= await reponse.json();
        const {data, pagination}=reponseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.error('Failed to fetch post list',error.message);
      }
    }
    
    fetchPostList()
  }, [filters]);

  
function handlePageChange(newPage) {
  console.log(newPage)
  setFilters({
    ...filters,
    _page: newPage,
})
}

function handleFiltersChange(newFilters) {
  console.log(newFilters.searchTern)
  setFilters({
  ...filters,
  _page:1,
  title_like: newFilters.searchTern,
})
    
}
  return (
    <div className="App">
  <PostFiltersForm onSubmit={handleFiltersChange} />
    <PostList posts={postList} />
    <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
    />
    </div>
  );
}

export default App;
