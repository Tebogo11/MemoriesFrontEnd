import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    backgroundColor: "#001E41",
    width: "100%",
  },
  image: {
    backgroundColor: "#001E41",
    height: 73,
    marginLeft: -35,
    marginTop: -3,
  },
}));
