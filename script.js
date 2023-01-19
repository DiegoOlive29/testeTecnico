
 const main = async(minimum, callbackDelayPairs)=>{

  const A = []
  const B = []


      for (let i = 0; i < callbackDelayPairs.length; i++) {


        const result =  await callbackDelayPairs[i][0](A,B);
        
        setTimeout(() => {
            return true
          }, callbackDelayPairs[i][1]);
          
      }

    const filteredArray = A.concat(B).sort((a, b) => b[1] - a[1])

    const filteredArrayFiltrado = filteredArray.filter((conjunto)=>conjunto[1] >= minimum)

    const resultFinal = {all:A.concat(B),filtered:filteredArrayFiltrado};   

   return resultFinal


}
//main(5,[[f,2],[f,8],[f,3],[f,2],[f,8],[f,3],[f,2],[f,8],[f,3]])

async function f(A, B) {

  const X = Math.floor(Math.random() * 10)

  
    if (X >= 0.5) {
  
      A.push([f, X])
  
    } else {
  
      B.push([f, X])
  
    }
  
    return new Promise(resolve => {
  
      setTimeout(() => resolve(X), 500)
  
    })
  
  }
  function name(params) {
    
  }
