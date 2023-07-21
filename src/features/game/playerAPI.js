export function getRandomQuote() {
    return new Promise(async(resolve) =>{
    const response =  await fetch('https://api.quotable.io/random')
  const data =await response.json()
    resolve({data})
    }
    );
  }
  