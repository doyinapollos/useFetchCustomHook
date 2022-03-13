import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';

function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        
      setIsLoading(true)
      const response = axios.get(url)
      
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setIsLoading(false)
     })
     .catch(err => {
        setError(err)
        console.log(err);
    })
  
      }, [url]);

      

      return {data, isLoading, error};
  
      
 
}

export default useFetch