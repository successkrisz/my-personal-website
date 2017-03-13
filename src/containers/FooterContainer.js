import { connect } from 'react-redux'

import Footer from 'components/Footer'
import { getFooterContent } from 'routes/Home/modules/content'

export default connect(getFooterContent)(Footer)
