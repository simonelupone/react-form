import {useState} from "react";

const initialArticles = [
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

    const [newArticle, setNewArticle] = useState('');
    const [articles, setArticles] = useState(initialArticles);

    const handleAdd = (e) => {
        e.preventDefault();

        const article = newArticle.trim();

        setArticles([...articles, {
            id: article.length + 1,
            title: newArticle,
            author: 'Unknown'
        }]);
        setNewArticle('');
    }

    const handleDelete = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='my-6 text-3xl font-semibold'>Articles</h1>

            <ul className='flex flex-col gap-4'>
                {articles.map(article => (

                    <li key={`article-${article.id}`} className='flex justify-between items-center gap-8'>

                        <span className='font-mono underline'>{article.title}</span>

                        <button
                            onClick={() => handleDelete(article.id)}
                            className='bg-red-500 hover:bg-red-600 text-white px-2 rounded'
                        >
                            Delete
                        </button>
                    </li>

                ))}
            </ul>

            <form
                onSubmit={handleAdd}
                className='mt-20 flex sm:flex-row flex-col gap-4'
            >
                <input
                    onChange={e => setNewArticle(e.target.value)}
                    className='border-2 border-gray-300 rounded px-4 py-1'
                    type='text'
                    placeholder='Insert new article title'
                    value={newArticle}
                />

                <button
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded'>
                    Send
                </button>

            </form>
        </div>
    );
}

export default App;