import {nanoid} from "nanoid";

const Form = ({formData, setFormData, articles, setArticles}) => {

    const handleAdd = (e) => {
        e.preventDefault();

        const title = formData.title.trim();
        const author = formData.author.trim();

        if (!title || !author)
            return alert(
            'Please, insert valid title and author'
        );

        setArticles([...articles, {
            id: nanoid(),
            title,
            author
        }]);
        setFormData({title: "", author: ""});
    }

    const handleEdit = (e) => {
        const {name, value} = e.target;
        // copy current value of formData -> ...prev
        // [name]: value overwrites the corresponding propriety
        setFormData(prev => ({...prev, [name]: value}));
    }

    return (
        <form
            onSubmit={handleAdd}
            className='mt-20 flex sm:flex-row flex-col gap-4'
        >
            <input
                name="title"
                onChange={handleEdit}
                className='border-2 border-gray-300 rounded px-4 py-1'
                type='text'
                placeholder='Insert new article title'
                value={formData.title}
            />

            <input
                name="author"
                onChange={handleEdit}
                className='border-2 border-gray-300 rounded px-4 py-1'
                type='text'
                placeholder='Insert new article author'
                value={formData.author}
            />

            <button
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded'>
                Send
            </button>

        </form>
    );
};

export default Form;