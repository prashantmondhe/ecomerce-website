
import CategoryCard from "../CategoryCard/CategoryCard"; 


const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    image: "/fresh-fruits.png",
    count: 12,
  },
  {
    id: 1,
    name: "Vegetables",
    image: "/fresh-veges.jpg",
    count: 18,
  },
  {
    id: 2,
    name: "Dairy",
    image: "/dairy.jfif",
    count: 15,
  },
  {
    id: 3,
    name: "Snacks",
    image: "/snacks.jpg",
    count: 24,
  },
  {   
    id: 4,
    name: "Canned Goods",
    image: "/canned-goods.jfif",
    count: 8,
  },
  {
    id: 5,
    name: "Bread & Bakery",
    image: "/bread-bakery.jfif",
    count: 10,
  },
  {
    id: 6,
    name: "Fishes",
    image: "/fishes.jfif",
    count: 5,
  },
  {
    id: 7,
    name: "Soft Drinks",
    image: "/soft-drinks.jfif",
    count: 30,
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
                <CategoryCard
                 key={el.id} 
                 image={el.image}
                 name={el.name} 
                 count={el.count} 
                 />
            ))}
        </div>
    </div>
  )
}

export default Category;