import React from 'react';

import MainRoutes from './Routes'
import Sidebar from './components/Sidebar'


import './styles.css'
import {DataProvider} from './GlobalState'

function App() {
  return (
    <DataProvider>
      <div className="app">
      <Sidebar/>
      <MainRoutes/>
      </div>
    </DataProvider>
  );
}

export default App;
