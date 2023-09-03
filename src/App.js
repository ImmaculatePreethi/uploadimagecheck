import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';

function App() {
  return (
    <div className="App container">
        <ImageUpload/>
        <ImageList />  
    </div>
  );
}
 
export default App;