import styled from "styled-components";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const SeriesNavButton = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(trending);
                switch (doc.data().type) {
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            dispatch(setMovies({
                trending: trending,
            })
            )
        });
    }, [userName]);

    return (
        <Container>
            <h4>Series</h4>
            <Trending />
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

export default SeriesNavButton;