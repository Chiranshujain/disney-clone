import styled from "styled-components";
import ImgSlider from "../Imgslider/ImgSlider";
import Viewers from "../Viewer/Viewers";
import Recommends from "../Body/Recommends";
import NewDisney from "../Body/NewDisney";
import Orignals from "../Body/Orignals";
import Trending from "../Body/Trending";
import Pixar from "../Body/Pixar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { setMovies } from "../../../features/movieslice";
import { selectUserName } from "../../../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    let pixar = [];
    let disney = [];
    let marvel = [];

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          case "pixar":
            pixar = [...pixar, { id: doc.id, ...doc.data() }];
            break;
          case "disney":
            disney = [...disney, { id: doc.id, ...doc.data() }];
            break;
          case "marvel":
            marvel = [...marvel, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
          pixar: pixar,
          disney: disney,
          marvel: marvel,
        })
      );
    });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Orignals />
      <Trending />
      <Pixar />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
