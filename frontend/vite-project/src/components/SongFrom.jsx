import { useEffect, useState } from "react";

function SongFrom({ addedSong, setAddedSong }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dofetch = async () => {
      const res = await fetch("http://localhost:8082/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, artist }),
      });
      if (res.ok) {
        setAddedSong(!addedSong);
        setTitle("");
        setArtist("");
      }
    };
    dofetch();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex gap-5 border p-5  m-auto align-middle "
    >
      <h1 className="m-auto text-[2rem] font-thin">ADD SONG</h1>
      <input
        type="text"
        className="p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="Enter song title"
      />
      <input
        type="text"
        className="p-2"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        name="artist"
        placeholder="Enter artist name"
      />
      <button type="submit"> ADD</button>
    </form>
  );
}

export default SongFrom;
