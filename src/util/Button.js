import React from "react"

const styles = {
  btn: {
    backgroundColor: "black",
    cursor: "pointer",
    border: "none",
    color: "white",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    padding: "6px 16px",
    width: "100%",
    minWidth: 64,
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    lineHeight: 1.75,
    borderRadius: 4,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-around",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "white"
    }
  },
};


const Button = ({children, type, onClick}) => {
  
  return(
    <button style={styles.btn} onClick={onClick} type={type}>
     {children}
    </button>
  )
}

export default Button;