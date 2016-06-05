import React, { PropTypes } from 'react';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';

class ComposterForm extends React.Component {
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
      <div id="composter-questionnaire">
        <Checkboxes
          ref="refuse"
          label="What kind of waste are you accepting in your compost? (select all that apply)"
          choices={[
            "Kitchen scraps",
            "Coffee grounds",
            "Paper napkins/compostable plates/cutlery",
            "Garden Waste",
            "Wood Chips (seasonal)",
            "Leaves (seasonal)"]} />
        <Checkboxes
          ref="logistic"
          label="How do you prefer to get organic waste from residents?"
          choices={[
            "Pick up at their residence",
            "Have them drop it off at designated site"]} />
        <RadioButtons
          type="standard"
          ref="volunteer"
          label="Would you need volunteers from your resident supporters to help you with compost turnings and other maintenance, if needed?"
          choices={["Yes", "No"]} />
        <Checkboxes
          ref="sell_compost"
          label="When the compost is finished, how do you want to disperse it?"
          choices={[
            "Sell it to urban farmers/community gardeners",
            "Give it away for free"]} />
          <fieldset id="cubic-yards">
            <label>
              How many cubic yards of compost (approximately) do you generate/hope to generate in 1 year?
            </label>
            <input ref="compost_size_min" type="number" />
            to
            <input ref="compost_size_max" type="number" />
          </fieldset>
        </div>
    )
  }
}

export default ComposterForm;
