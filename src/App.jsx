import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import { items } from "./data";
import { useState } from "react";

export default function App() {
  const [itemsData, setItemsData] = useState(items);
  const categories = ["الكل",...new Set(items.map((i) => i.category))] ;
  const filterByCategory = (cat) => {
    if (cat==="الكل") {
      setItemsData([...items]);
    } else {
      let newArr = [...items];
      newArr = newArr.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  const filterBySearch = (word) => {
    if (word !== "") {
      let newArr = [...items];
      newArr = newArr.filter((item) => item.title.includes(word));
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} categories={categories} />
        <ItemList itemsData={itemsData} />
      </Container>
    </div>
  );
}
