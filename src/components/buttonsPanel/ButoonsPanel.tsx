import { useDispatch, useSelector } from "react-redux";
import joksServices from "../../api/getJoks";
import { addJoke, addToFavoriteList, deleteAllJoksForLS, everyThreeSecond } from "../../store/joksReducer/joksSlice";
import { ButtonsPanelWrap, ButtonWrap } from './buttonsPanelStyles';
import { Link } from 'react-router-dom';

let turnOff = 1;
let myInterval: NodeJS.Timer;

interface CurrentJoke {
  joks: JoksType;
};

interface JoksType {
  joks: string
};
interface dataType {
  data: object
};
const ButtonsPanel = () => {
  const dispach = useDispatch();
  const currentJoke = useSelector((state: CurrentJoke) => state.joks.joks);

  const addOneJoke = () => {
    clearInterval(myInterval);
    joksServices.getQueryJoks().then((response: dataType | undefined) => {
      dispach(addJoke(response?.data))
    }).catch(err => {
      console.log(err)
    })
  };

  const showEveryThreeSecond = () => {
    turnOff++
    if (turnOff % 2 === 0) {
      myInterval = setInterval(() => {
        joksServices.getQueryJoks().then((response: dataType | undefined) => {
          dispach(everyThreeSecond(response?.data))
        }).catch(err => {
          console.log(err)
        })
      }, 3000);
    }
    else {
      clearInterval(myInterval)
    }
  };

  const addToFavorite = () => {
    dispach(addToFavoriteList(currentJoke))
  };

  // delete all jokes from localStorage
  const deleteAllJoks = () => {
    dispach(deleteAllJoksForLS())
  };

  return (
    <ButtonsPanelWrap>
      <Link to="/">
        <ButtonWrap onClick={addOneJoke}>Show One Joke</ButtonWrap>
      </Link>
      <ButtonWrap onClick={showEveryThreeSecond}>Show Joke Evrey 3 Seconds  </ButtonWrap>
      <ButtonWrap onClick={addToFavorite}>Add To Favorite List</ButtonWrap>
      <Link to="/favouriteJoke">
        <ButtonWrap>Go To Favorite List</ButtonWrap>
      </Link>
      <ButtonWrap onClick={deleteAllJoks}>Delete All Favorite List</ButtonWrap>
    </ButtonsPanelWrap>
  );
};

export default ButtonsPanel;
