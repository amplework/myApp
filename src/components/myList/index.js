import React from "react";
import { VscArrowCircleRight } from "react-icons/vsc";
import {  IoIosRemoveCircleOutline } from "react-icons/io";


const MyList = (props) => {
  const { name, onClick } = props;

  return (
    <div style={styles.listConatiner}>
      <p style={styles.nametxt}>{name}</p>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <IoIosRemoveCircleOutline size={33} color={"white"} onClick={onClick}/>
        </div>
    </div>
  );
};

export default MyList;

const styles = {
  listConatiner: {
    backgroundColor: "#8333FF",
    // border: "2px solid #FF9C33",
    display:'flex',
    flexDirection:'row',
    borderRadius:'20px',
    borderColor: 'white',
    margin:15,
    height:'40px',
    alignItems:'center',
    padding:8,
    justifyContent:'space-between'
  },
  nametxt:{
    fontSize:'20px',
    paddingLeft:'15px',
    fontweight:'700',
    color:'white',
    fontFamily: 'Days One'
  }
};
