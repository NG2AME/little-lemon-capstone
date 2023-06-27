import React from 'react';
import SpecialCard from '../components/SpecialCard';
import entries from '../assets/photo-entries';

class Special extends React.Component {

  render() {

    

    console.log(entries);

      return (
          <>
              
              <div className="flex-container">
        
        {
        entries.itemlist.map((photo) => {
          return <SpecialCard key={photo.src} src={photo.src} title={photo.title} price={photo.price} description={photo.description} order={photo.order} /> }
        )
        }
      </div>
        </>
        
    )

  }

}

export default Special;
