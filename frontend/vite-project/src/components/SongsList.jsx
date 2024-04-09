import  { useEffect } from 'react'
import SongCard from './SongCard'

function SongsList({songs, editedSong, setEditedSong}) {
   
  return (
    <div className='w-screen gap-5 pt-5 flex'>
        {   

            songs.map((song) => {
                return <SongCard editedSong={editedSong}  setEditedSong={setEditedSong} key={song.id} id={song.id} title={song.title} artist={song.artist} />
            })
        }
    </div>
  )
}

export default SongsList