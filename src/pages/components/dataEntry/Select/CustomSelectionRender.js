import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

import React from 'react';

const CustomSelectionRender = () => {
  return (
    <Select mode="multiple" style={{ width: '100%' }} placeholder="select one country" defaultValue={['china']} onChange={handleChange} optionLabelProp="label">
      <Option value="china" label="China">
        <div className="demo-option-label-item">
          <span role="img" aria-label="China">
            π¨π³
          </span>
          China (δΈ­ε½)
        </div>
      </Option>
      <Option value="usa" label="USA">
        <div className="demo-option-label-item">
          <span role="img" aria-label="USA">
            πΊπΈ
          </span>
          USA (ηΎε½)
        </div>
      </Option>
      <Option value="japan" label="Japan">
        <div className="demo-option-label-item">
          <span role="img" aria-label="Japan">
            π―π΅
          </span>
          Japan (ζ₯ζ¬)
        </div>
      </Option>
      <Option value="korea" label="Korea">
        <div className="demo-option-label-item">
          <span role="img" aria-label="Korea">
            π°π·
          </span>
          Korea (ι©ε½)
        </div>
      </Option>
    </Select>
  );
};

export default CustomSelectionRender;
