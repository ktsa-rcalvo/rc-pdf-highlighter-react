export async function convertBase64(fileObj) {
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
  
    async function main(file) {
      //    const file = document.querySelector('#myfile').files[0];
      var response = await toBase64(file);
      return response;
    }
  
    var resp = await main(fileObj);
    console.log("resp", resp);
    return resp;
  }
  