import React from 'react';
import {Modal as ModalUi,
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
    background: 'linear-gradient(180deg, rgba(161,161,161,1) 0%, rgba(134,1,13,1) 50%)',
  },
  cardHeader: {
    padding: theme.spacing(5, 5, 3),
  },
  cardContent: {
    width: 700,
    padding: theme.spacing(0, 5),
  },
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
  const classes = useStyles();

  const handleCloseModal = () => {
    close(false);
  }

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
                  <Typography variant="h4" align="center" color="textPrimary">
                    <span role="img" aria-label="Music Tone">🔥 </span>
                    1 FREE BEAT
                    <span role="img" aria-label="Music Tone"> 🔥</span>
                  </Typography>
                </>
              }
            />
            <form className={classes.form} method="POST" data-netlify="true">
              <CardContent className={classes.cardContent}>
                <TextField
                  className={classes.inputs}
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
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
                  required
                  fullWidth
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
  )
}

export default Modal
