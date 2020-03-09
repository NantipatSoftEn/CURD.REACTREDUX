// CountTodo
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const reset = () => {
  return { type: "RESET_COUNTERS" };
};

export const plus = p => {
  return { type: "PLUS_COUNTERS", p };
};

// Comment
export const addComment = data => {
  return { type: "ADD_COMMENT", data };
};

export const delComment = id => {
  return {
    type: "DELETE_COMMENT",
    id
  };
};

export const editComment = id => {
  return {
    type: "EDIT_COMMENT",
    id
  };
};

export const updateComment = (id,data) => {
  return {
    type: "UPDATE_COMMENT",
    id,
    data
  };
};
