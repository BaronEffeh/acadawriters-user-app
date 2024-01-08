import React, { useState } from 'react';
import "./Dashboard.css";

const Dashboard = ({ user }) => {


    // Sample task data for demonstration
    const taskList = [
        { id: 1, category: 'LDE', amount: 2854, startDate: '2023-01-01', deadline: '2023-01-10', paymentStatus: 'Paid', taskStatus: 'Completed' },
        { id: 2, category: 'LDE', amount: 2854, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Pending', taskStatus: 'Pending' },
        { id: 3, category: 'SOP', amount: 3500, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Pending', taskStatus: 'Completed' },
        { id: 4, category: 'SOP', amount: 3500, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Paid', taskStatus: 'Completed' },
        { id: 5, category: 'AE', amount: 4000, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Failed', taskStatus: 'Completed' },
        { id: 6, category: 'AE', amount: 4000, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Pending', taskStatus: 'Pending' },
        { id: 7, category: 'UKSR', amount: 2000, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Paid', taskStatus: 'Completed' },
        { id: 8, category: 'UKSR', amount: 2000, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Failed', taskStatus: 'Completed' },
        { id: 9, category: 'CSR', amount: 2150, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Pending', taskStatus: 'Pending' },
        { id: 10, category: 'CSR', amount: 2150, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Paid', taskStatus: 'Completed' },
        { id: 11, category: 'LDE', amount: 2854, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Failed', taskStatus: 'Pending' },
        { id: 12, category: 'SOP', amount: 150, startDate: '2023-02-01', deadline: '2023-02-10', paymentStatus: 'Pending', taskStatus: 'Pending' },
        // Add more task data as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 9; // Number of tasks to display per page

    // Filter tasks based on search term
    const filteredTasks = taskList.filter(task =>
        task.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.taskStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.startDate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the total number of completed and pending tasks
    const completedTasks = taskList.filter(task => task.taskStatus === 'Completed').length;
    const pendingTasks = taskList.filter(task => task.taskStatus === 'Pending').length;

    // Pagination
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <p id='dashboard-icon'><img src={process.env.PUBLIC_URL + '/dashboard-icons.png'} alt="Dsahboard Icon" style={{ width: '', height: '', borderRadius: '', paddingRight: '5px', marginTop: '' }} /></p>
            <h6 id='page-title'><span id='dash'>Dashboard</span></h6>
            <div id='user-profile'>
                {/* <p>Welcome, {user.name}</p> */}
                {/* Assuming `user.profileImage` is the URL of the user's profile image */}
                {/* {user.profileImage && <img src={user.profileImage} alt="Profile" style={{ width: '50px', height: '50px' }} />} */}

                <img src={process.env.PUBLIC_URL + '/profile-image.png'} alt="User Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <p>{`${user.firstName} ${user.lastName}`}</p>
                <p id='privilege-level'>{`${user.privilegeLevel}`}</p>
            </div>

            <div id='dashboard-summary'>
                <p><img src={process.env.PUBLIC_URL + '/task.png'} alt="Task Completed" style={{ width: '', height: '', borderRadius: '', textAlign: 'left' }} /> Tasks Completed: <br />{completedTasks}</p>
                <p><img src={process.env.PUBLIC_URL + '/task.png'} alt="Task Completed" style={{ width: '', height: '', borderRadius: '', textAlign: 'left' }} />Tasks Pending <br /> {pendingTasks}</p>
                <button onClick={() => console.log('Start Task')}>Start Task</button>
            </div>

            <div id='search-bar'>
                <p>Recent Tasks</p>
                <input
                    type="text"
                    placeholder="Search tasks"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>CATEGORY</th>
                        <th>AMOUNT</th>
                        <th>START DATE</th>
                        <th>DEADLINE</th>
                        <th>PAYMENT STATUS</th>
                        <th>TASK STATUS</th>
                        <th>DOWNLOAD</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.category}</td>
                            <td>{task.amount}</td>
                            <td>{task.startDate}</td>
                            <td>{task.deadline}</td>
                            <td><span style={{ backgroundColor: '#BB371A17', borderRadius: '25px', padding: '12px', color: '#BB371A' }}> {task.paymentStatus}</span></td>
                            <td><span style={{ backgroundColor: '#1EAE9817', borderRadius: '25px', padding: '12px', color: '#1EAE98' }}>{task.taskStatus}</span></td>
                            <td>
                                <button onClick={() => console.log('Download Task', task.id)} style={{ border: 'none', background: 'transparent' }}><img src={process.env.PUBLIC_URL + '/download-btn.png'} alt="Download Button" style={{ width: '20px', height: '20px', border: 'none' }} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    &lt; Previous
                </button>
                {Array.from({ length: Math.ceil(filteredTasks.length / tasksPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredTasks.length / tasksPerPage)}>
                    Next &gt;
                </button>
            </div>
        </div>

    );
};

export default Dashboard;
