import React, { PropTypes } from 'react'

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChoices: []
    };
    this.value = ::this.value;
  }
  onButtonClick(choice) {
    if (this.state.selectedChoices.includes(choice)) {
      this.setState({
        selectedChoices: this.state.selectedChoices
          .filter(selectedChoice => selectedChoice !== choice)
      })
    } else {
      this.setState({selectedChoices: [
        ...this.state.selectedChoices,
        choice
      ]});
    }
  }
  value() {
    return this.state.selectedChoices;
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
          this.props.choices.map((choice, i) => {
            return <div
              className="checkbox-group" >
              <input
                onClick={this.onButtonClick.bind(this, choice)}
                key={i}
                name={choice}
                type="checkbox" />
              <label for={choice}>{choice}</label>
          </div>
          })
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
