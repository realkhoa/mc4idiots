import React from 'react';
import { useRouter } from 'next/router'
import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

import routesData from "@/commons/data/routes/routes.json";

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

const items: MenuProps['items'] = routesData as Array<MenuItem>

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