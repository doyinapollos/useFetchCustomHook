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
                <div key={comment.id}>
                    <p>Name: {comment.name}.... Email: {comment.email}</p>
                </div>

            ))}
          </div>

        </div>
    )


    
}

export default CommentCard