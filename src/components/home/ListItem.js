import React from "react";
import { posts } from "../../services/Data";

function ListItem() {
  // randomly generated value for unique ID generation
  // function hashedValue(){
  //     return Math.random(0.5) * 100;
  // }

  // filtering posts based on userId
  let userId = 1
  const firstUserPosts = posts.filter((post) => post.userId === userId);

  return (
    <ul>
      {firstUserPosts.length > 0
        ? firstUserPosts.map((post, index) => (
            <li key={post.id}>{post.title}</li>
          ))
        : "No posts found"}
    </ul>
  );
}

export default ListItem;
