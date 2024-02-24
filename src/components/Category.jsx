import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({ filterByCategory, categories }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {categories.map((item,index) => (
          <button key={index} onClick={() => onFilter(item)} style={{ border: "1px solid #b45b35" }} className="btn mx-2">
      {item}
    </button>
       ))}
      </Col>
    </Row>
  );
};

export default Category
