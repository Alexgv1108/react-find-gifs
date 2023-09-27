import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ handleAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        const valueInput = inputValue.trim();
        e.preventDefault();
        if (!valueInput.length) return;
        handleAddCategory(valueInput);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                id="busqueda"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                autoFocus="autofocus" />

            <button
                className="agregar"
                onClick={handleSubmit}
                disabled={!inputValue}
            >Add value</button>
        </form>
    )
}

AddCategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired
}