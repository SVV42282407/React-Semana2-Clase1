import './App.css';
import LoginHackaton from './functional/loginhackaton';
import MenuHackaton from './functional/menuHackaton';
import { menu } from '../data/menu';
import Modal from './functional/Modal';
import useModal from './functional/Modal/useModal';
import animacion from '../data/animacion.gif';
import gif2 from '../data/gif-animado-2.gif';

function App() {
    const {isShowing, toggle} = useModal();
    const modalContent = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6u_hPr3hT1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
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
                <div className="center">
                    <img src={animacion} className="img-button" onClick={toggle} width="128" alt="modal"/>
                {/*<button className="button-default" onClick={toggle}>Show Modal</button>*/}
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    modalContent={modalContent}
                />
                </div>
                <div className="right">
                    <img src={gif2} alt="animacion1"/>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default App;