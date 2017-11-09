import React from 'react'
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({

    card: {
        maxWidth: 300
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    flexGrow: {
        flex: '1 1 auto'
    }

});

class TodoCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { expanded: false }
    }

    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded})
    }

    render() {

        const { classes } = this.props;

        return (
            <Card classes={classes.card}>
                <CardActions>
                    <Typography paragraph type="title">
                        {this.props.title}
                    </Typography>
                    <IconButton className={classNames(classes.expand, {[classes.expandOpen]: this.state.expanded})} onClick={() => {this.handleExpandClick()}}
                                aria-expanded={this.state.expanded} aria-label="Alle Ziele anzeigen" >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph type="body2">
                            Method:
                        </Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }

}

export default withStyles({withTheme: true})(TodoCard)