import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LetterOfExplanation = () => {
    const history = useHistory();

    const [personalData, setPersonalData] = useState({
        fullName: '',
        resume: null,
    });

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
            title: "Letter Of Explanation",
            personalData,
            academicQualifications,
            workExperiences,
            otherInfo,
        });
    };

    return (
        <div>
            <h1>Letter of Explanation</h1>

            {/* Section 1: Personal Data */}
            <div>
                <h2>Section 1: Personal Data</h2>
                <label>
                    Full Name:
                    <input type="text" value={personalData.fullName} onChange={(e) => setPersonalData({ ...personalData, fullName: e.target.value })} />
                </label>
                <br />
                <label>
                    Resume/CV:
                    <input type="file" onChange={(e) => setPersonalData({ ...personalData, resume: e.target.files[0] })} />
                </label>
            </div>

            {/* Section 2: Academic Qualifications */}
            <div>
                <h2>Section 2: Academic Qualifications</h2>
                {academicQualifications.map((qualification, index) => (
                    <div key={index}>
                        <label>
                            Institution:
                            <input type="text" value={qualification.institution} onChange={(e) => handleAcademicQualificationChange(index, 'institution', e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Field of Study:
                            <input type="text" value={qualification.fieldOfStudy} onChange={(e) => handleAcademicQualificationChange(index, 'fieldOfStudy', e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Qualification:
                            <input type="text" value={qualification.qualification} onChange={(e) => handleAcademicQualificationChange(index, 'qualification', e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Year of Graduation:
                            <input type="text" value={qualification.yearOfGraduation} onChange={(e) => handleAcademicQualificationChange(index, 'yearOfGraduation', e.target.value)} />
                        </label>
                        <br />
                    </div>
                ))}
                <button onClick={handleAddAcademicQualification}>Add Academic Qualification</button>
            </div>

            {/* Section 3: Work Experiences */}
            <div>
                <h2>Section 3: Work Experiences</h2>
                {workExperiences.map((experience, index) => (
                    <div key={index}>
                        <label>
                            Current Position:
                            <input type="text" value={experience.currentPosition} onChange={(e) => handleWorkExperienceChange(index, 'currentPosition', e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Company Name:
                            <input type="text" value={experience.companyName} onChange={(e) => handleWorkExperienceChange(index, 'companyName', e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Start Date:
                            <input type="date" value={experience.startDate} onChange={(e) => handleWorkExperienceChange(index, 'startDate', e.target.value)} />
                        </label>
                        {/* <br /> */}
                        <label>
                            End Date:
                            <input type="date" value={experience.endDate} onChange={(e) => handleWorkExperienceChange(index, 'endDate', e.target.value)} disabled={experience.currentlyWorking} />
                        </label>
                        <input type="checkbox" checked={experience.currentlyWorking} onChange={() => handleCheckboxChange(index)} />
                        <label> I currently work here</label>
                        <br />
                        <label>
                            Responsibilities:
                            <textarea value={experience.responsibilities} onChange={(e) => handleWorkExperienceChange(index, 'responsibilities', e.target.value)} />
                        </label>
                        <br />
                    </div>
                ))}
                <button onClick={handleAddWorkExperience}>Add Work Experience</button>
            </div>

            {/* Section 4: Other Info */}
            <div>
                <h2>Section 4: Other Info</h2>
                <label>
                    Financial Support/Funds Available:
                    <textarea value={otherInfo.financialSupport} onChange={(e) => setOtherInfo({ ...otherInfo, financialSupport: e.target.value })} />
                </label>
                <br />
                <label>
                    Home Ties:
                    <textarea value={otherInfo.homeTies} onChange={(e) => setOtherInfo({ ...otherInfo, homeTies: e.target.value })} />
                </label>
                <br />
                <label>
                    Future Prospect:
                    <textarea value={otherInfo.futureProspect} onChange={(e) => setOtherInfo({ ...otherInfo, futureProspect: e.target.value })} />
                </label>
            </div>

            {/* Preview Summary Button */}
            <button onClick={handlePreviewSummary}>Preview Summary</button>
        </div>
    );
};

export default LetterOfExplanation;
