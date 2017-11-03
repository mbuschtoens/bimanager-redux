import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  todoExpiredHeader: {
    textAlign: 'left',
    fontWeight: 'bold',

  },
  teilnehmerVorname: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
  },
  teilnehmerNachname: {
    fontSize: 20,
    fontWeight: 500,
  },
});

function ToDoExpired(props) {
  const { classes } = props;
  return (
    <div id="todoExpired">
      <div className={'todoExpiredHeader'}>
        <Typography component="h1" className={classes.todoHeader}>
          überfällige Ziele
        </Typography>
      </div>
      <ul> className={'todoExpiredContent'}>
        <li>
          <Typography component="p" className={classes.todoExpiredContentHead}>
            Verbesserung Flächenber...
          </Typography>
          <form>
            <Typography component="p" className={classes.teilnehmerVorname}>
              Stefan <span className={classes.teilnehmerNachname}>Riemenschneider</span>
            </Typography>
            <input type="submit" value="" />
          </form>
        </li>
      </ul>
    </div>
  );
}

ToDoExpired.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDoExpired);
