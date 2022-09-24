import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    }
  }

  handleClick = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  }

  getToggleStypes = (checked) => ({
    position: 'relative',
    width:'60px',
    height: '35px',
    backgroundColor: checked ? '#2196f3' : '#ccc',
    transition: '.4s',
    borderRadius: '34px',
    border: 'none',
  })

  getSpanStyles = (checked) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    content: checked ? 'ON' : 'OFF',
    height: '26px',
    width: '26px',
    left: checked ? '4px' : '30px',
    bottom: '4px',
    backgroundColor: '#fff',
    transition: '.4s',
    borderRadius: '50%',
    fontSize: '10px',
  })

  render() {
    const { checked } = this.state;
    return (
      <button onClick={this.handleClick} style={this.getToggleStypes(checked)}>
        {checked ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);