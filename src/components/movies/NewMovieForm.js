import { useRef } from "react";

import Card from "../ui/Card"
import classes from './NewMovieForm.module.css'

function NewMovieForm(props){
    const titleInputRef = useRef();
    const genreInputRef = useRef();
    const castInputRef = useRef();
    const langInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle= titleInputRef.current.value;
        const enteredGenre=genreInputRef.current.value;
        const enteredCast=castInputRef.current.value;
        const enteredLang=langInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;

        const movieData = {
            title: enteredTitle,
            genre: enteredGenre,
            cast: enteredCast,
            lang: enteredLang,
            description: enteredDescription
        }
        props.onAddMovie(movieData)

    }
return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='title'>Movie Title</label>
            <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor='genre'>Genre</label>
            <input type='text' required id='genre' ref={genreInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor='cast'>Cast</label>
            <input type='text' required id='cast' ref={castInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor='lang'>Language</label>
            <input type='text' required id='lang' ref={langInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add movie</button>
        </div>
    </form>
</Card>


}

export default NewMovieForm