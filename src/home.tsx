import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
export const HomePage = () => {
    const navigate = useNavigate()
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                React query Course + Openapi
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Let get started
            </a>
            <ul>
                <li onClick={() => navigate('/example')}>Example query</li>
            </ul>
        </header>

    </div>
}