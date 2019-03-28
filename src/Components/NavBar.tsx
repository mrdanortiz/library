import React, { FunctionComponent } from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

export const NavBar: FunctionComponent = () => (
    <div>
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item as="a" header>
                    <Image
                        size="mini"
                        src="http://www.mrdanortiz.com/img/profile-ddm2.png"
                        style={{ marginRight: "1.5em" }}
                    />
                    Sample React App
                </Menu.Item>
                <Menu.Item as="a">Home</Menu.Item>
            </Container>
        </Menu>
    </div>
);

export default NavBar;
