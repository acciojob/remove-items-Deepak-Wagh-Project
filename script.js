//your JS code here. If required.
const removeButton=document.getElementById('btn');
const selectedElement=document.getElementById('colorSelect');

removeButton.addEventListener('click',(e)=>{
  e.preventDefault();
 
  const val=selectedElement.value;
  
  for(i=0;i<selectedElement.options.length;i++){
    if(selectedElement.options[i].text==val)
{
    selectedElement.options[i].remove();
    return
}  }

})
