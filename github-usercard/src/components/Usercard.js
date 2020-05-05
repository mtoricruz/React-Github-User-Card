import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(40),
        height: theme.spacing(40),
        marginLeft: 290
    },
}));

function Usercard(props) {
    console.log('usercard rendering')
    const classes = useStyles();
    const image = props.usercard.avatar_url

    return (
        <div className='usercard-container'>
            <h1>{props.usercard.name}'s Usercard</h1>
            <Avatar className={classes.large} src={image} alt='this is a person lol'/>
            <h2>@{props.usercard.login}</h2>
            <h4>Following: {props.usercard.following}</h4>
            <h4>Followers:</h4>
                {props.followers.map(follower => {
                    return (
                        <div key={follower.id} className='follower'>
                            <p>{follower.login}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Usercard