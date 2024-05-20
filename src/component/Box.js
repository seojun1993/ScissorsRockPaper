import React from 'react'

const Box = ( { title, item, result } ) => {

    let lastResult;

    if(title === 'Computer' && result !== 'tie' && result !== ''){
        lastResult = result === 'win' ? 'lose' : 'win'
    }else{
        lastResult = result
    }
    
  return (
    <div className={`box ${lastResult}`}>
      <h1>{title}</h1>
      <img className='item-img' src={item && item.img} alt="IMG" />
      <h2>{lastResult}</h2>
    </div>
  )
}

export default Box
