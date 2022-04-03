import { 
    Container,
    Content,
    Underline,
} from './styles';

type Props = {
    number: string;
    title: string;
}

function NavButton({number, title}: Props) {
    return(
        <Container>
            <Content className="content">
                <span className="number">{number}</span>
                <span className="title">{title}</span>
            </Content>

            <Underline className="underline"/>
        </Container>
    );
};

export default NavButton;