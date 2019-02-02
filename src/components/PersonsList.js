import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as contentful from 'contentful'
import Person from '../components/Person'

class PersonList extends Component{
    state ={
        persons: []
    }

    constructor(){
        super()
        this.getPersons()
    }

    getpersons = () => {

    }

    render() {
        return (
            <div>
                <Grid container spacing={24} style={{padding: 24}}>

                </Grid>
            </div>    
        )
    }
}