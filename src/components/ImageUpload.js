import React from 'react';
import './styling/ImageUpload.css';
import {updateTodoImg} from "../actions";
import {connect} from "react-redux";



class ImageUpload extends React.Component {
  constructor(props) {

    //console.log(props);

    super(props);
    this.state = {
      id: props.id,
      file: props.file
    };

    this.dispatch = props.dispatch;
    //this.file = props.file;

    this._handleImageDataLoad = this._handleImageDataLoad.bind(this);

  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  componentWillReceiveProps(props){
    this.setState({
      id: props.id,
      file: props.file,
    });
  }

  _handleImageDataLoad(e){

    //console.log(e);

    //console.log(e.currentTarget.result);

    this.setState({
      file: e.currentTarget.result
    });

    console.log(e.currentTarget.result.slice(0,40));

    this.dispatch(updateTodoImg(this.state.id, e.currentTarget.result));

  }


  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    //let dataAsUrl = null;

    //console.log(dataAsUrl + '');


    //var file    = document.querySelector('input[type=file]').files[0];
    //var reader  = new FileReader();

    /*reader.addEventListener("load", function () {
      //preview.src = reader.result;
      dataAsUrl = reader.readAsDataURL(file);

      this.setState({
        file: dataAsUrl,
        imagePreviewUrl: null
      });

      console.log("dataAsUrl: ", dataAsUrl);
    }, false);*/

    reader.addEventListener("load", this._handleImageDataLoad, false);

    /*if (file) {
      dataAsUrl = reader.readAsDataURL(file);
    }*/



    //let imagePreviewUrl = reader.result;

    //console.log(imagePreviewUrl);

    /*reader.onloadend = () => {
      this.setState({
        file: dataAsUrl,
        //,
        //imagePreviewUrl: reader.result
        imagePreviewUrl: null

      });
    }*/

    //dispatch(updateTodoImg(file))

    //this.dispatch(updateTodoImg(file, reader.result));

    reader.readAsDataURL(file)
  }

  render( ) {
    let {file} = this.state;
    let $imagePreview = null;
    if (file) {
      $imagePreview = (<img alt={'alt text'} src={file} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    //console.log("ImageUpload Render: ", onClick, completed, text, file, dispatch);

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
                 type="file"
                 onChange={(e)=>this._handleImageChange(e)} />
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

ImageUpload = connect()(ImageUpload)

export default ImageUpload;

//// /ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));
