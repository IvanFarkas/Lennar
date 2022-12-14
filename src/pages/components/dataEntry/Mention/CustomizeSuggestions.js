import React from 'react';
import { Space } from 'antd';
import { Mention } from '@ant-design/compatible';

const Nav = Mention.Nav;

const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
];

function onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data);
}

class CustomizeSuggestions extends React.Component {
  state = {
    suggestions: [],
  };
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter((item) => item.name.toLowerCase().indexOf(searchValue) !== -1);
    const suggestions = filtered.map((suggestion) => (
      <Nav key={suggestion.name} value={suggestion.name} data={suggestion}>
        <span>
          {suggestion.name} - {suggestion.type}
        </span>
      </Nav>
    ));
    this.setState({ suggestions });
  };

  render() {
    const { suggestions } = this.state;
    return (
      <Space>
        <Mention placeholder="@someone" style={{ width: '100%' }} suggestions={suggestions} onSearchChange={this.onSearchChange} onSelect={onSelect} />
      </Space>
    );
  }
}

export default CustomizeSuggestions;
