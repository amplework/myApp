import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const MyList = (props) => {
  const { onClick, listItems } = props;

  return listItems.length > 0 ? (
    listItems.map((item, index) => {
      return (
        <div style={styles.listConatiner}>
          <p style={styles.nametxt}>{item}</p>
          <div
            style={styles.iconContainer}
          >
            <IoIosRemoveCircleOutline
              size={33}
              color={"white"}
              onClick={() => onClick(item, index)}
            />
          </div>
        </div>
      );
    })
  ) : (
    <div style={{ ...styles.addItemContainer, marginTop: "10%" }}>
      <p style={styles.emptyListtxt}>No items</p>
    </div>
  );
};

export default MyList;

const styles = {
  listConatiner: {
    backgroundColor: "#8333FF",
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px",
    borderColor: "white",
    margin: 15,
    height: "40px",
    alignItems: "center",
    // padding: 8,
    justifyContent: "space-between",
    flex:1,
    width:'100%'
  },
  nametxt: {
    fontSize: "20px",
    paddingLeft: "15px",
    fontweight: "700",
    color: "white",
    fontFamily: "Days One",
  },
  emptyListtxt: {
    fontSize: "50px",
    color: "rgb(109,109,109)",
    alignSelf: "center",
    fontFamily: "Days One",
  },
  addItemContainer: {
    alignSelf: "center",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  iconContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight:'10px'
  }
};
