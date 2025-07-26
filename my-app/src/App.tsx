import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Cluster from './pages/Cluster';
import PostRequest from './pages/PostRequest';
import GroupOrders from './pages/GroupOrders';
import AIAssistant from './pages/AIAssistant';
import TrackOrders from './pages/TrackOrders';
import Ledger from './pages/Ledger';
import RateSupplier from './pages/RateSupplier';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vendor/home" element={<Dashboard />} />
          <Route path="/vendor/cluster" element={<Cluster />} />
          <Route path="/vendor/request" element={<PostRequest />} />
          <Route path="/vendor/group-orders" element={<GroupOrders />} />
          <Route path="/vendor/ai-assistant" element={<AIAssistant />} />
          <Route path="/vendor/orders" element={<TrackOrders />} />
          <Route path="/vendor/ledger" element={<Ledger />} />
          <Route path="/vendor/rate" element={<RateSupplier />} />
          <Route path="/vendor/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;