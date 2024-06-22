import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageBeneficiaries from './pages/ManageBeneficiaries';
import AddBeneficiary from './pages/AddBeneficiary';
import EditBeneficiary from './pages/EditBeneficiary';
import BeneficiaryDetails from './components/BeneficiaryDetails';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import path from './utils/path';

const App = () => {
  return (
    <Router>
      <div>
          <Navbar/>
        <Routes>
          <Route path={path.homePage} element={<HomePage />} />
          <Route path={path.manageBeneficiaries} element={<ManageBeneficiaries />} />
          <Route path={path.addBeneficiaries} element={<AddBeneficiary />} />
      <Route path={path.editBeneficiaries} element={<EditBeneficiary />} />
      <Route path={path.notFound} element={<NotFound />} />
    </Routes>
  </div>
</Router>
  );
}
export default App;

