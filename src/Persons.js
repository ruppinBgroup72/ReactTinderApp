import React from 'react';
import './Person.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import RouteButton2 from './routeButton2.js';


class Persons extends React.Component {
    
    constructor(props) {
        super(props);

        var startAtIndex = this.props.location.startAtIndex == undefined ? 0 : this.props.location.startAtIndex;
        this.state = {
            currentIndex:startAtIndex, 
            minAge: this.props.location.minAge,
            maxAge: this.props.location.maxAge,
            gender: this.props.location.gender,
            persons:this.props.location.data,  
            person:this.props.location.data[startAtIndex],
            listLove:[]
        }         
        this.setNext = this.setNext.bind(this);
        this.setBack = this.setBack.bind(this);
        this.setPerson=this.setPerson.bind(this);
        this.getBackUrl = this.getBackUrl.bind(this);
        this.getImagePath = this.getImagePath.bind(this);
        this.SetPersonLove = this.SetPersonLove.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this) 
        this.handledelTodoItem = this.handledelTodoItem.bind(this);
        this.getLoveImage = this.getLoveImage.bind(this);
        this.GetLikedPersons = this.GetLikedPersons.bind(this);

        console.log('Person array:');
        console.log(this.props.location.data);
    }

    setPerson =(p)=>{
        console.log("Inside setPerson");
        this.setState({person: p});
        console.log(this.state.currentIndex);
    }

    setNext = () => {   
        console.log('Set next: ');
        console.log(this.state.currentIndex);
        console.log(this.state.persons.length);
        if (this.state.currentIndex < (this.state.persons.length-1))  {
            var nextPersonIndex = this.state.currentIndex + 1;
            this.setState({ currentIndex: nextPersonIndex });
            console.log(nextPersonIndex);
            this.setState({person: this.state.persons[nextPersonIndex]});
            console.log(this.state.person);
            console.log(this.state.listLove);
        }
        else{ 
            alert("No more people to show")
        }
        let IsExsits=false;
        for(var i = 0; i < this.state.listLove.length; i++){
            if(nextPersonIndex< this.state.listLove.length){
            if(this.state.listLove[i].Id === this.state.persons[nextPersonIndex+1].Id){
               IsExsits=true;
            }
        }
        console.log(nextPersonIndex);
          }
          console.log(IsExsits);
    }

    setBack = () => {   
        if (this.state.currentIndex !== 0)  {
            var newIndex = this.state.currentIndex - 1;
            this.setState({currentIndex: newIndex });
            this.setState({person: this.state.persons[newIndex]});
             
        }
        else { 
            alert("No more pople to show")
        }
        let IsExsits=false;
        for(var i = 0; i < this.state.listLove.length; i++){
            if(newIndex>0){
            if(this.state.listLove[i].Id === this.state.persons[newIndex-1].Id) {
               IsExsits=true;
            }
          }
          if(newIndex===0){
            if(this.state.listLove[i].Id === this.state.persons[newIndex].Id){
                IsExsits=true;
            }
          }
          
        }
          console.log(IsExsits);
    } 

    getBackUrl = () => {
        return "/FindPerson?minAge=" + this.state.minAge + "&maxAge=" + this.state.maxAge + "&gender=" + this.state.gender;
    }

    hobbiesfunc = () => {
        let temp = this.state.person.ArrayHobbies;
        if (temp === undefined || temp.length === 0) {
            return "No hobbies";
        }
        return temp;
    }
    premiumFunc = () => {
        if (this.state.person.IsPremium === undefined) {
            return "false";
        }
        if (this.state.person.IsPremium === true || this.state.person.IsPremium === "true") {
            return "true";
        }
        return "false";
    }
    getImagePath = () => {
        var personImage = this.state.person.Image;
        personImage = personImage.replace('..', '');

        // dev - http://localhost:59823
        // prod - https://proj.ruppin.ac.il/bgroup72/test1/tar5
        var finalImage = "https://proj.ruppin.ac.il/bgroup72/test1/tar5" + personImage;
        console.log(finalImage);
        return finalImage;
    }

    getLoveImage = () => {
        return this.state.person.IsLiked ? "https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-1/40/favorite-512.png" : "https://cdn3.iconfinder.com/data/icons/vote/16/heart_love_favorite-512.png";
    }
    //הוספה לרשימת אהבתי
    handleAddTodoItem() {
        this.state.listLove.push(this.state.person)
      this.setState({
          listLove:this.state.listLove
        })
        console.log(this.state.listLove)
      }
      //מחיקה מרשימת אהבתי
      handledelTodoItem(){
        for(var i = 0; i < this.state.listLove.length; i++){
          if(this.state.listLove[i] === this.state.person){
             delete this.state.listLove[i]
          }
        }
        this.setState({
          listLove:this.state.listLove
        })
        console.log(this.state.listLove)
      }
    SetPersonLove = () => { 
        console.log('Set person love');
        var newState = !this.state.person.IsLiked
        this.state.person.IsLiked = newState;
        this.setState({});

        fetch('http://localhost:59823/api/updateLikedPerson?IsLiked=' + newState + '&PersonId=' + this.state.person.Id);    
    }
    GetLikedPersons = () => {
        return this.state.persons.filter(p => p.IsLiked);
    }

    render() {
        
        return (
            <div>   
                {/* תפריט*/}
                <AppBar position="static" color="default" >
               <Toolbar>
                    <Typography variant="title" >
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo-Tinder.svg/572px-Logo-Tinder.svg.png' alt='img' /> 
                   </Typography>
                   <Typography >
                   <Button variant="flat" size="small" href={this.getBackUrl()}>
                   <img src="https://image.flaticon.com/icons/svg/122/122637.svg" alt="back"/>
                    </Button>
                   </Typography>
                   <Typography >
                   <RouteButton2 value="view list love" pathname="/ListLove"
                    minAge={this.state.minAge}
                    maxAge={this.state.maxAge}
                    gender={this.state.gender}
                    allPersons={this.state.persons}
                    index={this.state.currentIndex}
                    data={this.GetLikedPersons()}/>
                   </Typography>
               </Toolbar>
               </AppBar>
               
                <Grid container spacing={40} style={{padding: 40}} color="default">
                {/* כרטיס */}
                    <Card  > 
                        {/*פרטי משתמש                   */}
                    <CardMedia style={{height: 200, width:300}}
                        image={this.getImagePath()}
                        title={this.state.person.Name}
                        />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        My name is {this.state.person.Name}
                    </Typography>
                    <Typography component="p">
                        Gender: {this.state.person.Gender}
                    </Typography>
                    <Typography component="p">
                        Age: {this.state.person.Age} years old
                    </Typography>
                    <Typography component="p">
                        Height: {this.state.person.Height}
                    </Typography>
                    <Typography component="p">
                        Premiun: {this.premiumFunc()}
                    </Typography>
                    <Typography component="p">
                        Hobbies: {this.hobbiesfunc()}
                    </Typography>
                    </CardContent>
            
                <CardActions>
                    <Button variant="flat" size="small"  onClick={this.setBack}>
                    <img src="https://cdn4.iconfinder.com/data/icons/sibcode-line-simple/512/back-512.png" alt="pre"  style={{height:30, width:30}}/>
                    </Button>
                    <Button variant="flat" size="small" onClick={this.SetPersonLove}  >
                        <img id="loveimg" src={this.getLoveImage()} alt="love"  style={{height:30, width:30}}/>
                    </Button>
                    {/* <BottomNavigation  onClick={this.setPersonLove} >
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    </BottomNavigation> */}   
                    <Button variant="flat" size="small" onClick={this.setNext}>
                    <img src="https://www.pngrepo.com/download/257441/next.png" alt="next"  style={{height:30, width:30}}/>
                    </Button>
                </CardActions>
                 </Card>
                </Grid> 
                        
            </div>            
        )
    }

}

export default Persons;