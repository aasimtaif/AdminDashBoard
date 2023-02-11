import { Dashboard } from './components';
import './App.css';
import { useState, useEffect } from 'react';
function App() {

  const [result, setResult] = useState();
  const [isLoading, setIsloading] = useState(true);

  const baseUrl = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  useEffect(() => {
    const fetchData = async () => {


      try {
        const response = await fetch(baseUrl)
        const data = await response.json();
        // console.log(data)
        setResult(data)
        setIsloading(false)
      } catch (error) {
        console.log(error)
      }
  
    }
    fetchData()
  }, []);
  return (
    <div className="App">
      <Dashboard data={result} />
    </div>
  );
}

export default App;
