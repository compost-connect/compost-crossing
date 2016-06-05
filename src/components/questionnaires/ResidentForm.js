import React, { PropTypes } from 'react';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';

class ResidentForm extends React.Component {
  render () {
    return (
      <div id="resident-questionnaire">
        <RadioButtons
          label="Do you live in an apartment or house?"
          choices={["House", "Apartments"]} />
        <RadioButtons
          label="Do you you have a container to collect compostable material in?"
          choices={["Yes", "No"]} />
        <Checkboxes
          label="What kind of waste do you generate (select all that apply)"
          choices={["Kitchen scraps",
          "Coffee grounds",
          "Paper napkins/compostable plates/cutlery",
          "Garden Waste",
          "Wood Chips (seasonal)",
          "Leaves (seasonal)"]} />
      <RadioButtons
        label="How do you prefer to get rid of your waste"
        choices={["Have the composter pick it up", "Drop it off at the compost site"]}/>
      <RadioButtons
        label="Are you willing to volunteer at the compost site, if needed, to help turning compost?"
        choices={["Yes", "No"]} />
      <RadioButtons
        label="Would you like to receive notifications from the composter when finished compost is available?"
        choices={["Yes", "No"]} />
    </div>
    )
  }
}

export default ResidentForm;
