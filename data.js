window.reviews = [
  {
    name: "John Smith",
    date: "2023-03-01",
    rating: "Rating: 4",
    comment: "Great Website, simple and easy in use"
  },
  {
    name: "Jason Dre",
    date: "2023-06-14",
    rating: "Rating: 5",
    comment: "Really good work, background image is good fit for the topic"
  },
  {
    name: "Mark Svorov",
    date: "2023-01-01",
    rating: "Rating: 3",
    comment: "Not bad, but could use some improvements."
  },
  {
    name: "Sarah Lee",
    date: "2023-04-15",
    rating: "Rating: 2",
    comment: "Well, nothing special, boring website"
  },
  {
    name: "Edward Stoune",
    date: "2023-05-20",
    rating: 'Rating: 5',
    comment: "For first website its good job, keep it up"
  }
];


const container = document.querySelector('.container');

reviews.forEach(review =>{
  const card = document.createElement('div');
  card.classList.add('card');

  const name = document.createElement('h2');
  name.textContent = review.name;
  card.appendChild(name);

  const rating = document.createElement('p');
  rating.textContent = review.rating
  card.appendChild(rating);
  
  const comment = document.createElement('p');
  comment.textContent = review.comment;
  card.appendChild(comment);

  container.appendChild(card);
})


