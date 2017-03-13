import { connect } from 'react-redux'

import Links from '../components/Links'
import { getLinksContent } from '../modules/content'

const mapStateToProps = state => ({
  links: getLinksContent(state)
})

export default connect(mapStateToProps)(Links)
