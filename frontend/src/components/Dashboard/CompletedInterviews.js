import React from "react";
import { Button, Typography, Box, Rating, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./CompletedInterviews.css";
import Navbarlogedin from "./Navbarlogedin";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@mui/icons-material/Edit";
// import ReadMoreReact from "read-more-react";
import { Grid } from "@mui/material";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const CompletedInterviews = () => {
  const [value, setValue] = React.useState(3.5);
  const [hover, setHover] = React.useState(-1);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbarlogedin />
      <div className="upcoming-interview">
        <div className="inteviews-container"></div>
        <h1>Completed Interviews</h1>
        <div className="interview-cont">
          <div className="interviews-list">
            <div className="interview-item">
              <div className="interview-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn view-btn">View Profile</button>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>SDE, Google, California</p>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Data Science</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Price</p>
                    <p className="detail-body">INR 900</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">30 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Interview Slot</p>
                    <p className="detail-body">[5:00PM - 5:45PM]</p>
                    <p className="detail-body">20 June, 2022</p>
                  </div>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "red",
                      }}
                      onClick={handleOpen}
                    >
                      Rate and Review
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Box
                          sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                          }}
                        >
                          <IconButton onClick={handleClose}>
                            <CloseIcon />
                          </IconButton>
                        </Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          sx={{ textAlign: "center" }}
                        >
                          Rate and Review
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Please Rate and Review your Interview Experience.
                        </Typography>
                        <Box
                          sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          {value !== null && (
                            <Box sx={{ ml: 2 }}>
                              {labels[hover !== -1 ? hover : value]}
                            </Box>
                          )}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <TextField
                            id="outlined-multiline-static"
                            label="Review"
                            multiline
                            rows={4}
                            sx={{
                              mb: 2,
                            }}
                          />
                          <Button variant="outlined">Submit</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="interview-item">
              <div className="interview-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn view-btn">View Profile</button>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>SDE, Google, California</p>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Data Science</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Price</p>
                    <p className="detail-body">INR 900</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">30 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Interview Slot</p>
                    <p className="detail-body">[5:00PM - 5:45PM]</p>
                    <p className="detail-body">20 June, 2022</p>
                  </div>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <Grid container spacing={0} sx={{ width: "100%" }}>
                      <Grid item xs={8}>
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={0.5}
                          getLabelText={getLabelText}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <EditIcon onClick={handleOpen} />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <ReadMoreReact
                          text={"This is an example of a longer sentence that needs to be split up, since it is over ideal length of 100 characters. When the sentence goes past the max allowed characters, the module will find the first punctuation character that is closest to the ideal length to cut it off."}
                          min={80}
                          ideal={100}
                          max={200}
                          readMoreText={"Read More"}
                        /> */}
                        <div classNaame="container">
                          <ReadMore>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                            line in section 1.10.32.
                          </ReadMore>
                        </div>
                      </Grid>
                    </Grid>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Box
                          sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                          }}
                        >
                          <CloseIcon onClick={handleClose} />
                        </Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          sx={{ textAlign: "center" }}
                        >
                          Rate and Review
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Please Rate and Review your Interview Experience.
                        </Typography>
                        <Box
                          sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          {value !== null && (
                            <Box sx={{ ml: 2 }}>
                              {labels[hover !== -1 ? hover : value]}
                            </Box>
                          )}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <TextField
                            id="outlined-multiline-static"
                            label="Review"
                            multiline
                            rows={4}
                            sx={{
                              mb: 2,
                            }}
                          />
                          <Button variant="outlined">Submit</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedInterviews;
