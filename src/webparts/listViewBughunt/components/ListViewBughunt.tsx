import * as React from 'react';
import { IListViewBughuntProps, IListViewBughuntState } from './IListViewBughuntProps';
import { ListView, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';

export default class ListViewBughunt extends React.Component<IListViewBughuntProps, IListViewBughuntState> {
  constructor(props: IListViewBughuntProps) {
    super(props);
    this.state = { currentItem: props.items[0], bug: true };
  }

  public render(): React.ReactElement<IListViewBughuntProps> {
    return (<div>
      <div>
        <input type="checkbox" checked={this.state.bug} onChange={e => this.setState({ bug: e.target.checked })} id="TriggerBug" />
        <label htmlFor="TriggerBug">Trigger the bug on select</label>
      </div>
      <button onClick={e => this.setState({})}>Break it now, anyways. Call setState({})</button>
      <ListView
        items={this.props.items}
        selectionMode={SelectionMode.single}
        selection={e => {
          if (e.length == 0)
            console.log(`selection() - nothing selected`);
          else
            console.log(`selection() - [${e.length}] ${e.map(f => f.id)}`);

          if (this.state.bug) this.setState({});
        }} />
    </div>);
  }
}
