import React, { useState } from 'react';
import { Container, Title } from "../../style/components/shared/CollapsibleSection.style";

const CollapsibleSection = (props: any) => {
    const {title, children} = props;
    const [expanded, setExpanded] = useState(false);

    function switchExpansion() {
        setExpanded(!expanded);
    }

    return (
        <Container onClick={switchExpansion} style={{}}>
            <Title active={expanded}>{title}</Title>
            <div style={{display: expanded ? 'block' : 'none'}}>{children}</div>
        </Container>
    )
};

export default CollapsibleSection;
