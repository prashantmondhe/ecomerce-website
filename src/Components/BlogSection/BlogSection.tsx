
import BlogCard from "../BlogCard/BlogCard"; 

const data = [
    {
        img: "/blog51.jpg",
        title: "Healthy Food Healthy Life",
        date: "Aug 27, 2026",
        comment: 7,
    },
    {
        img: "/blog52.jpg",
        title: "Healthy Food Healthy Life",
        date: "Aug 25, 2026",
        comment: 8,
    },
    {
        img: "/blog53.jpg",
        title: "Healthy Food Healthy Life",
        date: "Aug 28, 2026",
        comment: 2,
    },
];

const BlogSection = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Latest News</h2>
            <p className="text-gray-500 mt-2">
                Present Posts in best way to highlight interesting moments of your blog
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el, index) => (
                    <BlogCard
                        key={index} // इथे आपण सुरक्षिततेसाठी index वापरत आहोत
                        img={el.img}
                        title={el.title}
                        date={el.date}
                        comment={el.comment} 
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;