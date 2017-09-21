module.exports={
  getChartData:(req,res,next)=>{
    const scrub=(scrubVal,scrubUnit,scrubOffset)=>{
      let currentOffset=scrubVal%scrubUnit;
      let correction=currentOffset-scrubOffset;
      if(correction<0){
        correction=currentOffset+(scrubUnit-scrubOffset);
      }
      return scrubVal-correction;
    }

    let {start,end}=req.params;
    let {units,offset}=req.query;

    start=Number(start);
    end=Number(end);
    units=Number(units);
    offset=Number(offset);

    const dbInstance=req.app.get('db');
    let startTime=new Date(start);
    startTime=new Date(scrub(startTime.getTime(),units,offset)); //Correct the
    let endTime=new Date(end);

    dbInstance.run("select * from actions where time>$1 and time<$2 order by time",[startTime,endTime]).then(response=>{
      let labels=[];
      let parkingData=[];
      let retrievingData=[];

      let currTime=startTime;
      while(currTime<endTime){
        labels.push(currTime);
        currTime=new Date(currTime.getTime()+units);
        parkingData.push(0);
        retrievingData.push(0);
      }
      labels.push(endTime);

      response.forEach(cur=>{
        let arraySpot=Math.floor((cur.time.getTime()-startTime.getTime())/units);
        if(cur.action==="park"){
          parkingData[arraySpot]++;
        }
        if(cur.action==="retrieve"){
          retrievingData[arraySpot]++;
        }
      });
      let toRet={
        labels:labels,
          datasets:[{
            label:"Parked",
            data:parkingData,
          },
          {
            label:"Retrieved",
            data:retrievingData,
          },
        ],
      }

      res.status(200).json(toRet);
    })

  },

}
