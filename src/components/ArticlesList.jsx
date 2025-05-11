const ArticlesList = ({articles, setArticles}) => {

    const handleDelete = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    }

    return (
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
    );
};

export default ArticlesList;