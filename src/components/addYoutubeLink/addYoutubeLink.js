import React, { useState } from "react";
import axios from "../../api/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./addYoutubeLink.scss";
import Loader from "../loader/loader";
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth (
  function AddYoutubeLink(props) {
    const nameRef = React.createRef();
    const imageRef = React.createRef();
    const youtubeRef = React.createRef();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
  
    function handleSubmit(event) {
      event.preventDefault();
      if (
        nameRef.current.value === "" ||
        imageRef.current.value === "" ||
        youtubeRef.current.value === ""
      ) {
        setErrorMessage("enter all details");
        return;
      }
      setLoading(true);
      axios
        .post("/youtube", {
          name: nameRef.current.value,
          imageUrl: imageRef.current.value,
          youtube: youtubeRef.current.value,
        })
        .then((resp) => {
          setLoading(false);
          console.log(resp);
          setErrorMessage(null);
          setSuccessMessage("Data added successfully..");
        })
        .catch((err) => {
          setLoading(false);
          setSuccessMessage(null);
          setErrorMessage("Data could not be added successfully..");
        });
    }
  
    function handleDelete(event) {
      event.preventDefault();
      if (nameRef.current.value === "") {
        setErrorMessage("enter name");
        return;
      }
      setLoading(true);
      axios
        .delete(`/youtube/${nameRef.current.value}`, {
          name: nameRef.current.value,
        })
        .then((resp) => {
          setLoading(false);
          setSuccessMessage("Data removed successfully..");
          setErrorMessage(null);
        })
        .catch((err) => {
          setLoading(false);
          setErrorMessage(null);
          setSuccessMessage(null);
          setErrorMessage("Data could not be removed...");
        });
    }
    return (
      <>
        {!loading ? (
          <form autoComplete="off" className="addYoutubeLinkForm">
            {successMessage && (
              <div className="addYoutubeLinkForm__message success">{successMessage}</div>
            )}
            <TextField
              inputRef={nameRef}
              id="outlined-basic-1"
              label="name"
              variant="outlined"
            />
            <TextField
              inputRef={imageRef}
              id="outlined-basic-2"
              label="image-url"
              variant="outlined"
            />
            <TextField
              inputRef={youtubeRef}
              id="outlined-basic-3"
              label="youtube-url"
              variant="outlined"
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              type="submit"
            >
              Add data
            </Button>
  
            <Button
              onClick={handleDelete}
              variant="contained"
              color="primary"
              type="submit"
            >
              Delete Data
            </Button>
  
            <Button
              onClick={()=>props.authService.logout()}
              variant="contained"
              color="secondary"
              type="submit"
            >
             Logout
            </Button>

            {errorMessage && (
              <div className="addYoutubeLinkForm__message error">{errorMessage}</div>
            )}
          </form>
        ) : (
          <Loader />
        )}
      </>
    );
  }
)
