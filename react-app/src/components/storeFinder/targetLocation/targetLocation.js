import React from "react";
import { Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './targetLocation.css'
import storeJson from '../locations/storeJson.js'
import {BiLeftArrow} from 'react-icons/bi'
import {FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa'
import DayCard from './dayCard/dayCard'

function TargetLocation(props){
    const filteredStore = storeJson.filter(store => store.id === props.id)

function getDirections(){

    window.open(`https://www.google.com/maps/dir/?api=1&destination=${filteredStore[0].escapedUrlAddress}`, "_blank")
}

function determineButtonNumber(){
    if (filteredStore[0].type.Rec && filteredStore[0].type.Med){
        return(
            <div>
                <button onClick={()=>{chooseMenu(filteredStore[0].type.Rec)}}className='tri button'>SHOP REC</button>
                <button onClick={()=>{chooseMenu(filteredStore[0].type.Med)}}className='tri button'>SHOP MED</button>
                <button onClick={()=>{getDirections()}}className='tri button'>DIRECTIONS </button>
            </div> 
        )
    } 
    if (filteredStore[0].type.Rec && !filteredStore[0].type.Med){
        return(
            <div>
                <button onClick={()=>{chooseMenu(filteredStore[0].type.Rec)}} className='duo button'>SHOP REC</button>
                <button onClick={()=>{getDirections()}} className='duo button'>DIRECTIONS</button>       
            </div> 
        )
    }
    if (!filteredStore[0].type.Rec && filteredStore[0].type.Med){
        return(
            <div>
                <button onClick={()=>{chooseMenu(filteredStore[0].type.Med)}}className='duo button'>SHOP MED</button>
                <button onClick={()=>{getDirections()}} className='duo button'>DIRECTIONS</button>         
            </div> 
        )
    }
    else{
        
    
    }
}
function goBack(){
    props.callBack({id:''})
}
function chooseMenu(id){
    props.menuChosen({menu:id})
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}

    return(
        <div>
            <Container className='containerPadding stickyContainer'>
                <Row>
                    <div className='backDiv'><button onClick={()=>goBack()} className='backButton'><BiLeftArrow size={28}/></button></div>
                    <img className='logo' src={`${process.env.PUBLIC_URL}${filteredStore[0].logoPinch}`} alt=''></img>
                </Row>
                <Row>
                   <div className='buttonContainer'>{determineButtonNumber()}</div>
                </Row>
            </Container>
            <Container className='containerPadding'>
                <div className='storeLocation'>
                    <img className='storeImage' src={`${process.env.PUBLIC_URL}${filteredStore[0].exteriorStore}`} alt=''></img>
                </div>
                <div className='phoneAndAddress'>
                    <div className='innerPhoneAndAddress'>
                        <div className='locationIcon'><FaMapMarkerAlt size={56}></FaMapMarkerAlt></div>
                        <h4 className='hoverAddress' onClick={()=>{getDirections()}}>{filteredStore[0].address1}</h4>
                        <h4 className='hoverAddress' onClick={()=>{getDirections()}}>{filteredStore[0].address2}</h4>
                        <div className='phoneIcon'><FaPhoneAlt size={56}></FaPhoneAlt></div>
                        <h4 className='phoneNumber'><a className='phoneLink' href={filteredStore[0].phoneLink}>{filteredStore[0].phone}</a></h4>
                    </div>
                   
                </div>
                <div className='Hours'>
                    <h4>Hours</h4>
                    <DayCard store={filteredStore}></DayCard>
                </div>
                <div>
                    <img className='storeImage' src={`${process.env.PUBLIC_URL}${filteredStore[0].interiorStore}`}  alt=''></img>
                </div>
                <div className='storeDescription'>
                    <h4> Lorem ipsum <br></br> dolor sit amet</h4>
                    <p>{filteredStore[0].storeDescription}</p>
                </div>
            </Container>
        </div>
    )
}

export default TargetLocation;