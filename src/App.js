import { Pagination} from './components';
import './App.css';
import { useState, useEffect } from 'react';
function App() {

  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);


  const baseUrl = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  useEffect(() => {
  
    fetch(baseUrl)
  .then(response => response.json())
  .then(response => setData(response))
  .catch(err => setError(err));
  setIsloading(false)
  }, []);
  // console.log(data)
  if(isLoading) {
    return<>LOAIDNG</>
  }
  if(error ){
    return<>ERROR</>
  }
  return (
    <div className="App">

    <Pagination data={data} setData = {setData} />
    </div>
  );
}

export default App;

