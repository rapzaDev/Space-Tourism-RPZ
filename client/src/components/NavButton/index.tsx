import React, { useCallback } from 'react';
import { 
    Container,
    Content,
    Underline,
} from './styles';

type Props = {
    number?: string;
    title: string;
    bttnType: 'category' | 'planet' | 'crew-member' | 'technology';
    activeButton: string;
    onClick: (title: string) => void;
}

const NavButton = React.memo(({number, title, bttnType, activeButton, onClick}: Props) => {
    return(
        <Container 
            onClick={ () => onClick(title) }
            bttnType={bttnType}
        >
            <Content 
                className="content" 
                bttnType={bttnType}
                active={activeButton === title}
            >
                <span className="number">{number}</span>
                <span className="title">{title}</span>
            </Content>

            <Underline 
                className={`underline ${ (activeButton === title) && 'active' }`}
                bttnType={bttnType}
            />
        </Container>
    );
}); 

export default NavButton;