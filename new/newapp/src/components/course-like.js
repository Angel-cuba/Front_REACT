import { useState, useContext } from "react";

const CourseLike = () => {
const likeValues = useContext('')
  const [likes, setLikes] = useState([0]);

  console.log("Likes", likes[0]);

  return (
    <>
      <span>Likes: {likes[0]}</span>
      <button
        onClick={() => {
          likes[0]++;
          console.log(likes);
          setLikes([...likes]);
        }}
      >
        ❤️
      </button>
    </>
  );
};

export default CourseLike;