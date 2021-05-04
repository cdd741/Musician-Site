// shows object constructor
function Show(date, venue, location) {
  this.date = date;
  this.venue = venue;
  this.location = location;
}

const showList = document.querySelector(".shows__list");

const showTag = newElement("div", ["shows__show"]);
const wrapper = newElement("div", ["shows__wrapper"]);
const labelTag = newElement("li", ["shows__label"]);
const dateTag = newElement("h4", ["shows__date"]);
const venueTag = newElement("h4", ["shows__venue"]);
const locationTag = newElement("h4", ["shows__location"]);
const buyTag = newElement("button", ["shows__buy-Button"]);

// render a show into HTML
function newShow(show) {
  // date block
  const dateLabel = labelTag("DATE");
  dateLabel.classList.add("show__label--date");
  const dateBlock = dateTag(show.date);
  const dateWrapper = wrapper();
  insertBlock(dateWrapper, [dateLabel, dateBlock]);

  // venue block
  const venueLabel = labelTag("VENUE");
  venueLabel.classList.add("show__label--venue");
  const venueBlock = venueTag(show.place);
  const venueWrapper = wrapper();
  insertBlock(venueWrapper, [venueLabel, venueBlock]);

  // location block
  const locationLabel = labelTag("LOCATION");
  locationLabel.classList.add("show__label--location");
  const locationBlock = locationTag(show.location);
  const locationWrapper = wrapper();
  insertBlock(locationWrapper, [locationLabel, locationBlock]);

  // buy button
  const buyBtn = buyTag("BUY TICKETS");

  // combine all together
  const showBlock = showTag();
  insertBlock(showBlock, [dateWrapper, venueWrapper, locationWrapper, buyBtn]);
  insertBlock(showList, [showBlock]);
}

// loop through a list of show object and render them
function displayShows(shows) {
  for (let i = 0; i < shows.length; ++i) {
    newShow(shows[i]);
  }
}

// call api function GET Request from apis.js
getShows();
