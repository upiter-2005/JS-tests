class EventEmitter {
  events = {}

  on(name, listener){
    if(!this.events[name]){
      this.events[name] = []
    }
    if(this.events[name].includes(listener) ) return;
    this.events[name].push(listener)
  }

  off(name, listener){
    if(!this.events[name]) return;
    this.events[name] = this.events[name].filter(fn => fn !== listener)
  }

  emmit(name, ...args){
    if(!this.events[name])return;
    for(let listener of this.events[name]){
      listener(...args)
    }
  }
}

const e = new EventEmitter()

function handle (...val) {
  console.log('start');
  for (let el of val){
    console.log(el);
  }
  console.log('end;');
}
function newHandle (val) {
 console.log(`newHandle - ${val}`);
}
e.on('click', handle)
e.on('input', handle)
e.on('input', newHandle)

//e.off('click', handle)
console.log(e.events);

e.emmit('click', 1,2,3,4,6)