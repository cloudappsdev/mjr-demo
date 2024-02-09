import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="nav-wrap"
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <div className='anchor-wrapper'><Link to="/home" className="nav-anchor"><div>Home / About</div></Link></div>
          <div className='anchor-wrapper'><Link to="/rlist" className="nav-anchor">Rlist</Link></div>
          <div className='anchor-wrapper'><Link to="/word" className="nav-anchor">WordCloud</Link></div>
        </nav>
    );
}

export default Navbar