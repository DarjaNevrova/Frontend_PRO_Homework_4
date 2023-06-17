import Products from './Products';

function App() {
  const arr = [
    {id: 1, name: 'watches', price: 2000},
    {id: 2, name: 'bracelet', price: 500},
    {id: 3, name: 'ring', price: 1500}
  ];

  return (
    <div>
      {
        arr.map(products => <Products key={products.id} {...products} />)
      }
  </div>
  );
}

export default App;
