import React from 'react'
import './swipeButton.css';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashIcon from '@material-ui/icons/FlashOn';
 


function SwipeButton() {
    return (
        <div className="swipeButton">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lighting">
                <FlashIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButton;
