import React from 'react';
import { HashRouter, Route} from 'react-router-dom';

import './App.css';
import CarbonHud from './CarbonHud.js';
import Test1 from './Views/Test1.js';
import Test2 from './Views/Test2.js';

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
              <CarbonHud features = {testinput}>
                <Route path="/Test1" component={Test1}/>
                <Route path="/Test2" component={Test2}/>
              </CarbonHud>
            </Route>
        </HashRouter>
    </div>
  );
}

export default App;
