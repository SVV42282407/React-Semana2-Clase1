import './App.css';
import LoginHackaton from './functional/loginhackaton';
import MenuHackaton from './functional/menuHackaton';
import { menu } from '../data/menu';

function App() {
    return (
        <div className="container">
            <div className="nav-bar">
                {menu.map(item => (
                    <MenuHackaton
                        key={item.id}
                        name={item.title}
                        url={item.url}
                    />
                ))}
            </div>
            <div className="main">
                <div className="left">
                    <div className="row">
                      <h1>Connect to people, not platforms.</h1>
                    </div>
                    <div className="row">
                        <p>Person-mediate health data exchange is the future of Health IT and precision medicine. Youbase was built to take us there.</p>
                    </div>
                    <div className="row">
                        <LoginHackaton/>
                    </div>
                </div>
                <div className="center">2</div>
                <div className="right">3</div>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default App;