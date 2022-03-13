import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



function CommentCard() {

  const {id} = useParams();
const [comments, setComments] = useState([]);

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then(setComments)
    .catch((error) => {
        console.log(error)
    })

}, [])

    return (
      <div className='comment'>
        <div className='comment--div'>
            {comments && comments.map((comment) => (
                <div className='commt' key={comment.id} >
                    <span className='commt--span'>Name: {comment.name}</span><br />
                    <span className='commt--span'>Comment: {comment.body}</span><br />
                    <span className='commt--span'>Email: {comment.email}</span>
                </div>

            ))}
          </div>

        </div>
    )


    
}

export default CommentCard