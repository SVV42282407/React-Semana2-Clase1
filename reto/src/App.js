import './App.css';
//import LoginForm from './component/functional/login';
import Cards from './component/functional/cards';
import { cards } from './data/cards';

function App() {
  const showAdditonal = (additional) => {
         const alertInformation = Object.entries(additional)
             .map(information => `${information[0]}: ${information[1]}`)
             .join('\n');
             alert(alertInformation)   
     }
  return (
    <div className="App container">
      <main>
        {/*<LoginForm/>*/}
        <div className="row">
          {cards.map(product => (
                  <Cards
                      key={product.name}
                      name={product.name}
                      productDescription={product.productDescription}
                      url={product.url}
                      additional={product.additional}
                      showAdditional={showAdditonal}
                  />
            ))}
          </div>
      </main>
    </div>
  );
}

export default App;
