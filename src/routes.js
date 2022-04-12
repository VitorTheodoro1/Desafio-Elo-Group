import React from "react";
import { Route, BrowserRouter as Router, Routes as MyRoutes} from "react-router-dom";

import PainelLeads from './view/painelLeads/PainelLeads'
import Home from './view/home/Home'

const Routes = () => {
   return(
    <Router>
    <MyRoutes>
      <Route element={<Home/>} path="/" exact />
      <Route element={<PainelLeads/>} path="/listas" />
    </MyRoutes>
    </Router>
   )
}

export default Routes;