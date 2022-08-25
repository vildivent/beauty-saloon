import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import {
  ContactsPage,
  CosmeticsPage,
  HomePage,
  MastersPage,
  PricePage,
  ReviewsPage,
  BodyEstheticianPage,
  CosmetologyPage,
  HairdressingPage,
  ManicurePage,
  PedicurePage,
  VisagePage,
} from "./pages";
import { Layout } from "./components/Layout";

const App = () => (
  <Routes>
    <Route path='beauty-saloon/' element={<Navigate to='/' replace />}></Route>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='contacts' element={<ContactsPage />} />
      <Route path='cosmetics' element={<CosmeticsPage />} />
      <Route path='masters' element={<MastersPage />} />
      <Route path='price' element={<PricePage />} />
      <Route path='reviews' element={<ReviewsPage />} />
      <Route path='services' element={<Outlet />}>
        <Route path='hairdressing' element={<HairdressingPage />} />
        <Route path='manicure' element={<ManicurePage />} />
        <Route path='pedicure' element={<PedicurePage />} />
        <Route path='cosmetology' element={<CosmetologyPage />} />
        <Route path='body-esthetician' element={<BodyEstheticianPage />} />
        <Route path='visage' element={<VisagePage />} />
      </Route>
    </Route>
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
);

export default App;
