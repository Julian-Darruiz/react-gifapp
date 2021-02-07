import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory'
import {GrifGrid} from './components/GifGrid'

export const GifApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);
    return(
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr /> 
            <button>Add</button>
            <ol>
                {
                    categories.map(category => 
                    <GrifGrid
                        key={category}
                        category={category} 
                    />)
                }
            </ol>
        </>
    )
}




