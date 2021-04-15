import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
    console.log(props);
    const {title,id}=props.post
    const classes = useStyles();

    return (
        <Card className={classes.root}>
    <CardActionArea>
      
        <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              Title: {
                   title
               }
            </Typography> 
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" variant="outlined" color="secondary">
        <a href={`/detail/${id}`} > See detail of {id} </a>
        
        </Button>
    </CardActions>
</Card>
    );
};

export default Post;