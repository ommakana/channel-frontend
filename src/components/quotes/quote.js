import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchAppData, QUOTES_API } from "../../api/index";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 40,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function QuoteComponent() {
  const classes = useStyles();
  const [quote, setQuote] = useState(null);
  let quotesArray = useRef(null);

  useEffect(() => {
    fetchAppData(QUOTES_API).then((data) => {
      quotesArray.current = data.slice(100);
      setQuote(
        quotesArray.current[Math.floor(Math.random() * Math.floor(100))]
      );
    });
  }, []);

  function generateQuote() {
    setQuote(quotesArray.current[Math.floor(Math.random() * Math.floor(100))]);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Quote of the Day
        </Typography>

        {quote && (
          <>
            <Typography variant="body2" component="p">
              <br />
              {`${quote.text}`}
            </Typography>
            <Typography variant="body2" component="p">
              - {quote.author}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={generateQuote}
        >
          new quote
        </Button>
      </CardActions>
    </Card>
  );
}
