import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <h1>About Us</h1>
      <p>
        CodeSquad Comics is a collection of graphic novels read by Aya Yamamoto.
        Copyrighted images are used for review purposes only. Meta information
        about this collection can be found below. A detailed list of all the
        graphic novels in this collection can be found on the homepage.
        Additional details about each comic book, including the author, genre,
        number of pages, and a brief synopsis, can be found by navigating to the
        homepage and clicking the image of the book cover or the Details link
        for the desired graphic novel.
      </p>
      <ul class="collection-list">
        <li class="about-collection">total comic books: 12</li>
        <li class="about-collection">latest additions: 12</li>
        <li class="about-collection">5-star ratings: 5</li>
        <li class="about-collection">publishers: 9</li>
      </ul>
    </React.Fragment>
  );
};

export default About;
