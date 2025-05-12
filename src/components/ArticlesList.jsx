const ArticlesList = ({articles, setArticles}) => {

    const handleDelete = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    }

    return (
        <ul className='flex flex-col gap-4'>
            {articles.map(article => (

                <li key={`article-${article.id}`} className='flex justify-between items-center gap-8'>

                    <div>
                        <div className='font-mono underline'>{article.title}</div>
                        <div className='font-mono text-sm text-gray-500'><em>{article.author}</em></div>
                    </div>

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