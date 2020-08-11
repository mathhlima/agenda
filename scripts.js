function _numDias(){
    var objData = new Date(),
        numAno = objData.getFullYear(),
        numMes = objData.getMonth()+1,
        numDias = new Date(numAno, numMes, 0).getDate();
  
    return numDias;
  }
  
 