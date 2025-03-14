//import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Gpu from './components/gpu.jsx';
import { useState } from "react";

function App() {

    const [selectedGpu, setSelectedGpu] = useState(null);

    return (
        <Router>
        <div className="container text-center mt-5">
            <h1>PC Builder</h1>
            <p>Select a component category to start building your PC.</p>

                {selectedGpu && (
                    <div className="alert alert-info">
                        GPU: <strong>{selectedGpu.name}</strong> (£{selectedGpu.price.toFixed(2)})
                    </div>
                )}

            <div className="table-responsive">
                <table className="table table-bordered mt-3">
                    <tbody>
                        <tr>
                            <td><Link className="btn btn-primary w-100" to="/cpu">CPU</Link></td>
                            <td><Link className="btn btn-primary w-100" to="/gpu">GPU</Link></td>
                            <td><Link className="btn btn-primary w-100" to="/ram">RAM</Link></td>
                        </tr>
                        <tr>
                            <td><Link className="btn btn-primary w-100" to="/motherboard">Motherboard</Link></td>
                            <td><Link className="btn btn-primary w-100" to="/storage">Storage</Link></td>
                            <td><Link className="btn btn-primary w-100" to="/psu">Power Supply</Link></td>
                        </tr>
                        <tr>
                            <td><Link className="btn btn-primary w-100" to="/case">Case</Link></td>
                            <td><Link className="btn btn-primary w-100" to="/cooling">Cooling</Link></td>
                            <td><Link className="btn btn-primary w-100" to="/accessories">Accessories</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

            <Routes>
                    <Route path="/cpu" element={<h2>CPU Page</h2>} />
                    <Route path="/gpu" element={<Gpu setSelectedGpu={setSelectedGpu} />} />
                <Route path="/ram" element={<h2>RAM Page</h2>} />
                <Route path="/motherboard" element={<h2>Motherboard Page</h2>} />
                <Route path="/storage" element={<h2>Storage Page</h2>} />
                <Route path="/psu" element={<h2>Power Supply Page</h2>} />
                <Route path="/case" element={<h2>Case Page</h2>} />
                <Route path="/cooling" element={<h2>Cooling Page</h2>} />
                <Route path="/accessories" element={<h2>Accessories Page</h2>} />
            </Routes>
         </div>
        </Router>
    );
    
    
}

export default App;