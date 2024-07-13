import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Vehicle data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface VehicleNode {
  name: string;
  id?: number;
  children?: VehicleNode[];
  selected?: boolean;
  indeterminate?: boolean;
  parent?: VehicleNode;
}

const TREE_DATA: VehicleNode[] = [
  {
    name: 'Test1',
    id: 5,
    children: [
      { name: 'Test Child 2', id: 1 },
      { name: 'Test Child 3', id: 2, children: [{ name: 'asdadasd' }] },
    ],
  },
  { name: 'test2', id: 2, children: [{ name: 'Child 4', id: 1 }] },
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent {
  result: any[] = [];

  public treeControl = new NestedTreeControl<VehicleNode>(
    (node) => node.children
  );

  public dataSource = new MatTreeNestedDataSource<VehicleNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
    Object.keys(this.dataSource.data).forEach((key: any) => {
      return this.setParent(this.dataSource.data[key], null!);
    });
  }

  hasChild = (_: number, _nodeData: VehicleNode) => _nodeData.children;

  private setParent(node: VehicleNode, parent?: VehicleNode) {
    node.parent = parent;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.setParent(childNode, node);
      });
    }
  }

  private checkAllParents(node: VehicleNode) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected = descendants.every((child) => child.selected);
      node.parent.indeterminate = descendants.some((child) => child.selected);
      this.checkAllParents(node.parent);
    }
  }

  itemToggle(checked: boolean, node: VehicleNode) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach((child) => {
        this.itemToggle(checked, child);
      });
    }
    this.checkAllParents(node);
  }

  public submit() {
    // this.result = this.dataSource.data.reduce(
    //   (acc: string[], node: VehicleNode) =>
    //     acc.concat(
    //       this.treeControl
    //         .getDescendants(node)
    //         .filter((descendant) => descendant.selected)
    //         .map((descendant) => descendant.name)
    //     ),
    //   [] as string[]
    // );
    this.result = this.dataSource.data.reduce(
      (acc: any[], node: VehicleNode) =>
        acc.concat(
          this.treeControl
            .getDescendants(node)
            .filter((descendant) => !descendant.children && descendant.selected)
        ),
      [] as any
    );
  }
}
