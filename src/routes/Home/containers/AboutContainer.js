import { connect } from 'react-redux';

import About from '../components/About';

const mapStateToProps = (state) => ({
  banner_src: '',
  title: 'About',
  content: `<h3>I'm a web developer focused on JavaScript-based technologies.</h3><p className=\"text-justify\">Currently I'm most interested in <span class=\"react-dark\">React</span>, <span class=\"redux\">Redux</span> and <span class=\"node\">NodeJS</span> development. Since I shifted my focus to JavaScript I'm getting more interested in functional programming principles. I'm open to opportunities where I can further develop my knowledge and experience regarding these while being a valuable asset to the company as well. I have 2 years commercial experience on LAMP stack using PHP and JavaScript.</p><h3>Skills</h3><ul><li>Javascript / ES6</li><li>React / Redux</li><li>NodeJS / Express / KoA</li><li>MongoDB / MySQL</li><li>RESTful API</li><li>Babel / Webpack /ESLint / Git</li><li>Karma / Mocha / Enzyme /Sinon / Chai</li><li>Linux / OSX / Windows</li><li>PHP</li></ul>`
});

export default connect(mapStateToProps)(About);
