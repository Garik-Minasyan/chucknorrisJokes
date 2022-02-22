import { FavoritePanel, FavoriteListDiv, FavoriteItemtP, FavoriteItemtPanel, DeleteButton } from "./FavoriteJokeStyle";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneJokeFromFL } from "../../store/joksReducer/joksSlice";

interface CurrentJoke {
  joks: favoriteListType
}
interface favoriteListType {
  favoriteList: []
}
const FavouriteJoke = () => {
  const dispach = useDispatch();
  const favoriteByState = useSelector((state: CurrentJoke) => state.joks.favoriteList);

  const deleteOneJoke = (itemIndex: number) => {
    dispach(deleteOneJokeFromFL(itemIndex));
  };

  return (
    <FavoritePanel>
      <FavoriteListDiv>
        {favoriteByState?.map((item: string, index: number) => {
          return (
            <FavoriteItemtPanel key={index}>
              <FavoriteItemtP>
                {item}
              </FavoriteItemtP>
              <DeleteButton onClick={() => deleteOneJoke(index)}>DELETE</DeleteButton>
            </FavoriteItemtPanel>
          )
        })}
      </FavoriteListDiv>
      {
        favoriteByState.length <= 0 ? <FavoriteItemtP>We are not favorite jokes ...</FavoriteItemtP> : ""
      }
    </FavoritePanel>
  )
};

export default FavouriteJoke;