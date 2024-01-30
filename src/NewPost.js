import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle,postBody, setPostBody}) => {
  return (
    <main className='NewPost'>
      
      <form className="newPostFrom" onSubmit={handleSubmit}>
         {/* <label htmlFor='postTitle'>Title</label> */}
         {/* <input
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e)=> setPostTitle(e.target.velue)}
        /> */}
        <label htmlFor='postBody'>
           
        </label>
        <textarea
           id="postBody"
           required
           value={postBody}
           onChange={(e)=> setPostBody(e.target.value)}
        />
        <button id='1'
        type='submit'>Cancel</button>
        <button id='2'
        type="submit">post</button>
      </form>
    </main>
  )
}

export default NewPost
