import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { MoreVert } from '@material-ui/icons'

const containerBump = {
  marginTop: '20px',
};

const Import = (props) => {

const [anchorEl, setAnchorEl] = React.useState(null);
const [makeIndex, setMakeIndex] = React.useState(null);

  const handleClick = (event, index) => {
    setMakeIndex(index)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Container style={containerBump}>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">
        IMPORT
        </Button>
        <h2>
         COUNT: {props.makes.length}
        </h2>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell key={row.makeId+'id'} component="th" scope="row">{row.MakeId}</TableCell>
              <TableCell align="right" key={row.makeId+'name'}>{row.MakeName}</TableCell>
              <TableCell align="right" key={row.makeId+'action'}><MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => handleClick(e, idx)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <MenuItem onClick={() => props.deleteMake(makeIndex)}>Delete</MenuItem>
      </Menu>
    </Container>
    )
}

export default Import