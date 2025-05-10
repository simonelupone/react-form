const articles = [
    {
        id: 1,
        title: "Understanding React",
        author: "John Doe",
    },
    {
        id: 2,
        title: "JavaScript Basics",
        author: "Jane Smith",
    },
    {
        id: 3,
        title: "CSS Tips and Tricks",
        author: "Alice Johnson",
    },
    {
        id: 4,
        title: "Advanced Node.js",
        author: "Bob Brown",
    },
    {
        id: 5,
        title: "Frontend Frameworks",
        author: "Charlie White",
    },
    {
        id: 6,
        title: "Backend Development",
        author: "Diana Green",
    },
    {
        id: 7,
        title: "State Management in React",
        author: "Eve Black",
    },
    {
        id: 8,
        title: "TypeScript Essentials",
        author: "Frank Blue",
    },
    {
        id: 9,
        title: "Testing in JavaScript",
        author: "Grace Yellow",
    },
    {
        id: 10,
        title: "Deploying Applications",
        author: "Henry Purple",
    },
];

function App() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='my-6 text-3xl font-semibold'>Articles</h1>

            <ul className='flex flex-col gap-4'>
                {articles.map(article => (

                    <li key={`article-${article.id}`} className='flex flex-col justify-between items-center'>
                        <span className='font-mono underline'>{article.title}</span>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default App;