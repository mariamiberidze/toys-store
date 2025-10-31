import React from "react";

function FilterSidebar({ onFilterChange, currentFilters }) {
  const categories = ["ყველა", "განვითარებადი", "სტანდარტული"];
  const genders = ["ყველასთვის", "გოგოსთვის", "ბიჭისთვის"];
  const ages = ["ყველა", "0-2", "3-5", "5-8", "8+"];

  const handleChange = (filterName, value) => {
    onFilterChange({ ...currentFilters, [filterName]: value });
  };

  return (
    <div className="filter-sidebar">
      {/* ♿ აქსესურობა/იერარქია: H3 სათაურით */}
      <h3>ფილტრაცია</h3> 

      <div style={{display: 'flex', gap: '15px'}}>
        <div>
          {/* ♿ აქსესურობა: label-ის დამატება htmlFor ატრიბუტით */}
          <label htmlFor="category-select">
            <h4>სათამაშოს ტიპი:</h4>
          </label>
          <select
            id="category-select" /* ID-ის დამატება label-თან დასაკავშირებლად */
            value={currentFilters.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="gender-select">
            <h4>სქესი:</h4>
          </label>
          <select
            id="gender-select"
            value={currentFilters.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            {genders.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="age-select">
            <h4>ასაკი:</h4>
          </label>
          <select
            id="age-select"
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
      </div>
    </div>
  );
}

export default FilterSidebar;