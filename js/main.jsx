import React from "react";
import { Page } from "neal-react";
import { AlertModal } from "./alert-modal.jsx";
import { SignupModal } from "./signup-modal.jsx";
import { Header } from "./section_header.jsx";
import { About } from "./section_about.jsx";
import { Agenda } from "./section_agenda.jsx";
import { Venue } from "./section_venue.jsx";
import { Evaluation } from "./section_evaluation.jsx";
import { Questions } from "./section_questions.jsx";
import { Organiser } from "./section_organiser.jsx";
import ajax from "../helpers/ajax.js";

const onSignup = ({ members }) => {
  var url = 'https://5r69ml8kyg.execute-api.us-west-2.amazonaws.com/prod/Reackathon';
  const groupName = members[0].groupname || 'i-dont-have-team';
  const groupIdea = members[0].idea;
  members.forEach((memb) => {
    memb.groupname = groupName;
    if(groupIdea){
      memb.idea = groupIdea.replace(/\n/g, '\\\\n');
    }
    if(memb.comment){
      memb.comment = memb.comment.replace(/\n/g, '\\\\n');
    }
    ajax.get(url, memb, function() {
      $('#alert-modal').modal('show');
    });
  });
}

const onCloseAlertPopup = () => {
  window.location.href = "http://reackathon.8bitrockr.com";
}

export default (props) => {
  return (
    <Page>
      <Header />
      <About />
      <Agenda />
      <Venue />
      <Evaluation />
      <Questions />
      <Organiser />
      <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
      <AlertModal modalId="alert-modal" onSubmit={onCloseAlertPopup}/>
    </Page>
  );
};
