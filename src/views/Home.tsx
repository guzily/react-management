import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("page 1", "/page1", <PieChartOutlined />),
  getItem("page 2", "/page2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5")
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8")
  ]),
  getItem("Files", "9", <FileOutlined />)
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const navigate = useNavigate();

  const menuClick = (e: { key: string }) => {
    console.log(e);
    //跳转路由
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)"
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/page1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ margin: "16px", background: colorBgContainer }}>
          <Breadcrumb
            style={{ lineHeight: "64px" }}
            items={[
              { title: "User" },
              {
                title: "Bill"
              }
            ]}
          ></Breadcrumb>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;
