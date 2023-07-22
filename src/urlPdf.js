

export function urlPdf(base64str){
    // base64 string
  // var base64str = result.pdf;
  console.log("base64str",base64str)
  // decode base64 string, remove space for IE compatibility
  var binary = atob(base64str).replace(/\s/g, ''));
  var len = binary.length;
  var buffer = new ArrayBuffer(len);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < len; i++) {
      view[i] = binary.charCodeAt(i);
  }
  
  // create the blob object with content-type "application/pdf"               
  var blob = new Blob( [view], { type: "application/pdf" });
  var url = URL.createObjectURL(blob);
  }