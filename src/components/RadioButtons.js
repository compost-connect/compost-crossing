import React, { PropTypes } from 'react'

class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChoice: null
    };
    this.value = ::this.value;
  }
  onButtonClick(choice) {
    this.setState({activeChoice: choice}, () => {
      if (this.props.onChange) this.props.onChange(this.state);
    });
  }
  value() {
    return this.state.activeChoice;
  }
  render () {
    if (this.props.type === 'buttonGroup') {
      return (
        <fieldset {...this.props}
          className={`button-group ${this.props.className}`}>
          <label>{this.props.label}</label>
          {
            this.props.choices.map((choice, i) =>
            <button
              type="button"
              key={i}
              className={`button${this.state.activeChoice === choice ? ' selected' : ''}`}
              onClick={this.onButtonClick.bind(this, choice)}>
              {choice}
            </button>
          )
        }
      </fieldset>);
    }
    return (
      <fieldset {...this.props}
        className={`button-group ${this.props.className}`}>
        <label>{this.props.label}</label>
        {
          this.props.choices.map((choice, i) =>
          <div className="radiobutton-group">
            <input
              name={this.props.label}
              type="radio"
              key={i}
              onClick={this.onButtonClick.bind(this, choice)} />
            {choice}
          </div>
        )
      }
    </fieldset>);
  }
}

RadioButtons.defaultProps = {
  type: 'buttonGroup'
}

RadioButtons.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.array.isRequired,
  onChange: PropTypes.func
}

export default RadioButtons;
