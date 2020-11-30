import { Dropdown } from "react-bootstrap";
import { useState } from "react";

const FilterItem = ({ tech, setTech, type, setType }) => {
  const [showTech, setShowTech] = useState(false);
  const [showType, setShowType] = useState(false);

  return (
    <div>
      <Dropdown.Item as="div" className="filter-style">
        <Dropdown
          onClick={() => setShowTech(true)}
          onMouseLeave={() => setShowTech(false)}
          show={showTech}
          drop="right"
        >
          <Dropdown.Toggle
            variant="success"
            id="dropdown-item"
            className="item-button btn-custom-items"
          >
            Tech
          </Dropdown.Toggle>

          <Dropdown.Menu className="second-menu">
            <Dropdown.Item as="div" onClick={() => setTech("Javascript")}>
              Javascript
            </Dropdown.Item>
            <Dropdown.Item as="div" onClick={() => setTech("NodeJs")}>
              NodeJS
            </Dropdown.Item>
            <Dropdown.Item as="div" onClick={() => setTech("NextJS")}>
              NextJS
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Item>
      <Dropdown.Item as="div" className="filter-style">
        <Dropdown
          onClick={() => setShowType(true)}
          onMouseLeave={() => setShowType(false)}
          show={showType}
          drop="right"
        >
          <Dropdown.Toggle
            variant="success"
            id="dropdown-item"
            className="item-button btn-custom-items"
          >
            Type
          </Dropdown.Toggle>

          <Dropdown.Menu className="second-menu">
            <Dropdown.Item as="div" onClick={() => setType("Shirt")}>
              Shirt
            </Dropdown.Item>
            <Dropdown.Item as="div" onClick={() => setType("Hoodie")}>
              Hoodie
            </Dropdown.Item>
            <Dropdown.Item as="div" onClick={() => setType("Mask")}>
              Mask
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Item>
    </div>
  );
};

export default FilterItem;
