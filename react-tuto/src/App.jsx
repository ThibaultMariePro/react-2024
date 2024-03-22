import * as React from "react";
import { useState } from "react";
import { Input } from "./components/form/Input";
import { Checkbox } from "./components/form/Checkbox";
import { ProductCategoryRow } from "./components/form/products/ProductCategoryRow";
import ProductRow from "./components/form/products/ProductRow";
import "./App.css";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('')

  return (
    <div className="flex items-center flex-col m-8">
      <SearchBar
        showStockedOnly={showStockedOnly}
        onChangeShowStockedOnly={setShowStockedOnly}
        search={search}
        onChangeSearch={setSearch}
      />
      <ProductTable productList={PRODUCTS} showStockedOnly={showStockedOnly} search={search} />
    </div>
  );
}

function SearchBar({ showStockedOnly, onChangeShowStockedOnly, search, onChangeSearch }) {

  return (
    <div>
      <Input 
        placeholder="Search..." 
        value={search} 
        onChange={onChangeSearch} 
      />
      <Checkbox
        checked={showStockedOnly}
        id="stocked"
        onChange={onChangeShowStockedOnly}
        label="Only show products in stock"
      />
    </div>
  );
}

function ProductTable({ productList, showStockedOnly, search }) {
  const rows = [];
  let lastCategory = null;

  for (let product of PRODUCTS) {
    if(search && product.name.toLowerCase().includes(search.toLowerCase()) || !search){
      if (product.category != lastCategory) {
        lastCategory = product.category;
        rows.push(
          <ProductCategoryRow key={product.category} name={product.category} />
        );
      }
      if(showStockedOnly && product.stocked || !showStockedOnly) {
        rows.push(<ProductRow key={product.name} product={product} />);
      }
    }
  }

  
  return (
    <div className="p-4">
      <table>
        <thead className="bg-cyan-100">
          <tr className="underline border-2 border-cyan-700">
            <th className="text-center p-2">Name</th>
            <th className="border-x-2 border-cyan-700 text-center p-2">
              Price
            </th>
            <th className="text-center p-2">Stock</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;
