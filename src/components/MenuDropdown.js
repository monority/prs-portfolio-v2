import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <p>
        Light mode
      </p>
    ),
  },
  {
    key: '2',
    label: (
      <p>
        Dark mode
      </p>
    ),
  },
  {
    key: '3',
    label: (
      <p>
        Switch to French
      </p>
    ),
  },

];
const MenuDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <p onClick={(e) => e.preventDefault()}>
      <Space>
        
        <DownOutlined />
      </Space>
    </p>
  </Dropdown>
);
export default MenuDropdown;