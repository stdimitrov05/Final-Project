import React from "react";

const About = () => {
  return (
    <div className="background-about">
      <div className="container">
        <div className="py-4">
        <br></br><br></br>
          <h1 className="text-about">About the application Purpose:</h1>
          <h3 className="text-about">
          <br></br>
            The purpose of this mobile application is to record students or
            students from different schools who have participated in
            competitions. Why? Imagine that a student participates in a
            programming competition for a while and the student in question
            receives a diploma and a medal. After a long time it will be very
            difficult to remember which race this award is from. Well that's the
            goal.<br></br><br></br> <h2>How it works :</h2>
            №1 Click the "add student" button and start entering the data.<br></br> №2
            Then his email with the name of the school appears on the home page.
            <br></br> №3 In the "action" column we have 3 buttons, one of which is
            "Vision" when pressed it will show you all the information about the
            student; the second "edit" button is for editing the information,
            the last is for deleting the student.
          </h3>
          
        </div>
        
        <h2 className="info-container">Owner: St_d05</h2>
      </div>
    </div>
  );
};

export default About;
