import './App.css';
import Navbar from './MyCompnents/Navbar';
import News from './MyCompnents/News';
import { Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
const App = () =>  {
   const[progress,setprogress] = useState(0)
   const pageSize = 6;
   let  apikey = process.env.REACT_APP_NEWS_API
   console.log(apikey)

    return (
      <>

        <Navbar />
        <LoadingBar containerStyle={{ position: 'relative' }}
          height={2}
          shadow={false}
          color='red'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setprogress={setprogress} key={'general'} pageSize={pageSize} country={"in"} category={"general"} apikey={apikey} />}></Route>
          <Route exact path='/business' element={<News setprogress={setprogress} key={'business'} pageSize={pageSize} country={"in"} category={"business"} apikey={apikey} />}></Route>
          <Route exact path='/entertainment' element={<News setprogress={setprogress} key={'entertainment'} pageSize={pageSize} country={"in"} category={"entertainment"} apikey={apikey} />}></Route>
          <Route exact path='/health' element={<News setprogress={setprogress} key={'health'} pageSize={pageSize} country={"in"} category={"health"} apikey={apikey} />}></Route>
          <Route exact path='/science' element={<News setprogress={setprogress} key={'science'} pageSize={pageSize} country={"in"} category={"science"} apikey={apikey} />}></Route>
          <Route exact path='/sports' element={<News setprogress={setprogress} key={'sports'} pageSize={pageSize} country={"in"} category={"sports"} apikey={apikey} />}></Route>
          <Route exact path='/technology' element={<News setprogress={setprogress} key={'technology'} pageSize={pageSize} country={"in"} category={"technology"} apikey={apikey} />}></Route>
        </Routes>

      </>
    )
}


export default App
