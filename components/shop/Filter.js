import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";

import FilterItem from "./FilterItem";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [showTech, setShowTech] = useState(false);
  const [showType, setShowType] = useState(false);

  return (
    <div>
      <Dropdown
        onMouseEnter={() => setShowFilter(true)}
        onClick={() => setShowFilter(true)}
        show={showFilter}
        drop="down"
        onMouseLeave={() => setShowFilter(false)}
      >
        <Dropdown.Toggle id="dropdown-basic" className="btn-custom">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu className="filter-dropdown">
          <FilterItem />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
