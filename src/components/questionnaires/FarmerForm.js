import React, { PropTypes } from 'react';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';

class FarmerForm extends React.Component {
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
      <div id="farmer-questionnaire">
        <RadioButtons
          ref="sell_compost"
          label="Are you willing to pay for sustainably created compost ?"
          choices={[
            "Yes",
            "No"]} />
        <fieldset id="cubic-yards">
          <label>
            How many cubic yards of compost (approximately) do you generate/hope to generate in 1 year?
          </label>
          <input ref="compost_size_min" type="number" />
          to
          <input ref="compost_size_max" type="number" />
        </fieldset>
        <RadioButtons
          ref="harvest"
          label="When you harvest, what are you looking to do with your produce?"
          choices={[
            "Sell it in an online marketplace at a small scale",
            "Use it myself/give the rest away",
            "Sell it to a local business/restaurant"]} />
        </div>
    )
  }
}

export default FarmerForm;
