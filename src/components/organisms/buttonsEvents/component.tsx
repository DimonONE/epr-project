import React, { FC } from 'react';
import styled from './style.module.scss';
import EventButtons from '../../molecules/eventButtons/component';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideocamIcon from '@material-ui/icons/Videocam';
import ShareIcon from '@material-ui/icons/Share';

const ButtonsEvents: FC = () => {
    const [like, setlike] = React.useState<boolean>(false);

    return (
      <div className={styled.wrapperButtons}>
        <EventButtons label="Video" onClick={() => setlike(!like)}>
          <VideocamIcon className={styled.icon} />
        </EventButtons>

        <EventButtons label="Favorite" onClick={() => setlike(!like)}>
          {like ? <FavoriteIcon className={styled.icon} /> :
          <FavoriteBorderIcon className={styled.icon} />}
        </EventButtons>

        <EventButtons label="Favorite" onClick={() => setlike(!like)}>
          <FavoriteBorderIcon className={styled.icon} />
        </EventButtons>

        <EventButtons label="Share" onClick={() => setlike(!like)}>
          <ShareIcon className={styled.icon} />
        </EventButtons>
      </div>
);
};

export default ButtonsEvents;
