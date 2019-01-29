import React from 'react'
import styled from 'styled-components'
import LogoPic from '../images/logo.png'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


export const LogoWrapper = styled.section`
  padding: 2em;
  align-content: center;
`;

export const LogoImage = styled.img`
  margin: 5px;
  max-height: 65px;
  max-width: 155px;
`;


function Logo(props) {
  const { classes } = props;
  return (
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={LogoPic} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography color="textSecondary">DirectDrive™ Systems</Typography>
            </Grid>
          </Grid>
          </Grid>
          </Grid>
      </Paper>
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Logo);
