import {useState} from "react";
import ArticlesList from "./components/ArticlesList.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";

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

    // const [newArticle, setNewArticle] = useState('');
    const [formData, setFormData] = useState({title: "", author: ""})
    const [articles, setArticles] = useState(initialArticles);

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Header/>
            <ArticlesList articles={articles} setArticles={setArticles} />
            <Form formData={formData} setFormData={setFormData} articles={articles}  setArticles={setArticles}/>
        </div>
    );
}

export default App;