import React  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LogoImage from '../../images/logosmall.png';
import ApplicationPic from '../../images/hydrochillerLarge.jpg';
import DDSPic from '../../images/dds_medium.jpg';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.dark,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

function SpiralDocs(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                    <GridListTile>
                    <img src={ApplicationPic} alt="placeholder"/>
                        <GridListTileBar
                        title="By Application"
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                <GridListTile>
                    <img src={DDSPic} alt="placeholder" />
                    <GridListTileBar
                        title="Browse Applications"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton>
                                <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </GridListTile>
                <GridListTile>
                    <img src={LogoImage} alt="placeholder" />
                    <GridListTileBar
                        title="Browse Technologies"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton>
                                <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

SpiralDocs.propTypes = {
    classes: PropTypes.object.isRequired,
};

SpiralDocs.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SpiralDocs);


//                         <DocCategory CardTitle="By Application" CardText="(Freezer, HydroChiller, etc.." />
//                         <DocCategory CardTitle="By Technology" CardText="DDS™/StructureSupported/SelfStacker/SideDrive" />
//                         <DocCategory CardTitle="By End User" />

//                         <DocCategory CardTitle="Design Guidelines" category="Design Guidelines " docLink="spiralDocs/manuals/Design Guidelines" />
//                         <DocCategory CardTitle="Controls Manuals" category="TCP" docLink="spiralDocs/manuals/TCP"/>
//                         <DocCategory CardTitle="Technical Guides and Misc. Documents" />
//                         <DocCategory CardTitle="Training Presentations" />
//                     </CardGroup>
//                     </Col>
//                 </Row>
//                 <br />
//                 <p> Something missing? Add it to the Spiral Docs Database. <br/>
//                     <Button type> <StyledLink to='/spiralDocs/create'>  Click to Upload a New Document </StyledLink>   </Button> </p>
//             </div>
//         )
//     }
// }