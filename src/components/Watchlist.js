import styled from "styled-components";

const Watchlist = (props) => {

    return (
        <Container>
            <h4>Watchlist</h4>
            <Content>
            </Content>
        </Container>
    )
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    height: 889px;

    &::after {
        background: url('/images/home-background.png') center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export default Watchlist;