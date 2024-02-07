import { Bell, PersonCircle, Search } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'; // Importazione per il routing
import './app.css';

// Definizione del componente NavActions
function NavActions() {
  return (
    <Nav className="nav-actions">
      {/* Elemento di navigazione per la ricerca */}
      <Nav.Item>
        <NavLink to="/search">
          <Search className="icon" />
        </NavLink>
      </Nav.Item>
      {/* Elemento di navigazione per la sezione bambini */}
      <Nav.Item>
        <NavLink to="/kids" className="text-link">
          <span>Kids</span>
        </NavLink>
      </Nav.Item>
      {/* Elemento di navigazione per le notifiche */}
      <Nav.Item>
        <Bell className="icon" />
      </Nav.Item>
      {/* Elemento di navigazione per il profilo utente */}
      <Nav.Item>
        <PersonCircle className="icon" />
      </Nav.Item>
    </Nav>
  );
}

export default NavActions; // 
