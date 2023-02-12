import { Pagination} from './components';
import './App.css';
import { useState, useEffect } from 'react';
function App() {

  const [result, setResult] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);


  const baseUrl = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  useEffect(() => {
  
    fetch(baseUrl)
  .then(response => response.json())
  .then(response => setResult(response))
  .catch(err => setError(err));
  setIsloading(false)
  }, []);
  // console.log(result)
  if(isLoading) {
    return<>LOAIDNG</>
  }
  if(error ){
    return<>ERROR</>
  }
  return (
    <div className="App">

      <Pagination data={result} />
    </div>
  );
}

export default App;
