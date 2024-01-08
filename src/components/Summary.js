import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Summary = ({ location }) => {
    const {
        title,
        personalData,
        academicQualifications,
        workExperiences,
        otherInfo,
    } = location.state;

    const history = useHistory();

    const handleMakePayment = () => {
        history.push('/payment');
    }

    return (
        <div>
            <h1>Summary</h1>

            <h2>${title}</h2>

            <h2>Section 1: Personal Data</h2>
            <p>Full Name: <b>{personalData.fullName}</b></p>
            {/* Display other personal data as needed */}

            <h2>Section 2: Academic Qualifications</h2>
            {academicQualifications.map((qualification, index) => (
                <div key={index}>
                    <p>Institution: <b>{qualification.institution}</b></p>
                    <p>Field of Study: <b>{qualification.fieldOfStudy}</b></p>
                    <p>Qualification: <b>{qualification.qualification}</b></p>
                    <p>Year of Graduation: <b>{qualification.yearOfGraduation}</b></p>
                </div>
            ))}

            <h2>Section 3: Work Experiences</h2>
            {workExperiences.map((experience, index) => (
                <div key={index}>
                    <p>Current Position: <b>{experience.currentPosition}</b></p>
                    <p>Company Name: <b>{experience.companyName}</b></p>
                    <p>Start Dtae: <b>{experience.startDate}</b></p>
                    <p>End Date: <b>{experience.endDate}</b></p>
                    <p>Currently Working: <b>{experience.currentlyWorking}</b></p>
                    <p>Responsibilities: <b>{experience.responsibilities}</b></p>
                </div>
            ))}

            <h2>Other Information</h2>
            <p>Financial Support/Funds Available: <b>{otherInfo.financialSupport}</b></p>
            <p>Home Ties: <b>{otherInfo.homeTies}</b></p>
            <p>Future Prospect: <b>{otherInfo.futureProspect}</b></p>

            <button onClick={handleMakePayment}>Make Payment</button>
        </div>
    );
};

export default Summary;
