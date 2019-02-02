import React from 'react';
import './Person.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import RouteButton2 from './routeButton2.js';


class Persons extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentIndex:0, 
            minAge: this.props.location.minAge,
            maxAge: this.props.location.maxAge,
            gender: this.props.location.gender,
            persons:this.props.location.data,  
            person:this.props.location.data[0],
            checklove:false,
            listLove:[]
        }         
        this.setNext = this.setNext.bind(this);
        this.setBack = this.setBack.bind(this);
        this.setPerson=this.setPerson.bind(this);
        this.getBackUrl = this.getBackUrl.bind(this);
        this.getImagePath = this.getImagePath.bind(this);
        this.SetPersonLove = this.SetPersonLove.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this) 
        this.handledelTodoItem = this.handledelTodoItem.bind(this)

        console.log('Person array:');
        console.log(this.props.location.data);
    }

    setPerson =(p)=>{
        console.log("Inside setPerson");
        this.setState({person: p});//this.state.persons[this.state.currentIndex]});
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
        // if(nextPersonIndex== this.state.listLove.length){
        //     console.log(nextPersonIndex);
        //     if(this.state.listLove[i].Id === this.state.persons[nextPersonIndex].Id){
        //         IsExsits=true;
        //     }
        // }
          }
          console.log(IsExsits);
          if(IsExsits===true){
        document.getElementById("loveimg").src = "https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-1/40/favorite-512.png";
        }
        else{
            this.setState({checklove:false});
            document.getElementById("loveimg").src = "https://cdn3.iconfinder.com/data/icons/vote/16/heart_love_favorite-512.png";

        }
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
          if(IsExsits===true){
            document.getElementById("loveimg").src = "https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-1/40/favorite-512.png";
            }
            else{
                this.setState({checklove:false});
                document.getElementById("loveimg").src = "https://cdn3.iconfinder.com/data/icons/vote/16/heart_love_favorite-512.png";

            }
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
        // return this.state.person.ArrayHobbies == undefined ? this.state.person.ArrayHobbies = "No hobbies" : this.state.person.ArrayHobbies;
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
       this.state.checklove===false ? this.setState({checklove: true}): this.setState({checklove: false})
       console.log(this.state.checklove)   
       //הוספת האדם הנוכחי מהרשימה של אהבתי
       if(this.state.checklove===true){
          alert("You selected him as a preferred person");
          document.getElementById("loveimg").src = "https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-1/40/favorite-512.png";
          this.handleAddTodoItem() 
    
       }
       //מחיקה האדם הנוכחי מהרשימה של אהבתי
       else{
        alert("You not selected him as a preferred person");
        if(this.state.listLove.length!==0){
           this.handledelTodoItem();
           document.getElementById("loveimg").src = "https://cdn3.iconfinder.com/data/icons/vote/16/heart_love_favorite-512.png";
        }
       }
       
       
      
//....
//להכניס לבסיס הנתונים טבלה חדשה שמכילה את האנשים שנבחרו כאהבתי
///....

    }
    render() {
        
        return (
            <div>   
                {/* תפריט*/}
                <AppBar position="static" color="default" >
               <Toolbar>
                   <Typography >
                   <Button variant="flat" size="small" href={this.getBackUrl()}>
                   <img src="https://image.flaticon.com/icons/svg/122/122637.svg" alt="back"/>
                    </Button>
                   </Typography>
                   <Typography >
                   <RouteButton2 value="view list love" pathname="/LoveList" data={this.state.listLove}/>
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
                    <img id="loveimg" src="https://cdn3.iconfinder.com/data/icons/vote/16/heart_love_favorite-512.png" alt="love"  style={{height:30, width:30}}/>
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