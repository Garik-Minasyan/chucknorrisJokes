import { FavoritePanel, FavoriteListUl, FavoriteItemtP, FavoriteItemtPanel, DeleteButton } from "./FavoriteJokeStyle";
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
      <FavoriteListUl>
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
      </FavoriteListUl>
    </FavoritePanel>
  )
};

export default FavouriteJoke;