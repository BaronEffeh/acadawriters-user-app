import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './FormStyles.css';

const StatementOfPurpose = ({ user }) => {
    const history = useHistory();

    const [personalData, setPersonalData] = useState({
        fullName: '',
        resume: null,
    });

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setPersonalData({
    //         ...personalData,
    //         resume: file,
    //     })
    // }

    const [academicQualifications, setAcademicQualifications] = useState([
        {
            institution: '',
            fieldOfStudy: '',
            qualification: '',
            yearOfGraduation: '',
        },
    ]);

    const [workExperiences, setWorkExperiences] = useState([
        {
            currentPosition: '',
            companyName: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            responsibilities: '',
        },
    ]);

    const [otherInfo, setOtherInfo] = useState({
        financialSupport: '',
        homeTies: '',
        futureProspect: '',
    });

    const handleAcademicQualificationChange = (index, field, value) => {
        const newAcademicQualifications = [...academicQualifications];
        newAcademicQualifications[index][field] = value;
        setAcademicQualifications(newAcademicQualifications);
    };

    const handleAddAcademicQualification = () => {
        setAcademicQualifications([...academicQualifications, { institution: '', fieldOfStudy: '', qualification: '', yearOfGraduation: '' }]);
    };

    const handleWorkExperienceChange = (index, field, value) => {
        const newWorkExperiences = [...workExperiences];
        newWorkExperiences[index][field] = value;
        setWorkExperiences(newWorkExperiences);
    };

    const handleCheckboxChange = (index) => {
        const newWorkExperiences = [...workExperiences];
        newWorkExperiences[index].currentlyWorking = !newWorkExperiences[index].currentlyWorking;
        setWorkExperiences(newWorkExperiences);
    };

    const handleAddWorkExperience = () => {
        setWorkExperiences([...workExperiences, { currentPosition: '', companyName: '', startDate: '', endDate: '', currentlyWorking: false, responsibilities: '' }]);
    };

    // const handleAddOtherInfo = () => {
    // };    

    const handlePreviewSummary = () => {
        // Implement the logic to navigate to the "Summary" component and pass the collected data for preview
        history.push('/summary', {
            title: "Statement Of Purpose",
            personalData,
            academicQualifications,
            workExperiences,
            otherInfo,
        });
    };

    return (
        <div className='container'>
            <p id='dashboard-icon'><img src={process.env.PUBLIC_URL + '/dashboard-icons.png'} alt="Dsahboard Icon" style={{ paddingRight: '5px', }} /></p>
            <h6 id='page-title'><span id='dash'>Task Information</span></h6>
            <div id="user-profile">
                <img src={process.env.PUBLIC_URL + '/profile-image.png'} alt="User Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <p>{`${user.firstName} ${user.lastName}`}</p>
                <p id='privilege-level'>{`${user.privilegeLevel}`}</p>
            </div>

            <div className="form-container">
                <div>
                    <h5>Section 1</h5>

                    <label>
                        Upload Resume/CV (if available)
                        <input type="file" onChange={(e) => setPersonalData({ ...personalData, resume: e.target.files[0] })} style={{ display: 'none', }} />
                        <img src={process.env.PUBLIC_URL + '/upload-btn.png'} alt="Upload Icon" style={{ paddingLeft: '20px', cursor: 'pointer' }} />
                    </label> <br /> <br />
                    <label>
                        Full Name: <br />
                        <input type="text" value={personalData.fullName} onChange={(e) => setPersonalData({ ...personalData, fullName: e.target.value })} />
                    </label>
                    <br />
                </div>

                {/* Section 2: Academic Qualifications */}
                <div>
                    <h2>Academic Qualifications(s)</h2>
                    {academicQualifications.map((qualification, index) => (
                        <div key={index}>
                            <label>
                                Institution:
                                <input type="text" value={qualification.institution} onChange={(e) => handleAcademicQualificationChange(index, 'institution', e.target.value)} required />
                            </label>
                            <br /><br />
                            <label>
                                Field of Study:
                                <input type="text" value={qualification.fieldOfStudy} onChange={(e) => handleAcademicQualificationChange(index, 'fieldOfStudy', e.target.value)} />
                            </label>
                            <br /><br />
                            <label>
                                Qualification:
                                <input type="text" value={qualification.qualification} onChange={(e) => handleAcademicQualificationChange(index, 'qualification', e.target.value)} />
                            </label>
                            <br /><br />
                            <label>
                                Year of Graduation:
                                <input type="text" value={qualification.yearOfGraduation} onChange={(e) => handleAcademicQualificationChange(index, 'yearOfGraduation', e.target.value)} />
                            </label>
                            <br /><br />
                        </div>
                    ))}
                    <button onClick={handleAddAcademicQualification}>Add qualification</button>
                </div>

                {/* Section 3: Work Experiences */}
                <div>
                    <h2>Work Experiences</h2>
                    {workExperiences.map((experience, index) => (
                        <div key={index}>
                            <label>
                                Current Position:
                                <input type="text" value={experience.currentPosition} onChange={(e) => handleWorkExperienceChange(index, 'currentPosition', e.target.value)} />
                            </label>
                            <br /><br />
                            <label>
                                Company Name:
                                <input type="text" value={experience.companyName} onChange={(e) => handleWorkExperienceChange(index, 'companyName', e.target.value)} />
                            </label>
                            <br /><br />
                            <label>
                                Start Date:
                                <input type="date" value={experience.startDate} onChange={(e) => handleWorkExperienceChange(index, 'startDate', e.target.value)} />
                            </label>
                            <br /> <br />
                            <label>
                                End Date:
                                <input type="date" value={experience.endDate} onChange={(e) => handleWorkExperienceChange(index, 'endDate', e.target.value)} disabled={experience.currentlyWorking} />
                            </label><br />
                            <label style={{ marginLeft: '50%' }}> I currently work here
                                <input type="checkbox" checked={experience.currentlyWorking} onChange={() => handleCheckboxChange(index)} style={{ height: '14px', width: '14px', cursor: 'pointer' }} />
                            </label>
                            <br /><br />
                            <label>
                                Responsibilities:
                                <textarea value={experience.responsibilities} onChange={(e) => handleWorkExperienceChange(index, 'responsibilities', e.target.value)} />
                            </label>
                            <br />
                        </div>
                    ))}
                    <button onClick={handleAddWorkExperience}>Add Work Experience</button>
                </div><br /><br />

                {/* Section 4: Other Info */}
                <div>
                    {/* <h2>Other Info</h2> */}
                    <label>
                        Financial Support/Funds Available:
                        <textarea value={otherInfo.financialSupport} onChange={(e) => setOtherInfo({ ...otherInfo, financialSupport: e.target.value })} />
                    </label>
                    <br /><br />
                    <label>
                        Home Ties:
                        <textarea value={otherInfo.homeTies} onChange={(e) => setOtherInfo({ ...otherInfo, homeTies: e.target.value })} />
                    </label>
                    <br /><br />
                    <label>
                        Future Prospect:
                        <textarea value={otherInfo.futureProspect} onChange={(e) => setOtherInfo({ ...otherInfo, futureProspect: e.target.value })} />
                    </label>
                </div>

                {/* Preview Summary Button */}
                <button onClick={handlePreviewSummary}>Preview Summary</button>
            </div>
        </div>
    );
};

export default StatementOfPurpose;
