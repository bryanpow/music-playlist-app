import React from 'react'
import SongCard from './SongCard'

function SongsList() {
  return (
    <div className='w-screen pt-5 flex'>
        
        <SongCard id={1} title={'song'} artist={'Bryan'} />
    </div>
  )
}

export default SongsList