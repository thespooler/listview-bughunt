import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ListViewBughuntWebPartStrings';
import ListViewBughunt from './components/ListViewBughunt';
import { IListViewBughuntProps } from './components/IListViewBughuntProps';

export interface IListViewBughuntWebPartProps {
  description: string;
}

export default class ListViewBughuntWebPart extends BaseClientSideWebPart<IListViewBughuntWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IListViewBughuntProps> = React.createElement(
      ListViewBughunt,
      {
        items: [
          { id: 1, description: "Desc1", name: "Title 1" },
          { id: 2, description: "Desc2", name: "Title 2" },
          { id: 3, description: "Desc3", name: "Title 3" }]
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
