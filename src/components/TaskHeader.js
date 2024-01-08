const TaskHeader = ({ user }) => {
    return (
        <div className="task-header">
            <p id='dashboard-icon'><img src={process.env.PUBLIC_URL + '/dashboard-icons.png'} alt="Dsahboard Icon" style={{ width: '', height: '', borderRadius: '', paddingRight: '5px', marginTop: '' }} /></p>
            <h6 id='page-title'><span id='dash'>Task Information</span></h6>
            <div id="user-profile">
                <img src={process.env.PUBLIC_URL + '/profile-image.png'} alt="User Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <p>{`${user.firstName} ${user.lastName}`}</p>
                <p id='privilegeLevel'>{`${user.privilegeLevel}`}</p>
            </div>
        </div>
    );
}

export default TaskHeader;