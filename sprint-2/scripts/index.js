// create Comment object model using constructor function
function Comment(name, date, description) {
  this.name = name;
  this.date = date;
  this.description = description;
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
  let element = document.createElement(tag);

  for (let i = 0; i < classNames.length; ++i) {
    element.classList.add(classNames[i]);
  }

  return (content = "") => {
    if (content) element.innerText = content;
    return element;
  };
}

// append children element (array of child elements) into parent element
function insertBlock(parent, children) {
  console.log[children[0]];
  for (let i = 0; i < children.length; ++i) {
    parent.appendChild(children[i]);
  }
}

// aquire a new Comment object and insert into document
function newComment(comment) {
  const liTag = newElement("li", ["comment__item"]);
  const imgTag = newElement("img", ["comment__item--left"]);
  const contentTag = newElement("div", ["comment__item--right"]);
  const titleTag = newElement("div", ["comment__item--title"]);
  const nameTag = newElement("h4", ["comment__item--name"]);
  const dateTag = newElement("h4", ["comment__item--date"]);
  const descriptionTag = newElement("p", ["comment__item--description"]);

  let nameBlock = nameTag(comment.name);
  let dateBlock = dateTag(comment.date);
  let titleBlock = titleTag();
  insertBlock(titleBlock, [nameBlock, dateBlock]);

  let descriptionBlock = descriptionTag(comment.description);
  let contentBlock = contentTag();
  insertBlock(contentBlock, [titleBlock, descriptionBlock]);

  let imgBlock = imgTag();
  let liBlock = liTag();
  insertBlock(liBlock, [imgBlock, contentBlock]);

  let commentList = document.querySelector(".comment__list");
  insertBlock(commentList, [liBlock]);
}

//////////////// event handling ////////////////
// global variables
const form = document.querySelector(".comment__form");
const nameField = document.querySelector(".comment__input--name");
const descriptionField = document.querySelector(".comment__input--description");

// comment onSubmit event handling, create a new Comment object and
function handleOnSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const description = e.target.description.value;
  const date = getDate();
  const comment = new Comment(name, date, description);
  newComment(comment);
}
// add event listener on form, will be trigered by clicking submit button
form.addEventListener("submit", handleOnSubmit);

// mocking
// create mockup data for comments
function addMockdata() {
  // comment one
  const name1 = "Theodore Duncan";
  const date1 = getDate();
  const description1 =
    "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
  const comment1 = new Comment(name1, date1, description1);

  // comment two
  const name2 = "Gary Wong";
  const date2 = getDate();
  const description2 =
    "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!";
  const comment2 = new Comment(name2, date2, description2);

  // comment three
  const name3 = "Micheal Lyons";
  const date3 = getDate();
  const description3 =
    "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.";
  const comment3 = new Comment(name3, date3, description3);

  // create array for stroing comment objects
  const comments = [comment1, comment2, comment3];

  // render mockup comments into html
  for (let i = 0; i < comments.length; ++i) {
    newComment(comments[i]);
  }
}

// execut mocking function
addMockdata();
