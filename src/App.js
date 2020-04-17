import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import './Post.js'
import Post from './Post.js';
// import { ReactComponent } from '*.svg';

//{()=>{window.open(this.props.url)}}>
class NavButton extends React.Component{

  
  
    // constructor(props){
    //   super(props)
    //   this.state={
    //     name:this.props.name,
    //     link:this.props.link,
    //     func:this.props.changeView
    //   }
    // }
  
  click(){
    this.props.changeView(this.props.name)
  }
  render(){
    console.log("hey");
    
    return(
      <button className="button" onClick= {this.click.bind(this)}>   
        {this.props.name}
      </button>
   )
  }
}


class Navbar extends React.Component{

  // constructor(props){
  //   super(props);

  // }
  
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
        <div className="navcol" >
          <div style={{width:"24%"}}></div>
          <div style={{width:"48%" }} id="heading">MyWebsite</div>
          <div style={{width:"7%",marginRight:"7px"}}>{this.renderButton('HOME',"https://www.google.com")}</div>
          <div style={{width:"7%",marginRight:"7px"}}>{this.renderButton('MY PAGE',"https://www.google.com")}</div>
          <div style={{width:"7%",marginRight:"7px"}}>{this.renderButton('ADD POST',"https://www.google.com")}</div>
          <div style={{width:"7%",marginRight:"7px"}}>{this.renderButton('ABOUT',"https://www.google.com")}</div>

        </div>
      // </div>
    )
    
  }
}
class SideBar extends React.Component{
  
  render(){
      return(
        <div style={{width:"20%"}} className="SideMenu">

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
          <Post user="Rohan" likes="120" content="Hello Friends"/>
          <Post user="Aditi" likes="120" content="Hello Friends"/>
          <Post user="Raghav" likes="120" content="Hello Friends"/>
          <Post user="Rochan" likes="120" content="Hello Friends"/>
        </div>
        <FriendsBar/>

      </div>
    )
  }
}
class About extends React.Component{
  render(){
    return(
      <div>
        <p align='center'>About Page</p>
      </div>
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
      <div>
        <p align='center'>AddPost</p>
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

  constructor(props){
    super(props)
    this.state={
      view:'HOME'
    }
    this.changeView=this.changeView.bind(this)
  }
  

  changeView(viewnum){
    
    this.setState({
      view: viewnum
    })

  }

  display(){

    if(this.state.view==='HOME')
    {
      return <Home/>
    }
    else if(this.state.view==='ABOUT')
    {
      return <About/>
    }
    else if(this.state.view==='MY PAGE')
    {
      return <MyPage/>
    }
    else if(this.state.view==='ADD POST')
    {
      return <AddPost/>
    }
  }
  
  
  render(){
    return(
      <div className="row" >
          <Navbar changeView={this.changeView}/>
          <div className="Bodydiv">
            {this.display()}
            
          </div>
      </div>
    )
  }
}




ReactDOM.render(
  <Page />,
  // <App/>,
  document.getElementById('root')
)

 