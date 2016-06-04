import React, { PropTypes } from 'react';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';

class ComposterForm extends React.Component {
  render () {
    return (
      <div id="composter-questionnaire">
        <RadioButtons
          label="Where do you compost?"
          choices={["In my backyard", "at a community composting site`"]} />
        <RadioButtons
          label="Is your composting site large enough to accept contributions from multiple residences?"
          choices={["Yes", "No"]} />
        <RadioButtons
          label="If No, do you have the know-how and the ability to build a big enough composting site?"
          choices={["Yes", "No"]} />
        <Checkboxes
          label="How do you prefer to get organic waste from residents?"
          choices={[
            "Pick up at their residence",
            "Have them drop it off at designated site"]} />
        <Checkboxes
          label="When the compost is finished, how do you want to disperse it?"
          choices={[
            "Sell it to urban farmers/community gardeners",
            "Give it away for free"]} />
      </div>
    )
  }
}

export default ComposterForm;
