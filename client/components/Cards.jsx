import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://www.earlham.ac.uk/sites/default/files/images/articles/Public%20engagement%20science%20communications%20waste%20of%20time/public-engagement-science-comms-hero.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum, lectus ac convallis aliquam, elit justo iaculis diam, vitae blandit orci erat nec lorem. Praesent viverra, lorem non elementum egestas, elit dolor rhoncus leo, at semper magna ipsum id velit."
              label="Math"
              path="/signup"
            />
            <CardItem
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Scientific_Universe.png/1200px-The_Scientific_Universe.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum, lectus ac convallis aliquam, elit justo iaculis diam, vitae blandit orci erat nec lorem. Praesent viverra, lorem non elementum egestas, elit dolor rhoncus leo, at semper magna ipsum id velit."
              label="Science"
              path="/signup"
            />

            <CardItem
              src="https://www.economist.com/sites/default/files/20190720_BRD000.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum, lectus ac convallis aliquam, elit justo iaculis diam, vitae blandit orci erat nec lorem. Praesent viverra, lorem non elementum egestas, elit dolor rhoncus leo, at semper magna ipsum id velit."
              label="History"
              path="/signup"
            />
            <CardItem
              src="https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum, lectus ac convallis aliquam, elit justo iaculis diam, vitae blandit orci erat nec lorem. Praesent viverra, lorem non elementum egestas, elit dolor rhoncus leo, at semper magna ipsum id velit."
              label="English"
              path="/signup"
            />
            <CardItem
              src="https://speakt.com/wp-content/uploads/2020/04/spanish-people-singing2x.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum, lectus ac convallis aliquam, elit justo iaculis diam, vitae blandit orci erat nec lorem. Praesent viverra, lorem non elementum egestas, elit dolor rhoncus leo, at semper magna ipsum id velit."
              label="Spanish"
              path="/signup"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
