function produceDrivingRange(drivingRange) {
  return function(startBlock, endBlock) {
    return Math.abs(parseInt(startBlock) - parseInt(endBlock));
  }
} 
