import { Menu, Dropdown } from 'antd';
import { DownOutlined, ExportOutlined } from '@ant-design/icons';
import Link from 'next/link';

function MyDropDown(props) {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link href="/me">My Account</Link>
            </Menu.Item>

            <Menu.Divider />
            <Menu.Item key="3">
                <ExportOutlined />
                {` sign out`}
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={['click']}
            className={props.className}
        >
            <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
            >
                {props.children}
            </a>
        </Dropdown>
    );
}

export default MyDropDown;
