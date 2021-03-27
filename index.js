console.log("hello")
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let paramcount=0;

//hide box param
let parameterbox = document.getElementById('parameterbox');
parameterbox.style.display = 'none'


let paramsRdio = document.getElementById('paramsRdio')
paramsRdio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parameterbox').style.display = 'block';
})


let jsonRadio = document.getElementById('jsonRadio')
jsonRadio.addEventListener('click', () => {
    document.getElementById('parameterbox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})


let addparam = document.getElementById('addparam')
addparam.addEventListener('click', () => {
    let params = document.getElementById('params')
    let string = `<div class="row g-3">
     <label for="url" class="col-sm-2 col-form-label">PARAMETER ${paramcount + 2}</label>
     <div class="col-md-4">
       <input type="text" class="form-control" id="parameterkey ${paramcount + 2}" placeholder="ENTER PARAMETER  ${paramcount + 2} KEY"
         aria-label="First name">
     </div>
     <div class="col-md-4">
       <input type="text" class="form-control" id="parametervalue ${paramcount + 2}" placeholder="ENTER PARAMETER  ${paramcount + 2} VALUE"
         aria-label="Last name">
         <button class="btn btn-primary deleteParam"> - </button>
     </div>
   </div>`

   let paramElement = getElementFromString(string);
   params.appendChild(paramElement);

   let deleteParam = document.getElementsByClassName('deleteParam');
   for (item of deleteParam){
       item.addEventListener('click', (e)=>{
           e.target.parentElement.parentElement.remove();
            
       })
   }

   paramcount ++ ; 
})


let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // Show please wait in the response box to request patience from the user
    // document.getElementById('responseJsonText').value = "Please wait.. Fetching response...";
    document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";
    
    let url = document.getElementById("url").value;
    let requestType =document.querySelector("input[name='requestType']:checked").value;
    let contentType =document.querySelector("input[name='contentType']:checked").value;


  


    if(contentType==params){
        data={};
        for(i=0; addparamcount+1;i++)
        if (document.getElementById('parameterkey' + (i+1)) != undefined){
        let key = document.getElementById('parameterkey' + (i+1)).value;
        
        let value = document.getElementById('parametervalue' + (i+1)).value;

        data[key ] = value;
        } 
        data = JSON.stringify(data);
    }

    else{
        data=  document.getElementById('requestJsonText').value;  
    }

    console.log('URL is  ',url);
    console.log('requestType is    ', requestType);
    console.log('contentType is   ',contentType);
    console.log('data is   ',data);

    if (requestType=='GET'){
        fetch(url, {
            method: 'GET',   
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }

    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });

    }



}); 