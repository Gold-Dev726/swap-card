import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from "@material-ui/core/Icon"
import clsx from "clsx";
import { InputBase, Paper, Button } from '@material-ui/core';

function Swap(props) {
  const [currentSelect, setCurrentSelect] = useState(1);

  const handleClick = () => {
    props.history.push("/pending")
  }

  return (
    <div className="mt-10">
      <div className="w-80 mx-auto">
        <Fab size="small" color="secondary" aria-label="add" className="mb-2" onClick={handleClick}>
          <Icon>chevron_left</Icon>
        </Fab>

        <Paper className="w-full text-center bg-black rounded-2xl m-auto">
          <div className="flex w-full">
            <Button onClick={() => setCurrentSelect(1)} className={clsx(currentSelect == 1 ? "bg-white bg-opacity-20" : "", "w-1/2 text-gray-200 p-4 rounded-none rounded-tl-2xl ")}>Deposit</Button>
            <Button onClick={() => setCurrentSelect(2)} className={clsx(currentSelect == 2 ? "bg-white bg-opacity-20" : "", "w-1/2 text-gray-200 p-4 rounded-none rounded-tr-2xl ")}>Withdraw</Button>
          </div>
          <div className="w-full p-5">
            <div className="w-full flex items-center relative">
              <InputBase
                className="w-28 text-4xl text-gray-50 py-0 mx-auto"
                placeholder="0 ETH"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <span className="border-2 text-gray-50 border-solid border-gray-50 max-w-min p-1 rounded-xl absolute right-0 px-2" color="textSecondary" gutterBottom>
                MAX
              </span>
            </div>
            <span className="text-gray-400 text-sm">$0.00</span>

            <div className="flex mt-3 mb-6">
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-2xl py-2 mx-1">
                  <img src="/metamask.png" alt="metamask" className="w-7" />
                  <span className="text-gray-400">Metamask</span>
                </div>
                <span className="text-gray-500 text-xxs">Balance: 14.94782 ETH</span>
              </div>

              <div className="flex flex-col w-1/2">
                <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-2xl py-2 mx-1">
                  <img src="/metamask.png" alt="metamask" className="w-7" />
                  <span className="text-gray-400">Metamask</span>
                </div>
                <span className="text-gray-500 text-xxs">Balance: 0 ETH</span>
              </div>
            </div>
            <p className="text-gray-400 text-xxs text-left w-full">We use <span className="text-gray-100">Polygon</span> for 5x faster transaction speeds and lower fees. All your deposits stay in your Metamask wallet and we swap the network using <span className="text-gray-100">Context</span> for faster deposit and withdrawals</p>
            <Button variant="contained" color="primary" className="w-full py-4 rounded-xl mt-3 bg-blue-500 mb-5 relative">
              <img src="/metamask.png" alt="metamask" className="w-7 absolute left-3" />
            Deposit ETH
          </Button>
            <span className="text-xs text-gray-100"><span className="text-gray-500">Gas Fee:</span> 0.0 ETH ($0.00)</span>
          </div>
        </Paper>
      </div>
    </div>
  );
}
export default Swap;