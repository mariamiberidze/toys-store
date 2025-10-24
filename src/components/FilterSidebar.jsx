import React from "react";

function FilterSidebar({ onFilterChange, currentFilters }) {
  const categories = ["ყველა", "განვითარებადი", "სტანდარტული"];
  const genders = ["ყველასთვის", "გოგოსთვის", "ბიჭისთვის"];
  const ages = ["ყველა", "0-2", "3-5", "5-8", "8+"];

  const handleChange = (filterName, value) => {
    // მშობელ კომპონენტში (App.js) ფილტრების განახლება
    onFilterChange({ ...currentFilters, [filterName]: value });
  };

  return (
    <div className="filter-sidebar">
      <h3>ფილტრაცია</h3>

      <h4>სათამაშოს ტიპი:</h4>
      <select
        value={currentFilters.category}
        onChange={(e) => handleChange("category", e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <h4>სქესი:</h4>
      <select
        value={currentFilters.gender}
        onChange={(e) => handleChange("gender", e.target.value)}
      >
        {genders.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <h4>ასაკი:</h4>
      <select
        value={currentFilters.age}
        onChange={(e) => handleChange("age", e.target.value)}
      >
        {ages.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSidebar;
