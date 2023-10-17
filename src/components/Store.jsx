import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView ';
import ListView from './ListView';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'cards', 
    };
  }

  handleSwitchView = () => {
    const newView = this.state.viewType === 'cards' ? 'list' : 'cards';
    this.setState({ viewType: newView });
  }

  render() {
    const { viewType } = this.state;
    const { products } = this.props;

    return (
      <div>
        <IconSwitch icon={viewType === 'cards' ? 'view_list' : 'view_module'} onSwitch={this.handleSwitchView} />

        {viewType === 'cards' ? <CardsView cards={products} /> : <ListView items={products} />}
      </div>
    );
  }
}

export default Store;
