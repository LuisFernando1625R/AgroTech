import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import StockPage from './pages/StockPage';
import DeliveryRegisterPage from './pages/DeliveryRegisterPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cadastro-login" element={<AuthPage />} />
      <Route path="/estoque" element={<StockPage />} />
      <Route path="/registro-entrega" element={<DeliveryRegisterPage />} />
      <Route path="/fale-conosco" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
