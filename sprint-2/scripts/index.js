let comments = [];
// create Comment object model using constructor function
function Comment(name, date, description, img) {
  this.name = name;
  this.date = date;
  this.description = description;
  this.img = img;
}

// returns a formated date
function getDate() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toLocaleDateString();
}

//////// create comment rendereing function ////////

// make reusable functions for creat
const liTag = newElement("li", ["comment__item"]);
const imgTag = newElement("img", [
  "comment__item--left",
  "comment__profile-pic",
]);
const contentTag = newElement("div", ["comment__item--right"]);
const titleTag = newElement("div", ["comment__item--title"]);
const nameTag = newElement("h4", ["comment__item--name"]);
const dateTag = newElement("h4", ["comment__item--date"]);
const descriptionTag = newElement("p", ["comment__item--description"]);

const commentList = document.querySelector(".comment__list");

// aquire a new Comment object and insert into document
function displayComment(comment) {
  const nameBlock = nameTag(comment.name);
  const dateBlock = dateTag(comment.date);
  const titleBlock = titleTag();
  insertBlock(titleBlock, [nameBlock, dateBlock]);

  const descriptionBlock = descriptionTag(comment.description);
  const contentBlock = contentTag();
  insertBlock(contentBlock, [titleBlock, descriptionBlock]);

  const imgBlock = imgTag();
  imgBlock.src = comment.img;
  const liBlock = liTag();
  insertBlock(liBlock, [imgBlock, contentBlock]);

  insertBlock(commentList, [liBlock]);
}

function newCommentList(commentList) {
  commentList.forEach((comment) => {
    displayComment(comment);
  });
}

//////////////// event handling ////////////////
// global variables
const form = document.querySelector(".comment__form");
const nameField = document.querySelector(".comment__form--name");
const descriptionField = document.querySelector(".comment__form--description");

// comment onSubmit event handling, create a new Comment object and
function handleOnSubmit(e) {
  e.preventDefault();

  // get input info and date for comment
  const name = e.target.name.value;
  const description = e.target.description.value;
  const date = getDate();
  const img = "./assets/Images/Mohan-muruge.jpg";

  // reset input field
  const inputName = document.querySelector(".comment__form--name");
  const inputDescripstion = document.querySelector(
    ".comment__form--description"
  );
  inputName.value = "";
  inputDescripstion.value = "";

  // construct comment object and create new comment block
  const comment = new Comment(name, date, description, img);
  comments.push(comment);
  commentList.innerHTML = "";
  newCommentList(comments);
}

// add event listener on form, will be trigered by clicking submit button
form.addEventListener("submit", handleOnSubmit);

// mocking
// create mockup data for comments
function addMockdata() {
  // comment one
  const name1 = "Theodore Duncan";
  // const date1 = "11/15/2018";
  let date1 = new Date("Nov 15 2018");
  date1 = date1.toLocaleDateString();
  const description1 =
    "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!";
  const img1 =
    "https://emoji.slack-edge.com/T01N11LCR55/surprised-jon/016aed46b077ef79.png";
  const comment1 = new Comment(name1, date1, description1, img1);

  // comment two
  const name2 = "Gary Wong";
  // const date2 = "12/12/2018";
  let date2 = new Date("Dec 12 2018");
  date2 = date2.toLocaleDateString();
  const description2 =
    "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!";
  const img2 =
    "https://emoji.slack-edge.com/T01N11LCR55/nuge-thumbs-up/af2d083ed763c373.jpg";
  const comment2 = new Comment(name2, date2, description2, img2);

  // comment three
  const name3 = "Micheal Lyons";
  // const date3 = "12/18/2018";
  let date3 = new Date("Dec 18 2018");
  date3 = date3.toLocaleDateString();

  const description3 =
    "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
  const img3 =
    "https://emoji.slack-edge.com/T01N11LCR55/nuge-amazed/27e213d16cb2560d.jpg";
  const comment3 = new Comment(name3, date3, description3, img3);

  // create array for stroing comment objects
  comments = [comment1, comment2, comment3];

  // render mockup comments into html
  // for (let i = 0; i < comments.length; ++i) {
  //   displayComment()(comments[i]);
  // }
  newCommentList(comments);
}

// execut mocking function
addMockdata();
