import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Router/User';
import Admin from './Router/Admin';
import { Provider } from 'react-redux';
import store from './store/Global_store';


const App = () => {
  return (
    
    <Provider store={store}>
       <div className="App">
        <Router>
            <Routes>
              <Route path="/*" element={<User />} />
            </Routes>
            <Routes>
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </Router>
  </div>
    </Provider>
   
  );

}


export default App;
