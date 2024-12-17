import { useState } from "react";
import posts from "../data/posts"
import Card from "./Card"
import tagsStyle from "../style/Tags.module.css"
import TagsList from "./TagsList";




function Main() {

    //DELETE
    const [myPosts, setMyPosts] = useState(posts);
    function deleteItem(id) {

        setMyPosts(myPosts.filter((post) => post.id !== id))
    }

    // ADD POST

    const initialNewPost = {
        title: "",
        content: "",

    };
    const [newPost, setNewPost] = useState(initialNewPost);
    const [postList, setPostList] = useState([]);


    function handleInput(event) {

        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setNewPost({ ...newPost, [event.target.name]: value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setPostList([...postList, newPost]);
        setNewPost(initialNewPost);
    }

    return (
        <main className="d-flex flex-column">

            <TagsList />

            <ul className="d-flex flex-wrap gap-5">
                {myPosts.map(post => (
                    post.published === true &&
                    <Card title={post.title}
                        description={post.content}
                        image={post.image}
                        key={post.id}
                        tags={post.tags}
                        onDelete={() => deleteItem(post.id)}
                    />
                ))}
            </ul>


            <section className="my-4 ms-4">
                <h2>Aggiungi nuovo post</h2>
                <form onSubmit={handleSubmit} className="w-50">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="titlelHelp"
                            value={newPost.title}
                            onChange={handleInput}
                            name="title"
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">
                            Content
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="content"
                            value={newPost.content}
                            onChange={handleInput}
                            name="content"
                        />
                    </div>


                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </section>


        </main>
    )
}
export default Main