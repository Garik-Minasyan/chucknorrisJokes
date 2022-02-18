import { useSelector } from 'react-redux'
import { CustomPanelWrap, CustomPanelElementWrap, CustomPanelElementJokse, CustomPanelImagetWrap } from './CustomJoksStyle';
import chucknorrisImage from '../../assets/chucknorris.png';

interface CustomResponseType {
  joks: jokseType | any;
}
interface jokseType {
  joks: object;
}

const CustomJoke = () => {
  const state = useSelector((state: CustomResponseType) => state.joks.joks);
  return (
    <CustomPanelWrap>
      <CustomPanelElementWrap>
        <CustomPanelElementJokse>
          {state?.value}
        </CustomPanelElementJokse>
        {
          state?.value === undefined ? <CustomPanelImagetWrap alt='png' src={chucknorrisImage} /> : ''
        }

      </CustomPanelElementWrap>
    </CustomPanelWrap>
  )
};

export default CustomJoke;
