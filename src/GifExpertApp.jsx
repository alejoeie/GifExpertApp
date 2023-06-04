import { useState } from "react"
import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import NavBar from "./components/NavBar";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        // Valorant
        // categories.push(newCat);
        if (categories.includes(newCategory.toLowerCase())) return;
        console.log(newCategory);
        setCategories([newCategory]);
    }
    return (
        <>
            <NavBar />
            {/* <h1 className="text-3xl font-bold underline">GifExpertApp</h1> */}
                <AddCategory onNewCategory={event => onAddCategory(event)} />

                {/* <button onClick={onAddCategory }>Agregar</button> */}
                    {categories.map(category => 
                        (
                            <div key={ category }>
                                <GifGrid 
                                    key={category} 
                                    category={category}/>
                            </div>
                        )
                    )}
        </>
    )
}