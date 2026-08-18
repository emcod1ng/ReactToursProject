// import React, { useEffect, useState } from 'react';
// import Tours from './Tours';
// import Tour from './Tour';
// import Loading from './Loading';

// const url = 'https://www.course-api.com/react-tours-project';

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [tours, setTours] = useState([]);

//   const removeTour = id => {
//     const newTours = tours.filter(t => t.id !== id);
//     setTours(newTours);
//   };

//   const fetchTours = async () => {
//     setLoading(true);
//     try {
//       const resp = await fetch(url);
//       const data = await resp.json();

//       setLoading(false);
//       setTours(data);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTours();
//   }, []);

//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }

//   if (tours.length === 0) {
//     return (
//       <main>
//         <div className='title'>
//           <h2>no tours left</h2>
//           <button className='btn' onClick={() => fetchTours()}>
//             refresh
//           </button>
//         </div>
//       </main>
//     );
//   }
//   console.log(tours);
//   return (
//     <main>
//       <Tours tours={tours} removeTour={removeTour} />
//     </main>
//   );
// };

// export default App;
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  console.log(tours);
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default App;
