function Show(date, venue, location) {
  this.date = date;
  this.venue = venue;
  this.location = location;
}

const showList = document.querySelector(".shows");

const showTag = newElement("div", ["show"]);
const wrapper = newElement("div", ["wrapper"]);
const labelTag = newElement("li", ["label"]);
const dateTag = newElement("h4", ["date"]);
const venueTag = newElement("h4", ["venue"]);
const locationTag = newElement("h4", ["location"]);
const buyTag = newElement("button", ["but-tickets"]);

function newShow(show) {
  const dateLabel = labelTag("DATE");
  const dateBlock = dateTag(show.date);
  const dateWrapper = wrapper();
  insertBlock(dateWrapper, [dateLabel, dateBlock]);

  const venueLabel = labelTag("VENUE");
  const venueBlock = venueTag(show.venue);
  const venueWrapper = wrapper();
  insertBlock(venueWrapper, [venueLabel, venueBlock]);

  const locationLabel = labelTag("LOCATION");
  const locationBlock = locationTag(show.location);
  const locationWrapper = wrapper();
  insertBlock(locationWrapper, [locationLabel, locationBlock]);

  const buyBtn = buyTag("BUY TICKETS");

  const showBlock = showTag();
  insertBlock(showBlock, [dateWrapper, venueWrapper, locationWrapper, buyBtn]);
  insertBlock(showList, [showBlock]);
}

function mockupData() {
  const date1 = "Mon Dec 17 2018";
  const date2 = "Tue Jul 18 2019";
  const date3 = "Fri Jul 22 2019";
  const date4 = "Sat Aug 12 2019";
  const date5 = "Fri Sep 05 2019";
  const date6 = "Wed Aug 11 2019";
  const dates = [date1, date2, date3, date4, date5, date6];

  const venue1 = "Ronald Lane";
  const venue2 = "Pier 3 East";
  const venue3 = "View Loungue";
  const venue4 = "Hyatt Agency";
  const venue5 = "Moscow Center";
  const venue6 = "Pres Club";
  const venues = [venue1, venue2, venue3, venue4, venue5, venue6];

  const location1 = "San Fancisco, CA";
  const location2 = "San Fancisco, CA";
  const location3 = "San Fancisco, CA";
  const location4 = "San Fancisco, CA";
  const location5 = "San Fancisco, CA";
  const location6 = "San Fancisco, CA";
  const locations = [
    location1,
    location2,
    location3,
    location4,
    location5,
    location6,
  ];

  for (let i = 0; i < dates.length; ++i) {
    const show = new Show(dates[i], venues[i], locations[i]);
    newShow(show);
  }
}

mockupData();
