import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LogoPic from '../images/spiraltechnology.jpg';

const styles = {
    avatar: {
        marginTop: 5,
        marginBottom: 0,
        width: "100%",
        height: 40,
        Opacity: 0.7,
        borderRadius: 5,
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
        <Grid container justify="right" alignItems="right">
            <Avatar alt="Intralox" src={LogoPic} className={classes.avatar} />
        </Grid>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);