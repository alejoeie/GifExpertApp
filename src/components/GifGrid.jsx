import React from 'react'
import {GifItem} from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs'
function GifGrid({category}) {

    const { images, isLoading } = useFetchGifs( category );


  return (
    <>  
        {/* <h3 className='text-3xl font-bold dark:text-white'>{category.toUpperCase()}</h3> */}
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className='card-grid'>
            
            {images.map( (image) => (
                <GifItem 
                    key={image.id}
                    {...image}
                />
            ))}
        </div>
        
    </>
  )
}

export default GifGrid