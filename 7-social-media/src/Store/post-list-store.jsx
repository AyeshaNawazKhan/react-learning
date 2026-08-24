import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addList: () => {},
  deleteList: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList ({
      type: 'ADD_POST',
      payload:{
          id: Date.now(),
    title: postTitle,
    body: postBody,
    reactions: reactions,
    userid: userId,
    tags: tags,
    }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={
        //this is an objects
        {
          postList,
          addPost,
          deletePost,
        }
      }
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Muree",
    body: "Hi Friends,I Am Going To Muree For My Vacations.Hope To Enjoy A Lot.Peace Out.",
    reactions: "2",
    userid: "user-9",
    tags: ["Vacations", "Muree", "Enjoying"],
  },

  {
    id: "2",
    title: "Got 1st Position",
    body: "Got 1st Position In KP Board .",
    reactions: "14",
    userid: "user-13",
    tags: ["10th", "1st Position", "KP Board"],
  },
];

export default PostListProvider;
