import React from 'react';
import './App.css';
import BarChart from './component/barChart';
import UniversitySurveyChart from './component/piechart/piechart';

function App() {
  return (
    <div className="App">
      <BarChart />

      <hr style={{ margin: '120px 220px', }} />
      <UniversitySurveyChart />
      <div style={{ marginTop: '200px' }} />
    </div>
  );
}

export default App;
