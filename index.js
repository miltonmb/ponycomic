function next(x) {
    url = window.location.href
    console.log(x)
    if (parseInt(x) > 1) {
      console.log("hola")
      str = url.replace((parseInt(x) - 1) + "", x)
      console.log(str)
      window.location.href = str
    } else {
      window.location.href = url + x + ".html";
    }
  
  
  }
  
  function before(x) {
    url = window.location.href
    str = url.replace((parseInt(x) + 1) + "", x)
    window.location.href = str
  }
  
  function answer(resp,id) {
    if (resp === "si") {
       url = window.location.href
       str = url.replace("11", "12")
      window.location.href = str
    } else {
      if(id=="no"){
        document.getElementById(id).innerHTML = "No presiones aqui porfavor :(";
      }else{
        document.getElementById(id).innerHTML = "Hazme casoo!, ya presiona los otros porfavoh";
      }
    }
  }