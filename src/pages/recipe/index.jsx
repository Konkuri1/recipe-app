import React from 'react'
import { useParams } from 'react-router-dom'

export default function Recipe () {

const {id}= useParams();
  return (
    <h1>Recipe Page:</h1>
  );
}

// export default Recipe;