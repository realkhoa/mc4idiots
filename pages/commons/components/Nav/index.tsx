import React from 'react';
import { useRouter } from 'next/router'
import { MinusSquareOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Minecraft', 'Minecraft', <MinusSquareOutlined />, [

    getItem('Machines', '/Minecraft/Machines/', null, [
      getItem('Furnace', '/Minecraft/Machines/Furnace'), 
      getItem('Observer', '/Minecraft/Machines/Observer')
    ]),

    getItem('Farms', '/Minecraft/Farms/', null, [
      getItem('Iron Farm', '/Minecraft/Farms/Iron'), 
      getItem('Kelp Farm', '/Minecraft/Farms/Kelp')
    ]),

  ]),

  getItem('RFTools', 'RFTools', <MinusSquareOutlined />, [
    getItem('RFTools Base', '/RFTools/Base', null, [
      getItem('a', 'a'), 
      getItem('b', 'b')
    ]),

    getItem('RFTools Builder', 'RFTools/Builder', null, [
      getItem('Builder', 'RFTools/Builder/Builder'), 
      getItem('Shape Card', 'RFTools/Builder/ShapeCard')
    ]),
  ]),

  getItem('Refined Storage', 'rfstorage', <MinusSquareOutlined />, [
    getItem('9', '9'),
    getItem('10', '10'),
    getItem('11', '11'),
    getItem('12', '12'),
  ]),
];

interface INavProps {
  theme: MenuTheme
}

const Nav: React.FC<INavProps> = (props: INavProps) => {

  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key)
  };

  const { theme } = props;

  return (
    <Menu
      theme={theme}
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['mc']}
      mode="inline"
      items={items}
    />
  );
};

export default Nav;