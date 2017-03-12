import { connect } from 'react-redux';

import About from '../components/About';
import { getAboutContent } from '../modules/content';

export default connect(getAboutContent)(About);
