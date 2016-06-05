import React, { PropTypes } from 'react';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';

class ResidentForm extends React.Component {
  constructor(props) {
    super(props);
    this.serialize = ::this.serialize;
  }
  serialize() {
    return Object.keys(this.refs).map(ref => {
      return {
        [ref]: typeof this.refs[ref].value === 'function' ? this.refs[ref].value() : this.refs[ref].value
      }
    })
  }
  render () {
    return (
      <div id="resident-questionnaire">
        <Checkboxes
          ref="refuse"
          label="What kind of waste do you generate (select all that apply)"
          choices={[
            "Kitchen scraps",
            "Coffee grounds",
            "Paper napkins/compostable plates/cutlery",
            "Garden Waste",
            "Wood Chips (seasonal)",
            "Leaves (seasonal)"]} />
        <RadioButtons
          type="standard"
          ref="logistic"
          label="How do you prefer to get rid of your waste"
          choices={[
            "Have the composter pick it up",
            "Drop it off at the compost site"]} />
        <RadioButtons
          type="standard"
          ref="volunteer"
          label="Are you willing to volunteer at the compost site, if needed, to help turning compost?"
          choices={["Yes", "No"]} />
        <RadioButtons
          type="standard"
          ref="harvest"
          label="d. Would you like to receive notifications from an urban farmer who is selling/giving away produce grown using compost generated from your waste?"
          choices={["Yes", "No"]} />
      </div>
    )
  }
}

export default ResidentForm;
