import {
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import "../styles/dashboard.css"
import newstyle from "../styles/dashboard.module.scss"
import noking from "../media/justlogo.png"
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
// import 'antd/dist/antd.css';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Analytics', '2', <DesktopOutlined />),
    getItem('Invoices', '3', <ContainerOutlined />),
    getItem('E-commerce', '4', <MailOutlined />),
    getItem('Store Management', '5', <MailOutlined />)
    ,];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (



        <>
           

            <div className={newstyle.upperdiv}>
                <img src={noking} onClick={toggleCollapsed} className={newstyle.logocollapse} />
            </div>

            <div className={newstyle.menudiv} style={{ width: 256 } }>

            

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
        </>
    );
};
export default App;