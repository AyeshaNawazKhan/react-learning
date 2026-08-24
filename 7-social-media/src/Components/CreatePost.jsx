import { useRef, useContext } from "react";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    postBodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    tagsElement.current.value = " ";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id. "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitleElement" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How Are You Feeling Today.... "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBodyElement" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell Us More About It. "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactionsElement" className="form-label">
          Number Of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How Many People Reacted To This Post "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tagsElement" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please Enter Tags Using Space "
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
