import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ItemList = ({ itemsData }) => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        {itemsData.length >= 1 ? (
          itemsData.map((item, index) => (
              <Card
                key={index}
                className="d-flex flex-row mb-3"
                style={{ backgroundColor: "#F8F8F8" }}>
                <Card.Img className="img-item" variant="top" src="1.png" />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-desription">{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
          ))
        ) : (
          <h3 className="text-center">لا يوجد اصناف</h3>
        )}
      </Col>
    </Row>
  );
};

export default ItemList;
