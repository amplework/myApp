import React from "react";
import MyList from "./components/myList";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import "./App.css";

const List = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputValue, setinputValue] = React.useState("");
  const [listItems,setListItems] = React.useState([])

  function openModal() {
    setinputValue('')
    setIsOpen(true);
  }

  function onAdditem() {
    listItems.push(inputValue);
    setIsOpen(false);
  }

  function onRemoveItem(item,index) {
    const result = listItems.filter(checkResult);

    function checkResult(val) {
      return val != item;
    }
    setListItems(result)
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <div style={styles.listHeadingContainer}>
        <h1 style={styles.listHeadingTxt}>All Movies List Items</h1>
        <div style={styles.addIconContainer}>
          <IoIosAddCircleOutline
            size={50}
            color={"black"}
            onClick={openModal}
          />
        </div>
      </div>
      {listItems.length > 0 ? listItems.map((item, index) => {
        return <MyList name={item} onClick={() => onRemoveItem(item,index)}/>;
      }) : 
      <div  style={{...styles.addItemContainer, marginTop:'10%'}} >
          <p style={styles.emptyListtxt}>No items</p>
      </div>
       }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles.content}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 style={styles.addItemContainer}>Add Item</h2>
        <form style={{ ...styles.addItemContainer, marginTop: "30px" }}>
          <label style={{ ...styles.addItemContainer, marginLeft: "20px" }}>
            Item:
          </label>
          <input
            style={styles.inputContainer}
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
        </form>
        <div onClick={onAdditem} style={styles.buttonConatiner}>
          <p style={styles.buttontxt}>Add</p>
        </div>
      </Modal>
    </div>
  );
};

export default List;

const styles = {
  listHeadingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "10px",
    marginRight: "10px",
  },
  listHeadingTxt: {
    fontWeight: "500",
  },
  addIconContainer: {
    marginTop: "15px",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  addItemContainer: {
    alignSelf: "center",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonConatiner: {
    backgroundColor: "rgb(109,109,109)",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    margin: 18,
    borderRadius:'30px'
  },
  inputContainer: {
    width: "100%",
    height: "40px",
    margin: "20px",
  },
  emptyListtxt:{
    fontSize:'50px',
    color:'rgb(109,109,109)',
    alignSelf:'center',
    fontFamily: 'Days One'
  },
  buttontxt:{
    fontSize:'15px',
    fontWeight:'500',
    color:'white'
  }
};
