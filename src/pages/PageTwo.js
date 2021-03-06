import { connect } from 'react-redux'
import { fetchAuthorRequest } from 'stores/author/actions'
import { getAuthor } from 'stores/author/reducer'
import Page from 'components/Page'

const mapStateToProps = (state) => ({
  author: getAuthor(state),
  heading: 'page two'
})

export default {
  Component: connect(mapStateToProps, { fetchAuthorRequest })(Page)
}
