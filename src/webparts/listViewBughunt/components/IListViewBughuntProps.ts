export interface MyItems {
  id: number;
  name: string;
  description: string;
}

export interface IListViewBughuntProps {
  items: MyItems[];
}

export interface IListViewBughuntState {
  currentItem: MyItems;
}
