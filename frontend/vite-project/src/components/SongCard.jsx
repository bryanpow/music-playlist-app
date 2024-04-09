import { useState } from "react";
function SongCard({ title, artist, id, editedSong, setEditedSong}) {
  const [newTitle, setTitle] = useState(title);
  const [newArtist, setArtist] = useState(artist);
  const [isEditing, setIsEditing] = useState(false);


  const onEdit = (id, title, artist) => {
    const dofetch = async () => {
      const res = await fetch(`http://localhost:8082/songs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, artist }),
      });
      if (res.ok) {
        setIsEditing(false);
        setEditedSong(!editedSong)
      }
    }
    dofetch()
  }

  const onDelete = (id) => {
    const dofetch = async () => {
      const res = await fetch(`http://localhost:8082/songs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEditedSong(!editedSong)
      }
    }
    dofetch()
  }
  return (
    <div className="w-[250px] border p-10">
      <img
        src="/musical-note-symbol.png"
        width={80}
        className="m-auto"
        alt="music note"
      />

      {!isEditing ? (
        <div className="pt-2">
          <h3 className="text-[2rem] w-[100px] m-auto">{title}</h3>
          <p className="text-[0.8rem]">{artist}</p>
        </div>
      ) : (
        <div className="pt-2">
          <input  type="text" className="text-[2rem] w-[100px]  m-auto text-center" onChange={(e) => setTitle(e.target.value)} value={newTitle} />
          <input type="text" className="text-[0.8rem] w-[100px] m-auto text-center" onChange={(e) => setArtist(e.target.value)} value={newArtist} />
        </div>
      )}
      <div className="flex gap-2 justify-center pt-2">
        <button className=" text-[0.8rem]" onClick={() => onDelete(id)}>
          Delete
        </button>
        {isEditing ? (
          <button
            className=" text-[0.8rem]"
            onClick={() => onEdit(id, newTitle, newArtist)}
          >
            Save
          </button>
        ) : (
          <button className=" text-[0.8rem]" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        {}
      </div>
    </div>
  );
}

export default SongCard;
