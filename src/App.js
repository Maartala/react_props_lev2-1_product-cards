import Card from './components/Card';
import './App.css';

const productsArr = [
  {
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    item: "cocooil",
    price: "30$"
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    item: "Polaroid",
    price: "60$"
  },
  {
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    item: "Maui Moisture",
    price: "20$"
  }
]

function App() {
  return (
    <div className="App">
      <h1>SUPERSHOP</h1>
      <section className='card_grid'>
        <Card
          bild={productsArr[0].img}
          headline={productsArr[0].item}
          preis={productsArr[0].price}
        />
        <Card
          bild={productsArr[1].img}
          headline={productsArr[1].item}
          preis={productsArr[1].price}
        />
        <Card
          bild={productsArr[2].img}
          headline={productsArr[2].item}
          preis={productsArr[2].price}
        />
      </section>
    </div>
  );
}

export default App;
