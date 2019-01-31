import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {MainImage} from './Home';
import {flexbox} from '@material-ui/system';

// import SingleLineGrid from '../SingleLineGrid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'auto',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 1}px`,
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 1}px 0`,
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
        <Grid container direction="row" spacing={16}>
            <Grid item xs={12}>
                {/* <SingleLineGrid /> */}
                    <flexbox display="flex" overflow="auto" margin="0, 0, 0, 0" justifyContent="center">
                        <MainImage src="https://spiraldocs.blob.core.windows.net/spiraldocs/dds-lg.jpg" alt="background" />
                        </flexbox>
                    </Grid>
                    </Grid>
        </div>
    )
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FullWidthGrid);
