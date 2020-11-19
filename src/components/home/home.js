import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import QuoteComponent from "../quotes/quote";
import { fetchAppData, APP_DATA_API } from "../../api/index";
import "./home.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
  },
});

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAppData(APP_DATA_API)
      .then((data) => setData(data))
      .catch(() => console.log("error app data"));
  }, []);

  return (
    <Container maxWidth="sm">
      <QuoteComponent />
      {data &&
        data.map((item, index) => {
          return (
            <Card key={index} className={classes.root} variant="outlined">
              <CardContent>
                <a
                  className={classes.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.imageUrl}
                    alt="om makana profile"
                    className="header__profilePhoto"
                  />
                </a>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" component="p">
                  <br />
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="home__link"
                >
                  {item.name}
                </a>
              </CardActions>
            </Card>
          );
        })}
    </Container>
  );
}
