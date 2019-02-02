import React from 'react';
import RouteButton from './RouteButton.js'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import './App.css';




class FindPerson extends React.Component {
    constructor(props) {
        super(props);

        const urlParams = new URLSearchParams(this.props.location.search)
        this.state = {
            minAge: urlParams.get('minAge') == null ? "" : urlParams.get('minAge'),
            maxAge: urlParams.get('maxAge') == null ? "" : urlParams.get('maxAge'),
            gender: urlParams.get('gender') == null ? "" : urlParams.get('gender'),
            hobbies: this.props.location.hobbies === "undefined" ? this.props.location.hobbies = "No hobbies" : this.props.location.hobbies,
            arrayPersons:[]
        }
        console.log(this.props.location.hobbies);
   
        this.SetMinAge = this.SetMinAge.bind(this);
        this.SetMaxAge = this.SetMaxAge.bind(this);
        this.SetGender = this.SetGender.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    SetMinAge = (evt) => {     
        this.setState({ minAge: evt.target.value })
    }
    SetMaxAge = (evt) => {
        this.setState({ maxAge: evt.target.value })
    }
    SetGender = (evt) => {
        console.log(evt.target.value);
        this.setState({ gender: evt.target.value })
    }

    componentDidMount() {
        // dev- http://localhost:59823/api/persons
        // prod- https://proj.ruppin.ac.il/bgroup72/test1/tar5/api/persons
        fetch('https://proj.ruppin.ac.il/bgroup72/test1/tar5/api/persons')
          .then(response => response.json())
          .then(arrayPersons => {
              console.log(arrayPersons);
              this.setState({ arrayPersons:arrayPersons  })
          });
    }
      

    render() {
        const sytle1={ fontSize:20, textAlign: "center",fontFamily:"Calibri"};
        return (
            
     <div>
           <AppBar position="static"  color="default" >
               <Toolbar>
                   <Typography variant="title" >
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo-Tinder.svg/572px-Logo-Tinder.svg.png' alt='img' /> 
                   </Typography>             
               </Toolbar>
            </AppBar>

                <FormControl component="fieldset" >
                    <FormLabel style={{paddingTop:'40px',fontSize:"20px"}} component="legend" >Gender</FormLabel>
                        <RadioGroup
                        onChange={this.SetGender} 
                        value={this.state.gender}>
                        
                            <FormControlLabel   value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel   value="Male" control={<Radio />} label="Male"  />
                        </RadioGroup>
                        
                        <TextField placeholder="Enter Min Age here"
                           onChange={this.SetMinAge}
                           value={this.state.minAge}
                           inputProps={{
                            style:sytle1
                          }} >          
                         </TextField>
                         <TextField placeholder="Enter Max Age here"
                           onChange={this.SetMaxAge}
                           value={this.state.maxAge}
                           inputProps={{
                            style: sytle1
                          }} >
                         </TextField>
                         

                </FormControl>  

                <br/><br/>
                <RouteButton  value="Find" pathname="/Persons"
                minAge={this.state.minAge} maxAge={this.state.maxAge} gender={this.state.gender}

                data={this.state.arrayPersons.filter(p => p.Gender === this.state.gender && p.Age >= this.state.minAge && p.Age <= this.state.maxAge)}
                />
              
                {this.state.error && <h3> {this.state.error}</h3>}
            </div>
           
        );
    }
}

export default FindPerson;