import { connect } from 'react-redux';

import Links from '../components/Links';

const mapStateToProps = () => ({
  links: [
    {
      'id': 1,
      'url': 'https://medium.com/@_ericelliott',
      'title': 'Eric Elliott\'s Blog',
      'description': 'Is the primary source which pitched functional programming to me. Helped me a great deal to understand the true nature of JavaScript'
    },
    {
      'id': 2,
      'url': 'http://shop.oreilly.com/product/0636920033141.do',
      'title': 'Programming JavaScript Applications by Eric Elliott',
      'description': 'Proper JavaScript book to gain a better understanding of creating web applictions using functional programming principles'
    },
    {
      'id': 3,
      'url': 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q',
      'title': 'Mattias Petter Johansson aka MPJ\'s youtube channel',
      'description': 'MPJ has a really cool style of explaining functional programming.'
    },
    {
      'id': 4,
      'url': 'https://facebook.github.io/react/',
      'title': 'React Official documentation',
      'description': 'Great docs to understand the working of React and the adventages of unidirectional data flow'
    },
    {
      'id': 5,
      'url': 'http://redux.js.org/',
      'title': 'Redux Official documentation',
      'description': 'Great docs to understand the working of Redux and the adventages of a reducer based data store'
    },
    {
      'id': 6,
      'url': 'https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
      'title': 'Martin Flower\'s Clean Code book',
      'description': 'The fundamental of proper clean coding standards.'
    }
  ]
});

export default connect(mapStateToProps)(Links);
