import { Routes, Route, Navigate } from "react-router-dom";
import {
  ContactsPage,
  CosmeticsPage,
  HomePage,
  MastersPage,
  PricePage,
  ReviewsPage,
} from "./pages";
import { Layout } from "./components/Layout";

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='contacts' element={<ContactsPage />} />
      <Route path='cosmetics' element={<CosmeticsPage />} />
      <Route path='masters' element={<MastersPage />} />
      <Route path='price' element={<PricePage />} />
      <Route path='reviews' element={<ReviewsPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  </Routes>
);

export default App;
