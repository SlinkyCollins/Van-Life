import { useParams } from 'react-router-dom';

const VanPricing = () => {
  const { id } = useParams();
  const vanPrice = [
    {
      id: 1,
      price: "60.00" 
    },
    {
      id: 2,
      price: "80.00" 
    },
    {
      id: 3,
      price: "70.00" 
    }
  ];

  const van = vanPrice.find((van) => van.id === parseInt(id))

  // if (!van) {
  //   return <div>No van found with ID {id}</div>;
  // }

  return (
    <div>
      <h1 style={{fontSize: "1.5rem", fontWeight: "500"}}>${van.price}<span style={{color: "rgba(77, 77, 77, 1)", fontSize: "1rem", fontWeight: "500"}}>/day</span></h1>
    </div>
  )
}

export default VanPricing