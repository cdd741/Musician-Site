let deleteBtns;
let likeBtns;

function Unit(name, time) {
  this.name = name;
  this.time = time;
}

const year = new Unit("year", 31556926);
const month = new Unit("month", 2629743);
const week = new Unit("week", 604800);
const day = new Unit("day", 86400);
const hour = new Unit("hour", 3600);
const minut = new Unit("minut", 60);
const second = new Unit("second", 1);
const timeUnits = [year, month, week, day, hour, minut, second];

function getTimePassed(date) {
  // time now
  let timeNow = new Date().getTime();
  // posted time
  let timeThen = date;
  // time passed
  let timeDiff = timeNow - timeThen;
  // to seconds
  timeDiff = Math.round(timeDiff / 1000);

  // find what unit to display
  for (let i = 0; i < timeUnits.length; ++i) {
    // time divide by units
    let quotient = Math.floor(timeDiff / timeUnits[i].time);
    if (quotient) {
      let plural = "";
      if (quotient > 1) plural = "s";
      return `${quotient} ${timeUnits[i].name}${plural} ago`;
    }
  }
  return `just now`;
}

//////// create comment rendereing function ////////
// make reusable functions for creat
const liTag = newElement("li", ["comment__item"]);
const imgTag = newElement("img", [
  "comment__item--left",
  "comment__profile-pic",
]);
const contentTag = newElement("div", ["comment__item--right"]);
const titleTag = newElement("div", ["comment__comment-title"]);
const nameTag = newElement("h4", ["comment__comment-title--name"]);
const dateTag = newElement("h4", ["comment__comment-title--date"]);
const descriptionTag = newElement("p", ["comment__item--description"]);
const deleteTag = newElement("button", ["comment__like-del-btns--delete"]);
const likeTag = newElement("button", ["comment__like-del-btns--like"]);
const lowerTag = newElement("div", ["comment__like-del-btns"]);

const commentList = document.querySelector(".comment__list");

// aquire a new Comment object and insert into document
function displayComment(comment) {
  const nameBlock = nameTag(comment.name);
  const timePassed = getTimePassed(comment.timestamp);
  const dateBlock = dateTag(timePassed);
  const titleBlock = titleTag();
  const descriptionBlock = descriptionTag(comment.comment);
  const contentBlock = contentTag();
  const lowerWrap = lowerTag();
  const imgBlock = imgTag();
  const liBlock = liTag();
  const deletBtn = deleteTag("delete");
  const likeBtn = likeTag(`${comment.likes} ❤`);
  // if has likes, render heart as red
  if (comment.likes > 0) likeBtn.classList.add("comment__like-del-btns--liked");
  // assign id from comment obj to container
  liBlock.id = comment.id;

  insertBlock(titleBlock, [nameBlock, dateBlock]);
  insertBlock(lowerWrap, [deletBtn, likeBtn]);
  insertBlock(contentBlock, [titleBlock, descriptionBlock, lowerWrap]);
  insertBlock(liBlock, [imgBlock, contentBlock]);
  insertBlock(commentList, [liBlock]);
}

function newCommentList(comments) {
  // clear the comment block
  commentList.innerHTML = "";
  // render the comment block
  comments.forEach((comment) => {
    displayComment(comment);
  });
  // asign the all the like buttons with event listener
  deleteBtns = document.querySelectorAll(".comment__like-del-btns--delete");
  likeBtns = document.querySelectorAll(".comment__like-del-btns--like");
  for (let i = 0; i < deleteBtns.length; ++i) {
    deleteBtns[i].addEventListener("click", handleDelete);
    likeBtns[i].addEventListener("click", handleLike);
  }
}

//////////////// event handling ////////////////
// global variables
const form = document.querySelector(".comment__form");
const inputName = document.querySelector(".comment__form--name");
const inputDescripstion = document.querySelector(".comment__form--description");

// comment onSubmit event handling, create a new Comment object and
function handleOnSubmit(e) {
  e.preventDefault();
  // get input info and date for comment
  const name = e.target.name.value;
  const description = e.target.description.value;
  if (!name || !description) {
    alert("Please Fill All Required Field");
    return;
  }
  // reset input field
  inputName.value = "";
  inputDescripstion.value = "";
  postComments(name, description);
}

// event handler for like button
function handleLike(e) {
  e.preventDefault();
  let id = e.target.parentNode.parentNode.parentNode.id;
  likeComment(id);
}

// event handler for delete button
function handleDelete(e) {
  e.preventDefault();
  let id = e.target.parentNode.parentNode.parentNode.id;
  deleteComment(id);
}

// add event listener on form, will be trigered by clicking submit button
form.addEventListener("submit", handleOnSubmit);

// call api functions from apis.js
getComments();
