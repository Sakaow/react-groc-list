import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    // set focus on input field when submit(+) button is clicked
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                // useRef to set focus on the input field
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem