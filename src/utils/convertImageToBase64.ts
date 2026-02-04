
function convertImageToBase64(file:File, callback:(extension: string | undefined, base64String:string | undefined)=>void){
  const fileExtension = file.name.split(".").pop();

  const reader = new FileReader();
  reader.readAsDataURL(file)
  reader.addEventListener('load',()=>{
      const result = reader.result as string && reader.result;
      const resultString: string = result as string;
      const base64String =  resultString?.slice(resultString.indexOf(',')+1);

      callback(
        fileExtension,
        base64String
      )
  })
}

export default convertImageToBase64