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
    const {title,id,body}=props.post
    const classes = useStyles();

    return (
        <Card className={classes.root}>
    <CardActionArea>
      
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {
                   title
               }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {
                  id
              }
            </Typography>

            <Typography>
                Discription:{
                    body
                }
            </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" variant="contained" color="secondary">
        <a href>Learn More</a>
        </Button>
    </CardActions>
</Card>
    );
};

export default Post;