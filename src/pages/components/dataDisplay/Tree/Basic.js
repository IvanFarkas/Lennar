import React from 'react';
import { Space, Tree } from 'antd';

const TreeNode = Tree.TreeNode;

class Basic extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  render() {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Tree checkable defaultExpandedKeys={['0-0-0', '0-0-1']} defaultSelectedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-0', '0-0-1']} onSelect={this.onSelect} onCheck={this.onCheck}>
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Space>
    );
  }
}

export default Basic;
