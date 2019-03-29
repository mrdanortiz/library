import React, { FunctionComponent } from "react";
import { Container, Grid, Image, Responsive, SemanticWIDTHS } from "semantic-ui-react";

interface Props {
    splashImages: Array<{
        id: string;
        alt_description: string;
        urls: {
            raw: string;
            full: string;
            regular: string;
            small: string;
        };
    }>;
}

const GridLayout: FunctionComponent<Props> = ({ splashImages }) => (
    <Container>
        <Responsive>
            {splashImages ? (
                <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
                    <Grid.Row columns={((splashImages && splashImages.length) as SemanticWIDTHS) || 1}>
                        {splashImages &&
                            splashImages.map(img => (
                                <Grid.Column key={img.id} computer={8} mobile={16}>
                                    <Image
                                        centered={true}
                                        circular={true}
                                        bordered={true}
                                        size="medium"
                                        src={img.urls.raw + "q=40&fit=crop&w=300&h=300"}
                                        alt={img.alt_description}
                                    />
                                </Grid.Column>
                            ))}
                    </Grid.Row>
                </Grid>
            ) : (
                undefined
            )}
        </Responsive>
    </Container>
);

export default GridLayout;
