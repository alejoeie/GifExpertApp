import React from 'react'

const GifItem = ({title, url, id}) => {
    // console.log(title, url, id);
  return (
    <div className='card'>
        <img src={url} alt={ title } id={id}/>
        <p>{title}</p>
    </div>
  )
}

export default GifItem