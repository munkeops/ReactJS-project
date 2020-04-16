import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';


class NavButton extends React.Component{
  render(){
    console.log("hey")
    return(
      <button className="button" onClick={()=>{window.open(this.props.url)}}>
        {this.props.name}
      </button>
   )
  }
}


class Navbar extends React.Component{
  
  renderButton(namebut,link){
    
    return(
        <NavButton
        name={namebut}
        url={link}
        />

    )
  }
  render(){
    return(
      // <div className="Navbardiv">
        <div className="navcol" >
          <div style={{width:"24%"}}></div>
          <div style={{width:"52%" }} id="heading">MyWebsite</div>
          <div style={{width:"6%",marginRight:"7px"}}>{this.renderButton('HOME',"https://www.google.com")}</div>
          <div style={{width:"6%",marginRight:"7px"}}>{this.renderButton('ABOUT',"https://www.google.com")}</div>
          <div style={{width:"6%",marginRight:"7px"}}>{this.renderButton('MOVIES',"https://www.google.com")}</div>
          <div style={{width:"6%",marginRight:"7px"}}>{this.renderButton('CONTACT',"https://www.google.com")}</div>
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
class Page extends React.Component{

  render(){
    return(
      <div className="row" >
          <Navbar/>
          <div className="Bodydiv">
            <SideBar/>
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

 