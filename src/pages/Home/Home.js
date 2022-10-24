import logo from '../../logo.svg';
import '../../assets/css/style.css';
import Harry from '../../components/Harry';

export default function Home() {
    return (
        <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Harry></Harry>
            <button type="button" className="btn btn-primary">Primary</button>
            <a
              className="Home-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}
  
