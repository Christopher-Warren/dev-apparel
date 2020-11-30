import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";

import FilterItem from "./FilterItem";

const Filter = ({ type, tech, setType, setTech }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="row">
      <Dropdown
        onMouseEnter={() => setShowFilter(true)}
        onClick={() => setShowFilter(true)}
        show={showFilter}
        drop="down"
        onMouseLeave={() => setShowFilter(false)}
        className="dropdown-container"
      >
        <Dropdown.Toggle id="dropdown-basic" className="btn-custom">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu className="filter-dropdown">
          <FilterItem
            tech={tech}
            setTech={setTech}
            type={type}
            setType={setType}
          />
        </Dropdown.Menu>
      </Dropdown>
      <div className="">
        {tech && (
          <div className="filter-pill">
            {tech}
            <div
              className="d-inline pill-icon-button"
              onClick={() => setTech("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                height="24px"
                className="ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
        {type && (
          <div className="filter-pill">
            {type}
            <div
              className="d-inline pill-icon-button"
              onClick={() => setType("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                height="24px"
                className="ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
//
export default Filter;
