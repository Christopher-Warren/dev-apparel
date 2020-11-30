import { Dropdown } from "react-bootstrap";
import { useState } from "react";

const FilterItem = () => {
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

          <Dropdown.Menu>
            <Dropdown.Item as="div">Action2</Dropdown.Item>
            <Dropdown.Item as="div">Another action3</Dropdown.Item>
            <Dropdown.Item as="div">Something else4</Dropdown.Item>
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

          <Dropdown.Menu>
            <Dropdown.Item as="div">Action9</Dropdown.Item>
            <Dropdown.Item as="div">Another action8</Dropdown.Item>
            <Dropdown.Item as="div">Something else7</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Item>
    </div>
  );
};

export default FilterItem;
