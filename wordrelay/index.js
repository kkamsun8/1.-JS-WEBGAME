const btn = document.querySelector('#button')
const errorTag = document.querySelector('#error')

const dictionary = []

btn.addEventListener('click',()=>{
    const word = document.querySelector('#word').textContent //.은 ~의를 의미. 이외는 textContent
    const input = document.querySelector('#input').value //input은 value
    const wordTag = document.querySelector('#word')
    const inputTag = document.querySelector('#input')
    if(dictionary.includes(input)){
        errorTag.textContent='중복입니다'
    }else{
  
        const firstName = input[0]
        const lastName = word[word.length-1]
        if(firstName === lastName){
            errorTag.textContent="맞습니다"
            wordTag.textContent = input
            dictionary.push(input)
           
        }else{
            errorTag.textContent="틀렸습니다."            
        }  
        inputTag.value=''
        inputTag.focus()
    }
}
)