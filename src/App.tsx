/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}
