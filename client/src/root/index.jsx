import { DownOutlined } from "@ant-design/icons";
import { Layout, Dropdown, Input, Space, Drawer, Switch } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/pashalogo.png";
import "./index.scss";
const { Search } = Input;
import az from "../assets/images/flags/az.jpg";
import us from "../assets/images/flags/us.jpg";
import avatar from "../assets/images/user/avatar/avatar_ofis.jpg";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/footer";
import logoSmall from "../assets/images/logo/pashalogo_dark.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/slice/colorScheme.js";
const { Sider, Content } = Layout;

const DashboardRoot = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  //

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const items = [
    {
      label: (
        <a>
          <img
            style={{ height: "12px", marginRight: "10px" }}
            src={us}
            alt=""
          />
          <span>English</span>
        </a>
      ),
      key: "0",
    },
  ];

  return (
    <Layout>
      <Sider
        style={{
          backgroundColor: "#3A444E",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div id="left-menu">
          <NavLink to={"/"}>
            {!collapsed ? (
              <span className="logo">
                <img src={logo} alt="" />
              </span>
            ) : (
              <span
                style={{
                  margin: "15px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={logoSmall} alt="" />
              </span>
            )}
          </NavLink>
          <div className="slide-bar-content">
            <ul>
              {!collapsed ? <li>Navigasiya</li> : null}
              <li>
                <NavLink>
                  <i className="fa-solid fa-house"></i>

                  {!collapsed ? <span>Nəzarət paneli</span> : null}
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-solid fa-plus"></i>

                  {!collapsed ? <span>Yeni task yarat</span> : null}
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-solid fa-location-dot"></i>

                  {!collapsed ? <span>Layihələr</span> : null}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Sider>
      <Layout className="site-layout">
        <header>
          <nav>
            <div className="wrapper">
              <button onClick={() => setCollapsed(!collapsed)} id="menu-btn">
                <i className="fa-sharp fa-solid fa-bars"></i>
              </button>
              <form action="">
                <div>
                  <Search
                    placeholder="Axtarış..."
                    enterButton="Axtar"
                    size="large"
                    loading={false}
                  />
                </div>
              </form>
            </div>
            <ul>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <img src={az} />
                      <span>Azərbaycan</span>
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <i className="fa-regular fa-bell fa-2x"></i>
              </li>
              <li>
                <i onClick={showDrawer} className="fa-solid fa-gear fa-2x"></i>
              </li>
              <li className="profile">
                <a onClick={(e) => e.preventDefault()}>
                  <div>
                    <span>
                      <img src={avatar} alt="" />
                    </span>
                    <span>
                      <p className="account-user-name">Fuad Məmmədov</p>
                      <p className="account-position">CEO</p>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <Drawer
            style={{ backgroundColor: "#343A40" }}
            title="Settings"
            placement="right"
            onClose={onClose}
            keyboard={true}
            headerStyle={{
              backgroundColor: "#727cf5",
              padding: "23px 25px",
              color: "#fff",
            }}
            open={open}
          >
            <div className="p-3">
              <h5 className="mt-3">Color Scheme</h5>
              <hr className="mt-1" />
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="light-mode-check">
                  Light Mode
                </label>
              </div>
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="dark-mode-check">
                  Dark Mode
                </label>
              </div>

              <h5 className="mt-4">Width</h5>
              <hr className="mt-1" />
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="fluid-check">
                  Fluid
                </label>
              </div>
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="boxed-check">
                  Boxed
                </label>
              </div>

              <h5 className="mt-4">Left Sidebar</h5>
              <hr className="mt-1" />
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="default-check">
                  Default
                </label>
              </div>
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="light-check">
                  Light
                </label>
              </div>
              <div className="form-check form-switch mb-3">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="dark-check">
                  Dark
                </label>
              </div>
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="fixed-check">
                  Fixed
                </label>
              </div>
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="condensed-check">
                  Condensed
                </label>
              </div>
              <div className="form-check form-switch mb-1">
                <Switch size="small" defaultChecked />
                <label className="form-check-label" for="scrollable-check">
                  Scrollable
                </label>
              </div>
            </div>
          </Drawer>
        </header>
        <Content>
          <Outlet />
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardRoot;
