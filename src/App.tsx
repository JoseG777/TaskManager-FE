import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './views/AddUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add_user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
