import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');
    
    const onInputChange = (event) => {
        console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        console.log("Hello world from the very submit");
        event.preventDefault();
        if (inputValue.trim().length <=1 ) return;
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }
    return (
        <form onSubmit={ (event) => {onSubmit(event)}} aria-label="form">
            <input 
            type="text"
            placeholder="Buscar gifs, ej: Dragon Ball"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
    
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}