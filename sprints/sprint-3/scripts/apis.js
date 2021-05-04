// Api calls
// const apiKey = "5c7904ce-9fd9-4d9a-91be-11685db1d644";
const apikey = "?api_key=<5c7904ce-9fd9-4d9a-91be-11685db1d644>";
const url = "https://project-1-api.herokuapp.com";
const comments = "/comments";
const showdates = "/showdates";
const like = "/like";

// GET Request
function getComments() {
  axios
    .get(url + comments + apikey)
    .then((res) => {
      newCommentList(res.data);
    })
    .catch((err) => console.log(err));
}

// POST Request
function postComments(name, comment) {
  axios
    .post(url + comments + apikey, {
      name: name,
      comment: comment,
    })
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
}

// PUT like Request
function likeComment(id) {
  axios
    .put(url + comments + "/" + id + like + apikey)
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
}

// DELETE Request
function deleteComment(id) {
  axios
    .delete(url + comments + "/" + id + apikey)
    .then(() => {
      getComments();
    })
    .catch((err) => console.log(err));
}

// GET Shows Request
function getShows() {
  axios
    .get(url + showdates + apikey)
    .then((res) => {
      displayShows(res.data);
    })
    .catch((err) => console.log(err));
}
