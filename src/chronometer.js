class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    if(printTimeCallback){
    setInterval(() => {printTimeCallback()}, 1000);}
    let id = setInterval(() => {this.currentTime++}, 1000);
    this.intervalId = id


  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value <= 9|| value == 0){      
      let valor = `0${value}`
      return valor}
    
    if(value > 10){
        let valor = `${value}`
        return valor}
  }

  stop() {
    // ... your code goes here
    this.printTimeCallback = 0
    clearInterval(this.intervalId, 1000)
    
    clearInterval(this.currentTime, 1000)
    

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  split() {
    // ... your code goes here
    let minutos = this.computeTwoDigitNumber(this.getMinutes())
    let segundos = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutos}:${segundos}`}
  }


