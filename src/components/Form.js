import {useState} from 'react'

function Form ({addPost}) {

    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title,
            body,
        }

        addPost(newPost);
        setTitle('');
        setBody('');
    };

    return(
        <form>
            <label htmlFor="title">Blog Post</label>
            <input id="title" value={title} onChange={handleInput} placeholder='Title here'></input>
            <textarea value={body} onChange={handleText} placeholder='Post here'></textarea>
            <div class='subButton'>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )


}


export default Form;