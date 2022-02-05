import ItemList from './ItemList.js';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (<ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />) : (<p style={{margin: '2rem'}}>No items</p>)}
        </main>
    )
}

export default Content