/**
 * I ubestemt form flertall får hankjønnsord -er
 * Substantiv som slutter på -er får bare en ekstra -e i ubestemt form flertall
 * Substantiv som ender på -el får sammentrekning i flertall. Det betyr at ordet mister en e i flertall
 * Noen substantiv skifter vokal i flertall, og må pugges
 * Det finnes også noen substantiv som ikke får endelse i ubestemt form flertall
 * Noen hunkjønnsubstantiv skifter vokal i flertall.
 * Noen hunkjønnsord bøyes helt spesielt og må pugges.
 * intetkjønnsord som har bare én stavelse får ingen endelse i ubestemt form flertall
**/

var unntak = require('./unntak.json')
var endelser = Object.keys(unntak)

function harUnntak(ord) {
  var lengde = ord.length, endelse='', slutt=0
  for(var i = 0, l = endelser.length; i<l; i++) {
    endelse = endelser[i]
    slutt = lengde - endelse.length
    if(ord.indexOf(endelse, slutt) > -1) {
      return ord.slice(0, slutt) + unntak[endelse]
    }
  }
}

function flertall(ord, n) {
  if(n===1) return ord
  var entall = ord.toLowerCase()
  var stavelse = entall.slice(-2)
  var unntaksOrd = ''
  if(unntaksOrd = harUnntak(entall)) {
    return unntaksOrd
  } else if(stavelse === 'er') {
    return ord + 'e'
  } else if(stavelse === 'el' && ord.length > 3) {
    return ord.slice(0, -2) + 'ler'
  } else if(stavelse[1] === 'e') {
    return ord + 'r'
  } else {
    return ord + 'er'
  }
}

flertall.unntak = function regel(entall, flertall) {
  unntak[entall] = flertall
  endelser.push(entall)
  return this
}
module.exports = flertall
