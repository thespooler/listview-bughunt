import * as React from 'react';
import styles from './ListViewBughunt.module.scss';
import { IListViewBughuntProps, IListViewBughuntState } from './IListViewBughuntProps';
import { escape, findIndex } from '@microsoft/sp-lodash-subset';
import { ListView, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';


export default class ListViewBughunt extends React.Component<IListViewBughuntProps, IListViewBughuntState> {
  constructor(props: IListViewBughuntProps) {
    super(props);
    this.state = { currentItem: props.items[0] };
  }

  public render(): React.ReactElement<IListViewBughuntProps> {
    const currentItemIndex = findIndex(this.props.items, p => !!this.state.currentItem && p.id == this.state.currentItem.id);
    const defaultSelection = [];
    if (currentItemIndex > -1) defaultSelection.push(currentItemIndex);
    return (
      <ListView
        items={this.props.items}
        selectionMode={SelectionMode.single}
        defaultSelection={defaultSelection}
        selection={e => {
          console.log(`${e.length} - ${e.length > 0 ? e[0].id : ''}`);
          this.setState({ currentItem: e[0] });
        }} />
    );
  }
}
