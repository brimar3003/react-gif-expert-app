import React, { useState } from 'react';

import AddCategory from './componets/AddCategory';
import GifGrid from './componets/GifGrid';

const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samuray X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Batman']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
            {
                categories.map((category) =>{
                    return(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    );
                })
            }
            </ol>
        </>
    );
};

export default GifExpertApp;