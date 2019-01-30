import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {MainImage} from './Home';
import Logo from '../logo';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
        <Grid container direction="row" spacing={16}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" gutterbottom> Spiral WebApp </Typography>
                    <Typography variant="caption" gutterBottom> DirectDrive™ Documentation </Typography>
                </Paper>
            </Grid>
            <Divider className={classes.divider} />

            <Grid item xs={12} justify='center'>
                    <MainImage src="./dds-lg.jpg" alt="background" />
            </Grid>
            <Grid item xs={6} sm={3}>
            </Grid>
            <Grid item xs={6} sm={3}>
            </Grid>
            <Grid item xs={6} sm={3}>
            </Grid>
                <Grid item xs={6} sm={3}>
                    <Logo />
                </Grid>
        </Grid>
        </div>
    )
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FullWidthGrid);
