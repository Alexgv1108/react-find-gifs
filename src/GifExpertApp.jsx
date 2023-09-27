import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // por defecto va a ver el index

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const handleAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  const handleDeleteCategory = newCategory => {
    debugger;
    const filter = categories.filter(category => newCategory !== category);
    setCategories(filter);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        handleAddCategory={handleAddCategory} />

      {
        categories.map(category => (
          <GifGrid
            category={category}
            key={category} 
            handleDeleteCategory={handleDeleteCategory}
          />
        ))
      }
    </>
  )
}
