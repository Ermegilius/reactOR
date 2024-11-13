'use strict'

const clickToggler = (toggleFunc, currentState) => {
  toggleFunc(!currentState);
};

const setTeamLead = (isTeamLead, setIsTeamLead)=>{
  clickToggler(setIsTeamLead, isTeamLead);
}

const setFormEditing = (isFormEditing, setIsFormEditing)=>{
  clickToggler(setIsFormEditing, isFormEditing);
}

export {setTeamLead, setFormEditing}