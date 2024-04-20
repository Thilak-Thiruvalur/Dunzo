import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
   <>
   <div className='container'>
    
    <Link className='card' to="/groceries"> Groceries </Link>
       
    <Link className='card' to="/clothing">Clothing</Link>
    
    <Link className='card' to="/electronics">Electronics</Link> 
        
    <Link className='card' to="/beauty">Beauty & Care</Link>
       
   </div>
   </>
  )
}
