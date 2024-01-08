import './App.css';
import Dashboard from './components/Dashboard';
import LetterOfExplanation from './components/LetterOfExplanation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import StatementOfPurpose from './components/StatementOfPurpose';
import ApplicationEssay from './components/ApplicationEssay';
import UkCanadianStyledResume from './components/UkCanadianStyledResume';
import Summary from './components/Summary';
import PasswordReset from './components/ResetPassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Error404 from './components/Error404';
import React, { useState } from 'react';

function App() {
  const [user] = useState({
    firstName: 'Ike', // Replace with actual user data
    lastName: 'Chukwu',
    profileImage: 'path/to/profile-image.jpg',
    privilegeLevel: 'ADMIN'
  });

  return (
    <Router>
      <div className="App">
        {/* <h1>AcadaWriters User Application</h1> */}
        <SideBar />
        <div className="content">
          <Switch>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/reset-password">
              <PasswordReset />
            </Route>
            <Route path="/dashboard">
              <Dashboard user={user} />
            </Route>
            <Route path="/letter-of-explanation">
              <LetterOfExplanation user={user} />
            </Route>
            <Route path="/statement-of-purpose">
              <StatementOfPurpose user={user} />
            </Route>
            <Route path="/application-essay">
              <ApplicationEssay user={user} />
            </Route>
            <Route path="/uk-canadian-styled-resume">
              <UkCanadianStyledResume user={user} />
            </Route>
            <Route path="/summary" component={Summary} />
            {/* <Route path="/summary">
              <Summary />
            </Route> */}
            <Route path="/*">
              <Error404 />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
