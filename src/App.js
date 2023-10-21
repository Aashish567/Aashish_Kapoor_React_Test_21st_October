// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import HomePage from './components/HomePage';
// import CartPage from './components/CartPage';

// function App() {
//   return (
//     <BrowserRouter>
//     {/* <HomePage /> */}
//     <Router>
//           <Route path="/"  element={<HomePage />} />
//           <Route path="/cart" element={<CartPage />} />
        
//     </Router>
//     </BrowserRouter>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
        
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
