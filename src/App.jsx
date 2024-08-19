import { Fragment, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import { arrangeData } from './utils/arrange';
import { data } from 'autoprefixer';

function App() {
  const [ contestList, setContestList ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const constests = await arrangeData(response);
        setContestList(constests);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        
      }
    };
    
    // Call the fetchData function
    fetchData();
  }, []);

  if(loading){
    return (
      <div className='h-screen flex items-center justify-center'>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    )
  }

  if(error){
    return <div>Error: {error}</div>; 
  }

  console.log(contestList);

  return (

   <div className='px-20 py-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8'>
      {
        contestList.map((contest, index)=>{
          return (
            <div className='indicator'>
              {/* {contest.div === 2 ? <span className="flex aline-center justify-center text-bold p-3 indicator-item font-mono text-xl badge badge-secondary">4</span> : ""} */}
              {contest.div === 2 ? <span className="flex aline-center justify-center font-bold p-3 indicator-item font-mono text-xl badge badge-primary">2</span> : ""}
              {contest.div === 3 ? <span className="flex aline-center justify-center font-bold p-3 indicator-item font-mono text-xl badge badge-secondary">3</span> : ""}
              {contest.div === 4 ? <span className="flex aline-center justify-center font-bold p-3 indicator-item font-mono text-xl badge badge-warning">4</span> : ""}
              <Card key= { contest.id } data = { contest } />
            </div>
          );
        })
      }
      </div>
   </div>
  );
}

export default App
