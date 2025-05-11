import {nanoid} from "nanoid";

const Form = ({newArticle, setNewArticle, articles, setArticles}) => {

    const handleAdd = (e) => {
        e.preventDefault();

        const article = newArticle.trim();

        if (!article) return alert(
            'Please, insert a valid article title'
        );

        setArticles([...articles, {
            id: nanoid(),
            title: article,
            author: 'Unknown'
        }]);
        setNewArticle('');
    }

    return (
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
    );
};

export default Form;