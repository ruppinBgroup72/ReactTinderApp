import React from "react";
import { Route } from 'react-router-dom';
import Persons from "./Persons";
import Button from '@material-ui/core/Button';


const RouteButton = (props) => {
    const sytle1={ heigth:30, width:50 };
    return (
        
        <div>
        <Route render={({ history }) => (
            <Button 
            variant="flat" size="small" color="default"
            disabled={false} 
            onClick={() => {
                if (props.data === undefined || props.data.length === 0) {
                    console.log(props.data);
                    alert('You do not have any matches');
                    return;
                }
                history.push({
                    pathname: props.pathname,
                    data: props.data,
                    minAge: props.minAge,
                    maxAge: props.maxAge,
                    gender: props.gender,
                    startAtIndex: props.startAtIndex
                });
          }}>
         <img src="https://cdn4.iconfinder.com/data/icons/kripto-black-2/512/kripto-search-b.png" ait="search" style={sytle1} />
            </Button>
        )}
        />
           <Route path="/Persons" component={Persons}  />

        </div>
    )
}

export default RouteButton;