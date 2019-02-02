import React from 'react';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ListLove from "./ListLove";


const RouteButton2 = (props) => {
    return (
        <div>
        <Route render={({ history }) => (
            <Button 
            variant="contained" size="small" color="secondary"
            disabled={false} 
            onClick={() => {
                if (props.data === undefined || props.data.length === 0) {
                    console.log(props.data);
                    alert('You do not have any person that select love');
                    return;
                }
                history.push({
                    pathname: props.pathname,
                    data: props.data,
                    minAge: props.minAge,
                    maxAge: props.maxAge,
                    gender: props.gender,
                    allPersons: props.allPersons,
                    index: props.index
                });
          }}>
        {props.value}
        {console.log(history)}
            </Button>
        )}
        />
        {console.log(ListLove)}
           <Route path="/ListLove" component={ListLove} />

        </div>
    )
}

export default RouteButton2;