import React, { FunctionComponent } from "react";
import { Container, Image, Menu } from "semantic-ui-react";

export const NavBar: FunctionComponent = () => (
    <div>
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item header>
                    <Image
                        size="mini"
                        src="https://s3.amazonaws.com/www.mrdanortiz.com/img/profile-cir.png"
                        style={{ marginRight: "1.5em" }}
                    />
                    Sample React App
                </Menu.Item>
                <Menu.Item href="https://github.com/mrdanortiz/sample-react-app" target="_blank">
                    Source Code
                </Menu.Item>
            </Container>
        </Menu>
    </div>
);

export default NavBar;
