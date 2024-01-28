
const events=require('events')
// const myEmitter=new events.EventEmitter;

// myEmitter.on('test',(arg)=>{
//     console.log(arg);
// })

// myEmitter.emit('test','hello world')

const util=require('util')

const teams=function(name){
    this.name=name

}

util.inherits(teams,events.EventEmitter);

const KKR=new teams('Kolkata Knight Riders')
const RM=new teams('Real Madrid')
const MC=new teams('Manchester City')

const teamArray=[KKR,RM,MC] 

teamArray.forEach((team)=>{
    team.on('nation',(nation)=>{
     console.log(team.name + ' is '+nation+' football club ')
    })
})

KKR.emit('nation','Indian')
RM.emit('nation','spain')
MC.emit('nation','english')