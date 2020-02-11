import React from 'react';
import { HashRouter, Route, Redirect} from 'react-router-dom';

import './App.css';
import Hud from './Hud.js';
import InventoryPortal from './Views/InventoryPortal.js'
import InteractiveMaps from './Views/InteractiveMaps.js'


const testinput = 
{
  "data" : [
    {
        "name": "Item1",
        "url": "/item1"
    },
    {
      "name": "Item2",
      "url": "/item2"
    },
    {
      "name": "Inventory",
      "children": [
        {
          "name": "Inventory Portal",
          "url": "/Inventory-Portal"
        },
        {
          "name": "Interactive Maps",
          "url": "/Interactive-Maps"
        },
      ]
    },
    {
      "name": "Item4",
      "children": [
        {
          "name": "Child41",
          "url": "/child41"
        },
        {
          "name": "Child42",
          "url": "/child42"
        },
        {
          "name": "Child43",
          "children": [
            {
              "name": "Child431",
              "url": "/child431"
            },
            {
              "name": "Child432",
              "url": "/child432,"
            },
            {
              "name": "Child433",
              "url": "/child433"
            }
          ]
        }
      ]
    }
  ]
}




function App() {
  return (
    <div className="App">
       <HashRouter>
            <Route>
              <Hud features = {testinput}>
               
                <Route path="/Inventory-Portal" component={InventoryPortal}/>
                <Route path="/Interactive-Maps" component={InteractiveMaps}/>
                </Hud>
            </Route>
        </HashRouter>
      
    </div>
  );
}

export default App;
