// Api calls
const apiKey = "5c7904ce-9fd9-4d9a-91be-11685db1d644";

// GET comments
function getComments() {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=<${apiKey}>`)
    .then((res) => {
      newCommentList(res.data);
    })
    .catch((err) => console.log(err));
}

// POST comment
function postComments(name, comment) {
  axios
    .post(`https://project-1-api.herokuapp.com/comments?api_key=<${apiKey}>`, {
      name: name,
      comment: comment,
    })
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
}

// PUT like comment
function likeComment(id) {
  axios
    .put(
      `https://project-1-api.herokuapp.com/comments/${id}/like?api_key=<${apiKey}>`
    )
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
}

// DELETE comment
function deleteComment(id) {
  axios
    .delete(
      `https://project-1-api.herokuapp.com/comments/${id}?api_key=<${apiKey}>`
    )
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
}

// GET Shows
function getShows() {
  axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=<${apiKey}>`)
    .then((res) => {
      console.log(res);
      displayShows(res.data);
    })
    .catch((err) => console.log(err));
}
