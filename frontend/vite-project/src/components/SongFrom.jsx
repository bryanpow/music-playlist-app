import React from 'react'

function SongFrom() {
  return (
    <form className=' flex gap-5 border p-5  m-auto align-middle '>
        <h1 className='m-auto text-[2rem] font-thin'>ADD SONG</h1>
      <input type="text" className='p-2' name="title" placeholder="Enter song title" />
      <input type="text" className='p-2' name="artist" placeholder="Enter artist name" />
    </form>
  )
}

export default SongFrom