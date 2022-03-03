import React,{ useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos,setVideos] = useState([]);
  const [name,setName] = useState('han');

  useEffect(()=>{
      console.log('useEffect');
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhjGiVicUB1UqAQEopuzBlzIuEWIapTYk", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
                          setVideos(result.items);
                        })
        .catch(error => console.log('error', error));
    }
  ,[]);

  return <VideoList videos={videos} />;
}

export default App;
