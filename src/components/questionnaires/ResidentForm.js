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
        [ref]: this.refs[ref].value()
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
          ref="logistic"
          label="How do you prefer to get rid of your waste"
          choices={[
            "Have the composter pick it up",
            "Drop it off at the compost site"]} />
        <RadioButtons
          ref="volunteer"
          label="Are you willing to volunteer at the compost site, if needed, to help turning compost?"
          choices={["Yes", "No"]} />
      </div>
    )
  }
}

export default ResidentForm;
