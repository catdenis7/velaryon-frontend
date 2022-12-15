import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import promosViewModel from "../viewmodels/PromosViewModel";


function PromosDropdown () {

    const [dropdownItems, setDropdownItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await promosViewModel.get();
            setDropdownItems(result);
        }
        fetchData();
    }, []);

    
    return (
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Productos
          </Dropdown.Toggle>
          <Dropdown.Menu>
           {dropdownItems.map((item, index) => (
            <Dropdown.Item key={index} as="button">{item.description}</Dropdown.Item>
           ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    
}

export default PromosDropdown;