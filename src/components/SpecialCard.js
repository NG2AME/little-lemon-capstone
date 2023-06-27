import React from 'react'
import '../styles/SpecialCard.css';


class SpecialCard extends React.Component {

  render() {

    

    const image_path = "./images/" + this.props.src;

    return <div className="photo-entry-block" >
              <a href={image_path}>
                 <img className="photo-img" src={image_path} alt={image_path} />
              </a>
              <h5>{this.props.title}</h5>
              <h6>{this.props.price}</h6>
             <p>{this.props.description}</p>
             <h6>{this.props.order}</h6>
        
           </div>
  }

}

export default SpecialCard;
