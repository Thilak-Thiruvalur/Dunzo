import React, { useState } from 'react'

export default function Items() {
    const[count,setCount] = useState(0);

  return (
    <>
<div className='item-container'>

    <div id='1' className='item-card'>
       
        <img alt='apple' src='https://hips.hearstapps.com/hmg-prod/images/apples-royalty-free-image-164084111-1537885595.jpg?crop=0.66667xw:1xh;center,top&resize=640:*' />
        <div className='item-desc'>
           <div>Apple</div>
           <div>1KG</div>
           <div>RS.65</div>
        </div>
        <div className='buy'>
            <button onClick={()=>{count>=1?setCount(count-1):setCount(0)}}>-</button>
            {count}
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
        <button className='cart-btn'>Add To Cart</button>
    </div>

    <div id='2' className='item-card'>

    </div>
    
    <div id='3' className='item-card'>

    </div>
    
    <div id='4' className='item-card'>

    </div>
    
    <div id='5' className='item-card'>

    </div>
    
    <div id='6' className='item-card'>

    </div>
    
    <div id='7' className='item-card'>

    </div>
    
    <div id='8' className='item-card'>

    </div>
    
    <div id='9' className='item-card'>

    </div>
    <div id='10' className='item-card'>

    </div>
    
    </div>
    
    
    </>
  )
}
