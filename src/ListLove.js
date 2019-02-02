import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RouteButton from './RouteButton.js'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2196f3',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    overflowX: 'auto',
  },
  table: {
    minWidth: 800,
  },
  tableHeader: {
    backgroundColor: 'lightblue'
  },
});

class ListLove extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('inside list love');

        var personsArr = this.props.location.data
        this.state = {
            persons: personsArr == undefined ? [] : personsArr,
            minAge: this.props.location.minAge,
            maxAge: this.props.location.maxAge,
            gender: this.props.location.gender,
            allPersons: this.props.location.allPersons,
            index: this.props.location.index
        }
        console.log(personsArr);
    }
  
    render() {
        return( 
          <div>
          <AppBar position="static" color="default" >
            <Toolbar>
                <Typography variant="title" >
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo-Tinder.svg/572px-Logo-Tinder.svg.png' alt='img' /> 
                </Typography>
                <Typography >
                <RouteButton  value="Find" pathname="/Persons"
                minAge={this.state.minAge} maxAge={this.state.maxAge} gender={this.state.gender}
                data={this.state.allPersons} startAtIndex={this.state.index}
                />
                </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={styles.root}>
            <Table className={styles.table}>
              <TableHead color="lightBlue" className={styles.tableHeader}>
                <TableRow color="lightBlue" className={styles.tableHeader}>
                  <CustomTableCell  align="center">Full Name</CustomTableCell >
                  <CustomTableCell  align="center">Gender</CustomTableCell >
                  <CustomTableCell  align="center">Age</CustomTableCell >
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.persons.map(row => (
                  <TableRow key={row.Id}>
                    <TableCell align="center">{row.Name} { row.FamilyName }</TableCell>
                    <TableCell align="center">{row.Gender}</TableCell>
                    <TableCell align="center">{row.Age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </Paper>
        </div>
      );
    }
        
}

export default ListLove;