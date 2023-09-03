import React, { Component } from 'react';

class ImageList extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    // Fetch the list of images from the PHP endpoint
    fetch('http://localhost/list-images.php')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ images: data });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }

  render() {
    const { images } = this.state;

    return (
      <div>
        <h2>List of Images</h2>
        <div className="image-list">
          {images.map((image, index) => (
            <img
              key={index}
              src={`data:image/png;base64,${image}`}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImageList;
