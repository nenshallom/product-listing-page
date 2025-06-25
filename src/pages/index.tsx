import { useState } from "react";
import StoreHeader from "@/components/StoreHeader";
import products from "../data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  // Holds search term typed by the user
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Array of selected product categories (e.g., "Coffee", "Baked Goods")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // Array of selected dietary filters (e.g., "Gluten Free", "Nut Free")
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  
     /**
   * Handles ticking/unticking category checkboxes
   * - If category is already selected, remove it from state
   * - If not, add it to state
   */
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCategories(prev => 
      prev.includes(value)
      // removed the state
      ? prev.filter(cat => cat !== value) 
      // add the state
      : [...prev, value]
    );
  };

  /**  Handles ticking/unticking dietary checkboxes */
  const handleDietaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedDietary(prev => 
      prev.includes(value)
      ? prev.filter(diet => diet !== value)
      : [...prev, value]
    );
  }

  // Clears all filters and search term
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedDietary([]);
    setSearchTerm('');
  };
  
  // Main render function
  return (
    <div>
      {/* store header and store info*/}
      <StoreHeader />

      <div className="main-layout">
        <div className="sidebar">
            {/* search input */}
            <input 
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
              {/* btn all filtering and search */}
            <button className="clear-button" onClick={handleClearFilters}>
              Clear All
            </button>


            {/* Filters section */}
            <div className="filters">

              <div className="filter-category">
                <h3>Category</h3>
                <label>
                  <input 
                    type="checkbox"
                    value="Baked Goods"
                    checked={selectedCategories.includes("Baked Goods")}
                    onChange={(e) => handleCategoryChange(e)}
                  />
                  Baked Goods
                </label>

                <label>
                  <input 
                    type="checkbox"
                    value="Coffee"
                    checked={selectedCategories.includes("Coffee")}
                    onChange={(e) => handleCategoryChange(e)}
                  />
                  Coffee
                </label>
              </div>
            

              <div className="filter-dietary">
                <h3>Dietary</h3>
                <label>
                  <input 
                    type="checkbox"
                    value="Eco Friendly"
                    checked={selectedDietary.includes("Eco Friendly")}
                    onChange={(e) => handleDietaryChange(e)}
                  />
                  Eco Friendly
                </label>

                <label>
                  <input 
                    type="checkbox"
                    value="Gluten Free"
                    checked={selectedDietary.includes("Gluten Free")}
                    onChange={(e) => handleDietaryChange(e)}
                  />
                  Gluten Free
                </label>

                <label>
                  <input 
                    type="checkbox"
                    value="Nut Free"
                    checked={selectedDietary.includes("Nut Free")}
                    onChange={(e) => handleDietaryChange(e)}
                  />
                  Nut Free
                </label>
              </div>
              
            </div>
        </div>

          {/* render product cards in grid layout */}
          <div className='product-grid'>
            {products
            // filter products based on selected categories and dietary preferences
            .filter(product => {
              return (
                // category filter: show all of none selected, if selected show matching filtered products
                (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
                (selectedDietary.length === 0 || selectedDietary.every(filter => product.dietary?.includes(filter))) &&
                // if searchterm is empty show all products otherwhise show products whose names contain the search term
                (searchTerm.trim() === ""  || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
              );
            })        
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
      </div>
    </div>
  );
}