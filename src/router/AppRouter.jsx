import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { AuthPage } from '../pages/AuthPage';
import { InventoryPage } from '../pages/InventoryPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fale-conosco" element={<ContactPage />} />
      <Route path="/cadastro-login" element={<AuthPage />} />
      <Route path="/gestao-estoque" element={<InventoryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
