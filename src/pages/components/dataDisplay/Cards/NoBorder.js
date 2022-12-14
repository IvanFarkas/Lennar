import React from 'react';
import { Card } from 'antd';
import './noBorder.style.less';

const NoBorder = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card className="border-less-card" title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default NoBorder;
