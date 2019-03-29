import React, { FunctionComponent } from "react";
import { Container, Grid, Image, SemanticWIDTHS } from "semantic-ui-react";

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
        {splashImages ? (
            <Grid>
                <Grid.Row columns={((splashImages && splashImages.length) as SemanticWIDTHS) || 1}>
                    {splashImages &&
                        splashImages.map(img => (
                            <Grid.Column key={img.id}>
                                <Image src={img.urls.small} alt={img.alt_description} />
                            </Grid.Column>
                        ))}
                </Grid.Row>
            </Grid>
        ) : (
            undefined
        )}
    </Container>
);

export default GridLayout;
