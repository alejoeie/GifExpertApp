import React from 'react'
// import {p} from 'prop-types';
import PropTypes from 'prop-types'

export const GifItem = ({title, url, id}) => {
    // console.log(title, url, id);
  return (
    <div className='card'>
        <img src={url} alt={ title } id={id}/>
        <p>{title}</p>
    </div>
  )
}

// GifItem.
// GifIte
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

// export default GifItem

