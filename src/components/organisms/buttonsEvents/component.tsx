import React, { FC } from 'react';
import styled from './style.module.scss';
import EventButtons from '../../molecules/eventButtons/component';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideocamIcon from '@material-ui/icons/Videocam';
import ShareIcon from '@material-ui/icons/Share';
import WholeScreen from '../../../images/icon/wholeScreen.png';
import { useAppDispatch, useAppSelector } from '../../../Data/hooks/hooks';
import { productCardSlice } from '../../../Data/reducer/productСard';

const ButtonsEvents: FC = () => {
    const [like, setlike] = React.useState<boolean>(false);

    const { isWholeScreen } = useAppSelector((state) => state.productCard);
    const { wholeScreen } = productCardSlice.actions;
    const dispatch = useAppDispatch();

    console.log('isWholeScreen', wholeScreen(true));
    return (
      <div className={styled.wrapperButtons}>
        <EventButtons label="Video" onClick={() => setlike(!like)}>
          <VideocamIcon className={styled.icon} />
        </EventButtons>

        <EventButtons label="Favorite" onClick={() => setlike(!like)}>
          {like ? <FavoriteIcon className={styled.icon} /> :
          <FavoriteBorderIcon className={styled.icon} />}
        </EventButtons>

        <EventButtons label="Favorite" onClick={() => dispatch(wholeScreen(!isWholeScreen))}>
          <img src={WholeScreen} alt="WholeScreen" />
        </EventButtons>

        <EventButtons label="Share" onClick={() => setlike(!like)}>
          <ShareIcon className={styled.icon} />
        </EventButtons>

      </div>
);
};

export default ButtonsEvents;
