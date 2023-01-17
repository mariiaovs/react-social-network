import { connect } from 'react-redux';
import Sidebar from './Sidebar';

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const SidebarContainer = connect(mapStateToProps) (Sidebar);

export default SidebarContainer;