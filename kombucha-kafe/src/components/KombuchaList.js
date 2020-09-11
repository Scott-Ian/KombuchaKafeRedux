import React from 'react';
import KombuchaCard from './KombuchaCard';
import TopSellers from './TopSellers';
import PropTypes from 'prop-types';

function KombuchaList(props) {

  const tempKombuchaList = [
    {
      name: "Ginger Peach",
      brewery: "Dave's Killer Kool-Aide",
      price: 8,
      description: "A tantalizing tase of ginger and peach awash the tongue in this beautiful concotion",
      imgURL: "#",
      id: 1
    },
    {
      name: "Honey Hibiscus",
      brewery: "Margaret's Manse",
      price: 10,
      description: "Your tastebuds will be blown away by this sweet drink with a floral aroma",
      imgURL: "#",
      id: 2
    }
  ];

  return(
    <React.Fragment>
      <hr/>
      <TopSellers topSellers={props.topSellers}/>
      {tempKombuchaList.map((kombucha) =>
        <KombuchaCard
          whenKombuchaClicked = {props.onKombuchaSelection}
          order={props.placeOrder}
          name={kombucha.name}
          brewery={kombucha.brewery}
          price={kombucha.price}
          description={kombucha.description}
          imgURL={kombucha.imgURL}
          quantity={kombucha.quantity}
          id={kombucha.id}
          key={kombucha.id} />
      )}
    </React.Fragment>
  );
}

KombuchaList.propTypes = {
  onKombuchaSelection: PropTypes.func,
  placeOrder:PropTypes.func,
  kombuchaList: PropTypes.array,
  topSellers: PropTypes.array,
};

export default KombuchaList;