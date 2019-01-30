import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LogoPic from '../images/logosmall.png';

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 63,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <Grid container justify="left" alignItems="left">
            <Avatar alt="Intralox" src={LogoPic} className={classes.bigAvatar} />
        </Grid>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);