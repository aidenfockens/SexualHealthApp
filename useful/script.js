
cur = "Home";
curtab = "Hometab";


const ShowNewPage = (current,currenttab) => {
    document.getElementById(cur).style.display = "none";
    document.getElementById(curtab).style.color = "black"
    console.log("hello")
    cur = current
    curtab = currenttab
    document.getElementById(cur).style.display = "block"
    document.getElementById(curtab).style.color = "yellow"
        
    }