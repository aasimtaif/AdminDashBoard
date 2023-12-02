import { Pagination } from './components';
import './App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInfo } from "./store/Data"
function App() {

  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
 const details = useSelector(state =>state.data.info)
//  console.log(details)

  const dispatch = useDispatch();

  const baseUrl = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"



  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(response => dispatch(setInfo(response)))
      .catch(err => setError(err));
    setIsloading(false)
  }, []);
  // console.log(data)

  if (isLoading) {
    return <>LOAIDNG</>
  }
  if (error) {
    return <>ERROR</>
  }
  return (
    <div className="App">

      <Pagination  />
    </div>
  );
}

export default App;

