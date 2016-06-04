import React, { PropTypes } from 'react';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';

class FarmerForm extends React.Component {
  render () {
    return (
      <div id="resident-questionaire">
        <RadioButtons
          label="Do you live in an apartment or house?"
          choices={["House", "Apartments"]} />
        <Checkboxes
          label="Where do you currently grow your produce?"
          choices={[
            "In a community garden",
            "In a private lot",
            "In my backyard/garden"]} />
        <label>
          How many cubic yards of compost do you expect to use this season?
        </label>
        <input type="text" />
        <RadioButtons
          label="How much of this compost are you looking to get from a sustainable neighborhood source?"
          choices={["All of it", "I will tkae what I can get and supplement rest from other sources"]} />
        <RadioButtons
          label="Are you willing to pay for sustainably created compost?"
          choices={["Yes", "No"]} />
        <Checkboxes
          label="When you harvest, what are you looking to do with your produce?"
          choices={[
            "Sell it to a local business/restaurant",
            "Use it myself/give the rest away",
            "Sell it in an online marketplace at a small scale"]} />
      </div>
    )
  }
}

export default FarmerForm;
