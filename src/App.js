import Header from './Header';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';

import {useState} from 'react';
import {format} from 'date-fns';

function App() {
const [posts, setPosts]=useState([
 {
  id:1,
  title:"Name 1",
  datetime: "jan 01, 2024 11:27: 45 AM",
  body:"sdhbfjbskdfkhsdbfnldskfklk"
 },
 {
  id:2,
  title:"Name 2",
  datetime: "jan 01, 2024 11:27: 45 AM",
  body:"sdhbfjbskdfkhsdbfnldskfklkshdbfjbkjjksjdjfbhdbd"
 },
 {
  id:1,
  title:"Name 3",
  datetime: "jan 01, 2024 11:27: 45 AM",
  body:"sdhbfjbskdfkhsdbfnldskfklk"
 }

])

const [postTitle, setPostTitle]=useState('')
const [postBody, setPostBody]=useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  const id=posts.length ? posts[posts.length -1].id+1:1;
  const datetime=format(new Date(), 'MMMM dd, yyyy pp');
  const newPost={id, title:postTitle, datetime, body:postBody};
  const allPosts=[...posts, newPost];
  setPosts(allPosts);
  setPostTitle('');
  setPostBody('');
}

  return (
    <div className="App">
      
      <Header  title="Add Comments"/>
    
      <Home 
          posts={posts}
      />
       <NewPost 
               handleSubmit={handleSubmit}
               postTitle={postTitle}
               setPostTitle={setPostTitle}
               postBody={postBody}
               setPostBody={setPostBody}
        />
        
    </div>
  );
}

export default App;
