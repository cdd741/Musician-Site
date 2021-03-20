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

// create a empty element and returns a function that aquire a variable to fill the content
function newElement(tag, classNames) {
  return (content = "") => {
    let element = document.createElement(tag);
    element.classList.add(...classNames);
    if (content) element.innerText = content;
    return element;
  };
}

// append children element (array of child elements) into parent element
function insertBlock(parent, children) {
  for (let i = 0; i < children.length; ++i) {
    parent.appendChild(children[i]);
  }
}

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

// aquire a new Comment object and insert into document
function newComment(comment) {
  let nameBlock = nameTag(comment.name);
  let dateBlock = dateTag(comment.date);
  let titleBlock = titleTag();
  insertBlock(titleBlock, [nameBlock, dateBlock]);

  let descriptionBlock = descriptionTag(comment.description);
  let contentBlock = contentTag();
  insertBlock(contentBlock, [titleBlock, descriptionBlock]);

  let imgBlock = imgTag();
  imgBlock.src = comment.img;
  let liBlock = liTag();
  insertBlock(liBlock, [imgBlock, contentBlock]);

  let commentList = document.querySelector(".comment__list");
  insertBlock(commentList, [liBlock]);
}

//////////////// event handling ////////////////
// global variables
const form = document.querySelector(".comment__form");
const nameField = document.querySelector(".comment__form--name");
const descriptionField = document.querySelector(".comment__form--description");

// comment onSubmit event handling, create a new Comment object and
function handleOnSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const description = e.target.description.value;
  const date = getDate();
  console.log(typeof description);
  const img = "./assets/Images/Mohan-muruge.jpg";
  const comment = new Comment(name, date, description, img);
  newComment(comment);
}

// add event listener on form, will be trigered by clicking submit button
form.addEventListener("submit", handleOnSubmit);

// mocking
// create mockup data for comments
function addMockdata() {
  // comment one
  const name1 = "Theodore Duncan";
  const date1 = "11/15/2018";
  const description1 =
    "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!";
  const img1 =
    "https://emoji.slack-edge.com/T01N11LCR55/surprised-jon/016aed46b077ef79.png";
  const comment1 = new Comment(name1, date1, description1, img1);

  // comment two
  const name2 = "Gary Wong";
  const date2 = "12/12/2018";
  const description2 =
    "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!";
  const img2 =
    "https://emoji.slack-edge.com/T01N11LCR55/nuge-thumbs-up/af2d083ed763c373.jpg";
  const comment2 = new Comment(name2, date2, description2, img2);

  // comment three
  const name3 = "Micheal Lyons";
  const date3 = "12/18/2018";
  const description3 =
    "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
  const img3 =
    "https://emoji.slack-edge.com/T01N11LCR55/nuge-amazed/27e213d16cb2560d.jpg";
  const comment3 = new Comment(name3, date3, description3, img3);

  // create array for stroing comment objects
  const comments = [comment1, comment2, comment3];

  // render mockup comments into html
  for (let i = 0; i < comments.length; ++i) {
    newComment(comments[i]);
  }
}

// execut mocking function
addMockdata();
