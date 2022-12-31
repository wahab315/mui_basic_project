import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              odit laborum, esse quisquam inventore dignissimos atque quis
              repudiandae quaerat aut aperiam rerum repellat sequi officia sint
              quas! Sint, architecto reprehenderit.
            </Typography>

            <Grid container spacing={4} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary Action
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
