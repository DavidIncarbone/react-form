import { useState } from "react";
import posts from "../data/posts"
import Card from "./Card"
import tagsStyle from "../style/Tags.module.css"
import TagsList from "./TagsList"



function Main() {
    const [myPosts, setMyPosts] = useState(posts);
    function deleteItem(id) {

        setMyPosts(myPosts.filter((post) => post.id !== id))
    }

    return (
        <main className="d-flex">

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
        </main>
    )
}
export default Main