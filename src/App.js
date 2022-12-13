import "./App.css";
import Button from "../src/components/Button/Button";
import Card from "../src/components/Card/Card";
import image from "../src/components/Card/imagenes/sudaderaPalace.jpg";

// Imaginamos que esto viene de BBDD
const products = [
  {
    id:1,
    image: image ,
    title: "Sudadera Palace",
    description: "Descripcion: Sudadera Palace morada",
    price: "Precio: 60€",
  },
  {
  id:2,
    image: image ,
    title: "Sudadera Carlos",
    description: "Descripcion: Sudadera Carlos",
    price: "Precio: 70€",
  },
  {
    id:3,
    image: image ,
    title: "Sudadera Carlos",
    description: "Descripcion: Sudadera Nike",
    price: "Precio: 100€",
  },
];

function App() {
  return (
    <div className="App">
      {/* {products.map(({image,title,description,price,id}) => (
        <Card
          key = {id}
          image={image}
          title={title}
          description={description}
          price={price}
        >
          <Button text="Añadir al carrito"></Button>
          <Button text="Hola"></Button>
        </Card>
      ))} */}
      {products
      .filter(p => p.title === "Sudadera Carlos")
      .map(({image,title,description,price,id}) => (
        <Card
          key = {id}
          image={image}
          title={title}
          description={description}
          price={price}
        >
          <Button text="Añadir al carrito"></Button>
          <Button text="Hola"></Button>
        </Card>
      ))}
    </div>
  );
}

export default App;
