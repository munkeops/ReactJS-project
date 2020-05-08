import React from 'react';
// import ReactDOM from 'react-dom';
import Post from './Post.js'
import './Upload.css'

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      this.forceUpdate()
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        // $temp=(<img src={imagePreviewUrl} />);
        $imagePreview = <Post user="Rohan" likes="120" img={imagePreviewUrl} content="text"/>
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} >
                
            </input>
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          {/* <Post user="Rohan" likes="120" content= */}
            {/* <div className="imgPreview"> */}
                {$imagePreview} 
            {/* </div>)  */}
          {/* {/* /> */}
        </div>
      )
    }
  }

  export default ImageUpload