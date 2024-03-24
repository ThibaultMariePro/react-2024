// course solution
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
  const [search, setSearch] = useState("");

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }
    if (search && !product.name.includes(search)) {
      return false;
    }
    return true;
  });

  return (
    <div className="flex items-center flex-col m-8">
      <SearchBar
        showStockedOnly={showStockedOnly}
        onShowStockedOnlyChange={setShowStockedOnly}
        search={search}
        onSearchChange={setSearch}
      />
      <ProductTable
        productList={visibleProducts}
        showStockedOnly={showStockedOnly}
        search={search}
      />
    </div>
  );
}

function SearchBar({
  showStockedOnly,
  onShowStockedOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <div className="flex flex-col">
      <Input placeholder="Search..." value={search} onChange={onSearchChange} />
      {/* TODO: add some range filter to the search */}
      <div className="text-center italic bg-cyan-200 flex flex-col rounded shadow p-2 mt-2 justify-between">
        <label htmlFor="pricerange">
          Price
        </label>
        <input id="pricerange" type="range" min={0} max={10} />
      </div>
      <Checkbox
        checked={showStockedOnly}
        id="stocked"
        onChange={onShowStockedOnlyChange}
        label="Only show products in stock"
      />
    </div>
  );
}

function ProductTable({ productList, showStockedOnly, search }) {
  const rows = [];
  let lastCategory = null;

  for (let product of productList) {
    if (product.category != lastCategory) {
      lastCategory = product.category;
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
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
