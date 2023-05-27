import { useState } from "react"

function AddCategory({onNewCategory}) {

    const [inputValue, setinputValue] = useState('');
    
    const onInputChange = (event) => {
        console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1 ) return;
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }
    return (
        <form onSubmit={ (event) => {onSubmit(event)}}>
            <input 
            type="text"
            placeholder="Buscar gifs, ej: Dragon Ball"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
    
  )
}

export default AddCategory