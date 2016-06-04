import React, { PropTypes } from 'react'

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChoices: []
    };
  }
  onButtonClick(choice) {
    this.setState({selectedChoices: [
      ...this.state.selectedChoices,
      choice
    ]});
  }
  componentDidUpdate() {
    return (!this.props.onChange);
    this.props.onChange(this.state);
  }
  render () {
    return (
      <fieldset {...this.props}
        className={`button-group ${this.props.className}`}>
        <label>{this.props.label}</label>
        {
          this.props.choices.map((choice, i) =>
            <button
              key={i}
              className={`button${this.state.activeChoice === choice ? ' selected' : ''}`}
              onClick={this.onButtonClick.bind(this, choice)}>
              {choice}
            </button>
          )
        }
      </fieldset>
    );
  }
}

Checkboxes.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.array.isRequired,
  onChange: PropTypes.func
}

export default Checkboxes;
