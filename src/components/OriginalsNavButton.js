import styled from "styled-components";
import Originals from "./Originals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const OriginalsNavButton = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let originals = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(originals);
                switch (doc.data().type) {
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            dispatch(setMovies({
                original: originals,
            })
            )
        });
    }, [userName]);

    return (
        <Container>
            <Originals />
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

export default OriginalsNavButton;