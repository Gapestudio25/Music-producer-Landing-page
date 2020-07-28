import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {
  Modal as ModalUi,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Container,
  makeStyles,
  Backdrop,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    background: 'linear-gradient(180deg, rgba(1,0,117,1) 0%, rgba(134,1,13,1) 100%)',
  },
  cardHeader: {
    padding: theme.spacing(5, 5, 3),
    color: '#ffffff',
  },
  cardContent: {
    width: '80vw',
    maxWidth: 700,
    maxHeight: '60vh',
    padding: theme.spacing(0, 5),  },
  cardBottom: {
    padding: theme.spacing(0, 5, 5),
  },
  form: {
    width: '100%',
  },
  inputs: {
    background: '#ffffff',
    borderRadius: 8,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#010075',
    color: '#ffffff',
    '&:hover': {
      background: 'rgba(1, 0, 117, .8)',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Modal = ({open, close}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleCloseModal = () => {
    close(false);
  };
  
  const encode = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k]);
    });

    return formData;
  };

  const handleSubmit = e => {
    const data = {'form-name': 'contact', name, email};
    
    fetch('/', {
      method: 'POST',
      body: encode(data),
    })
      .then(() => {
        handleCloseModal();
        alert('Form Submission Successful!!');
      })
      .catch(error => {
        handleCloseModal();
        alert('Form Submission Failed!');
        console.log(error);
      });

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target;

    if (name === 'name'){
      return setName(value);
    }
    if (name === 'email'){
      return setEmail(value);
    }
  };

  return (
    <ModalUi
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={classes.modal}
      open={open}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              title={
                <>
                  <Typography align="center" component="h1" variant="subtitle1">
                    SIGN UP FOR
                  </Typography>
                  <Typography variant="h4" align="center" color="inherit">
                    <span role="img" aria-label="Music Tone">🔥 </span>
                    1 FREE BEAT
                    <span role="img" aria-label="Music Tone"> 🔥</span>
                  </Typography>
                </>
              }
            />
            <form
              name="contact"
              className={classes.form}
              onSubmit={handleSubmit}
              action="/thank-you/"
              method="POST"
              data-netlify="true"
            >
              <CardContent className={classes.cardContent}>
                <TextField
                  className={classes.inputs}
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  value={name}
                  onChange={handleChange}
                  id="name"
                  label="Name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  className={classes.inputs}
                  variant="filled"
                  margin="normal"
                  type="email"
                  required
                  fullWidth
                  value={email}
                  onChange={handleChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </CardContent>
              <CardActions className={classes.cardBottom}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send Form
                </Button>
              </CardActions>
            </form>
          </Card>
        </div>
      </Container>
    </ModalUi>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.any,
};

export default Modal;
