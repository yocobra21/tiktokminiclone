import React from 'react'
import { Video } from './components'
import db from './firebase'

import './App.css'


function App() {

  const [videos, setVideos] = React.useState([])

  console.log(videos)

  React.useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={Number(likes)}
              comments={Number(comments)}
              shares={Number(shares)}
            />)
          )
        }
      </div>
    </div>
  );
}

export default App;
