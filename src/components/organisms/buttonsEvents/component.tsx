import React, { FC, SetStateAction, useEffect } from 'react';
import styled from './style.module.scss';
import EventButtons from '../../molecules/eventButtons/component';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideocamIcon from '@material-ui/icons/Videocam';
import ShareIcon from '@material-ui/icons/Share';
import WholeScreen from '../../../images/icon/wholeScreen.png';

interface IProps {
    wholeScreen: boolean
    setWholeScreen: React.Dispatch<SetStateAction<boolean>>
    className: string
}

const ButtonsEvents: FC<IProps> = ({ wholeScreen, setWholeScreen, className }) => {
    const [like, setLike] = React.useState<boolean>(false);

    useEffect(() => {
        setWholeScreen(false);
    }, []);

    return (
      <div className={`${styled.wrapperButtons} ${className}`}>
        <EventButtons label="Video" onClick={() => false}>
          <VideocamIcon className={styled.icon} />
        </EventButtons>

        <EventButtons label="Favorite" onClick={() => setLike(!like)}>
          {like ? <FavoriteIcon className={styled.icon} /> :
          <FavoriteBorderIcon className={styled.icon} />}
        </EventButtons>

        <EventButtons label="Favorite" onClick={() => setWholeScreen(!wholeScreen)}>
          <img src={WholeScreen} alt="WholeScreen" />
        </EventButtons>

        <EventButtons label="Share" onClick={() => false}>
          <ShareIcon className={styled.icon} />
        </EventButtons>
      </div>
);
};

export default ButtonsEvents;
