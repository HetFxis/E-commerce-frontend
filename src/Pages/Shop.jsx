import React, { useState } from 'react';
import Category from '../Components/Category';
import Product from '../Components/Product';
import Downheader from '../Components/Downheader';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className=''><Downheader className=""/>
    <div className="flex  max-w-7xl mx-auto flex-wrap  min-h-screen">
      <Category onCategorySelect={handleCategorySelect} />
      <div className="flex-1 p-6 bg-white">
        <Product selectedCategory={selectedCategory} />
      </div>
    </div></div>
  );
};

export default App;
