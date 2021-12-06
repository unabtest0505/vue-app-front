const autho = { 

}

autho.createToken = (tken)=>{
    localStorage.setItem('miappkey',tken)
}

autho.getToken = ()=>{
  return  localStorage.getItem('miappkey')
}

autho.isToken = ()=>{
    if(localStorage.getItem('miappkey')==null){
        return false
    }else{
        return true
    }
}

autho.limpiar = ()=>{
    localStorage.clear();
}

module.exports = autho;