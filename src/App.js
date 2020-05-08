import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import './Post.js'
import Post from './Post.js';
import Chat from './Chat.js'
import ImageUpload from './Upload.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { ReactComponent } from '*.svg';

//{()=>{window.open(this.props.url)}}>
// class MenuDrop extends React.Component{
//   state = {
//       toggle:false
//   }
//   Toggle = () => {
//       this.setState({toggle:!this.state.toggle})
//   }
//   render() {
//       return (
//         <>
//             <div className="navBar">
//                   <button onClick={this.Toggle}>
//                       <FaAlignRight />
//                   </button>
//                   <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
//                       <li href="#">Home</li>
//                       <li href="#">About us</li>
//                       <li href="#">Contact</li>
//                   </ul>
//             </div>
//         </>
//       );
//   }
// }
class NavButton extends React.Component{
  
  
  render(){
    console.log("hey");
    
    return(
      <button id="button1" >   
        {this.props.name}
      </button>
   )
  }
}


class NavBar extends React.Component{

  state = {
    toggle:false
  }
  Toggle = () => {
      this.setState({toggle:!this.state.toggle})
  }
  view(){
    if(this.state.toggle===true){
      return(
        <div className="DroppedMenu" onClick={this.Toggle}>
          {/* <Router> */}
            <ul id="menulist">
              <li><Link to="/home">{this.renderButton('HOME')}</Link></li>
              <li><Link to="/mypage">{this.renderButton('MY PAGE')}</Link></li>
              <li><Link to="/addpost">{this.renderButton('ADD POST')}</Link></li>
              <li><Link to="/about">{this.renderButton('ABOUT')}</Link></li>
            </ul>
          {/* </Router> */}
          
        </div>
      )
    }
  }
    
  renderButton(namebut,link){
    
    return(
        <NavButton
          name={namebut}
          url={link}
          changeView={this.props.changeView}
        />

    )
  }
  render(){
    return(
      // <div className="Navbardiv">
        <div className="NavBar" >
          <div className="Heading"><h1>ScrapBook</h1></div>
          {/* <Nav/> */}

          
          {/* <Router> */}
            <div id="view1" className="NavButtons">
              <Link to="/home">{this.renderButton('HOME')}</Link>
              <Link to="/mypage">{this.renderButton('MY PAGE')}</Link>
              <Link to="/addpost">{this.renderButton('ADD POST')}</Link>
              <Link to="/about">{this.renderButton('ABOUT')}</Link>
            </div>            
          {/* </Router>  */}
          <div id="view2" className="NavButtons">
            <button className="DropMenu" id="button1" onClick={this.Toggle}>
              {/* <img src="https://img.icons8.com/bubbles/50/000000/menu.png"/> */}
              {/* {this.renderButton('MENU',"LMAO")} */}
              MENU
            </button>
            {this.view()}
          </div>

          
        </div>
    )
    
  }
}

// class 
class SideBar extends React.Component{
  
  render(){
      return(
        <div  className="SideBar">

        </div>
    )    
  }
}
class FriendsBar extends React.Component{

  render(){
    return (
      <div className="FriendsBar">
        <ul>
          <li>Rohan</li>
          <li>Raghav</li>
          <li>Rochan</li>

        </ul>
      </div>
    )
  }
}

class Home extends React.Component{

  render(){
    return(
      <div className="Home">
        <SideBar/>
        <div className="Posts">
          <ul id="listpost">
            <li><Post user="Rohan" likes="120" content="Hello Friends"/></li>
            <li><Post user="Qurram" likes="120" content="Hello Friends"/></li>
            <li><Post user="Raghav" likes="120" content="Hello Friends"/></li>
            <li><Post user="Rochan" likes="120" content="Hello Friends"/></li>
            <li><Post user="Anchit" likes="120" content="Hello Friends"/></li>
            <li><Post user="Mak" likes="120" content="Hello Friends"/></li>
            <li><Post user="Rochan" likes="120" content="Hello Friends"/></li>

          </ul>
        </div>
        {/* <Chat/> */}

      </div>
    )
  }
}
class About extends React.Component{
  render(){
    return(
      // <div className="About">
        <p align='center'>About Page</p>
      // </div>
    )
  }
}

class MyPage extends React.Component{
  render(){
    return(
      <div>
        <p align='center'>My Page</p>
      </div>
    )
  }
}

class AddPost extends React.Component{
  render(){
    return(
      <div className="Addpost">
        <SideBar/>
        <ImageUpload/>
      </div>
    )
  }
}

// class HomePage extends React.Component{
//   constructor(props){
//     super(props)
//   }
// }
class Page extends React.Component{

  // constructor(props){
  //   super(props)
  //   this.state={
  //     view:'HOME'
  //   }
  //   this.changeView=this.changeView.bind(this)
  // }
  

  // changeView(viewnum){
    
  //   this.setState({
  //     view: viewnum
  //   })

  // }

  // display(){

  //   if(this.state.view==='HOME')
  //   {
  //     return <Home/>
  //   }
  //   else if(this.state.view==='ABOUT')
  //   {
  //     return <About/>
  //   }
  //   else if(this.state.view==='MY PAGE')
  //   {
  //     return <MyPage/>
  //   }
  //   else if(this.state.view==='ADD POST')
  //   {
  //     return <AddPost/>
  //   }
  // }
  
  
  render(){
    return(
      <div className="Page" >
        <Router>
          <NavBar/>
          <div className="Bodydiv">
            <Switch>
              <Route exact path="/home">
                  <Home/>
              </Route>
              <Route exact path="/addpost">
                  <AddPost/>
              </Route>
              <Route path="/mypage">
                  <MyPage/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
            </Switch>
            </div>  
        </Router>
          
                  
      </div>
    )
  }
}




ReactDOM.render(
  <Page />,
  // <App/>,
  document.getElementById('root')
)

 