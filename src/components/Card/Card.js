import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rental from '../../assets/images/rental.png';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   
  }));
  const characters = [
  {
    id: 1,
    name: "Rentals",
    image1: <img src={Rental} style={{width:'85%'}}></img>,
    image2:<svg width="16" height="16" viewBox="0 0 16 16" style={{fill:'currentColor'}} aria-hidden="true" focusable="false"><path d="m11.169 8.27.37-.401c.74-.802.71-2.067-.092-2.838L8.794 2.533a2.031 2.031 0 0 0-2.837.092l-3.424 3.67c-.74.803-.71 2.067.092 2.838l2.653 2.468c.802.77 2.066.71 2.838-.093l.339-.339.493.463 1.296.123.216 1.295.586.556h3.423l.031-2.252-3.331-3.084zm-5.428-.68c-.494-.462-.494-1.234-.062-1.727a1.22 1.22 0 0 1 1.727-.062 1.22 1.22 0 0 1 .062 1.728c-.463.524-1.234.524-1.727.061zm7.556 4.843H11.54l-.154-.864-.154-.895-.895-.092-.894-.093-.216-.185 1.141-1.203 2.93 2.745v.587z"></path></svg>, 
    text1:"Seamless",
},
  {
    id: 2,
    name: "Rentals",
    alignment: "hero"
  },
  {
    id: 3,
    name: "Rentals",
    alignment: "hero"
  },
  {
    id: 4,
    name: "Rentals",
    alignment: "hero"
  },
  {
    id: 5,
    name: "Rentals",
    alignment: "hero"
  },
  {
    id: 6,
    name: "Rentals",
    alignment: "hero"
  },
];

const CardListItem = props => {
    return (
        <Card
          className="Card"
          style={{
            width: "210px",
            border: "solid 3px #d3d3d3",
          }}
        >
          <p>
            <strong style={{fontSize:'1.5rem'}}>{props.character.name}</strong>
          </p>
          <p>{props.character.image1}</p>
          <p>{props.character.image2} </p>
          <p>{props.character.text1} </p>
          <p>{props.character.text2} </p>
        </Card>
    );
  };
  
  

  export default function CardMain() {
    const classes = useStyles();
    return(
        <div>
            {characters.map(character => {
                return <CardListItem character={character} key={character.name} />;
            })}
        </div>    
    )}