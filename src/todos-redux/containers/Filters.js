import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { updateFilter } from '../actions'

const mapStateToProps = ({todoApp}) => ({
  filters: todoApp.filters
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (name, status) => dispatch(updateFilter(name, status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

