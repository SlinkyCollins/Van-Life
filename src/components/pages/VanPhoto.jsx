import van1 from "../pages/van 2.png"
import van2 from "../pages/van 7.png"
import van3 from "../pages/van 5.png"
import { useParams } from 'react-router-dom';

const VanPhoto = () => {
  const { id } = useParams();
  const vanPhotos = [
    {
      id: 1,
      imageUrl: van1
    },
    {
      id: 2,
      imageUrl: van2
    },
    {
      id: 3,
      imageUrl: van3
    }
  ];

  const van = vanPhotos.find((van) => van.id === parseInt(id))
  return (
    <div>
        <img src={van.imageUrl} alt="" style={{width: "10%", cursor: "pointer"}} />
    </div>
  )
}

export default VanPhoto