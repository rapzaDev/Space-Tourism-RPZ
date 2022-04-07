import React from 'react';
import { 
    Container,
    Content,
    Underline,
} from './styles';

type Props = {
    number?: string;
    title: string;
    onClick: (title: string) => void;
    activeButton: string;
}

const NavButton = React.memo(({number, title, onClick, activeButton}: Props) => {
    return(
        <Container onClick={() => onClick(title)}>
            <Content className="content">
                <span className="number">{number}</span>
                <span className="title">{title}</span>
            </Content>

            <Underline className={`underline ${ (activeButton === title) && 'active' }`}/>
        </Container>
    );
})

// function NavButton({number, title, onClick, activeButton}: Props) {
//     return(
//         <Container onClick={() => onClick(title)}>
//             <Content className="content">
//                 <span className="number">{number}</span>
//                 <span className="title">{title}</span>
//             </Content>

//             <Underline className={`underline ${ (activeButton === title) && 'active' }`}/>
//         </Container>
//     );
// };

export default NavButton;