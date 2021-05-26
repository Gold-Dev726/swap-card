
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from "@material-ui/core/Icon"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper, Button } from '@material-ui/core';


const MuiTimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none"
    }
  }
})(TimelineItem);

function Swap(props) {

  const handleClick = () => {
    props.history.push("/")
  }

  return (
    <div className="mt-10">
      <div className="mx-auto" style={{width: "340px"}}>
        <Fab size="small" color="secondary" aria-label="add" className="mb-2" onClick={handleClick}>
          <Icon>chevron_left</Icon>
        </Fab>

        <Paper className="w-full bg-black rounded-2xl m-auto">

          <div className="w-full p-5">
            <p className="text-gray-50 text-2xl text-center my-3">Deposit Pending</p>
            <p className="text-gray-100 text-xs text-center w-full mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Telius pellentesque mollis.</p>

            <Timeline className="mx-auto ml-4">
              <MuiTimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" className="w-6 h-6 border-opacity-10" style={{borderColor: "#333333"}} />
                  <TimelineConnector style={{backgroundColor: "#333333"}} />
                </TimelineSeparator>
                <TimelineContent className="p-0 pl-3">
                  <p className="text-gray-500 text-lg">Located Transaction</p>
                  <p className="text-gray-600">We've found your deposit</p>
                </TimelineContent>
              </MuiTimelineItem>
              <MuiTimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" className="w-6 h-6 border-opacity-10" style={{borderColor: "#333333"}} />
                  <TimelineConnector style={{backgroundColor: "#333333"}} />
                </TimelineSeparator>
                <TimelineContent className="p-0 pl-3">
                  <p className="text-gray-500 text-lg">Block Confirmation</p>
                  <p className="text-gray-600">This can take up to 30 minutes</p>
                </TimelineContent>
              </MuiTimelineItem><MuiTimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" className="w-6 h-6 border-opacity-10" style={{borderColor: "#333333"}} />
                </TimelineSeparator>
                <TimelineContent className="p-0 pl-3">
                  <p className="text-gray-500 text-lg">Successful Deposit</p>
                  <p className="text-gray-600">The tokens are in your wallet</p>
                </TimelineContent>
              </MuiTimelineItem>
            </Timeline>

            <Button variant="contained" color="primary" className="w-full py-5 rounded-xl mt-3 bg-blue-500 mb-5 relative">
              Back to Account
            </Button>
          </div>

        </Paper>
      </div>
    </div>
  );
}
export default Swap;