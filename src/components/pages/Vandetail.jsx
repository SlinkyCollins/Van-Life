import { useParams } from 'react-router-dom';


const Vandetail = () => { 
  const { id } = useParams();
  const vanDetails = [
    {
      id: 1,
      name: 'Modest Explorer',
      category: 'Simple',
      description: 'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
      visibility: 'Public'
    },
    {
      id: 2,
      name: 'Beach Bum',
      category: 'Rugged',
      description: 'The Beach Bum is designed for adventurers who want to explore off-road terrain and enjoy camping by the sea. It comes equipped with all-terrain tires, a sturdy roof rack, and a built-in tent for comfortable sleeping under the stars.',
      visibility: 'Private'
    },
    {
      id: 3,
      name: 'Green Wonder',
      category: 'Rugged',
      description: 'The Green Wonder is an eco-friendly van designed for nature lovers who want to minimize their environmental impact. It features a hybrid engine, recycled materials in its construction, and a rooftop garden for growing fresh herbs and vegetables on the go.',
      visibility: 'Public'
    },
    // Add details for more vans as needed
  ];

  const van = vanDetails.find((van) => van.id === parseInt(id));

  // if (!van) {
  //   return <div>No van found with ID {id}</div>;
  // }

  return (
    <div>
        <div>
          <p style={{fontSize: "1rem", fontWeight: "700", marginBottom: "1.3rem"}}>Name: <span style={{fontSize: "1rem", fontWeight: "500"}}>{van.name}</span></p>
          <p style={{fontSize: "1rem", fontWeight: "700", marginBottom: "1.3rem"}}>Category: <span style={{fontSize: "1rem", fontWeight: "500"}}>{van.category}</span></p>
          <p style={{fontSize: "1rem", fontWeight: "700", marginBottom: "1.3rem"}}>Description: <span style={{fontSize: "1rem", fontWeight: "500"}}>{van.description}</span></p>
          <p style={{fontSize: "1rem", fontWeight: "700"}}>Visibility: <span style={{fontSize: "1rem", fontWeight: "500"}}>{van.visibility}</span></p>
        </div>
    </div>
  )
}

export default Vandetail