const quiz = [
    {
      question: "What is the capital city of France?",
      options: {
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Madrid"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the capital city of Australia?",
      options: {
        a: "Melbourne",
        b: "Sydney",
        c: "Canberra",
        d: "Perth"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the capital city of Brazil?",
      options: {
        a: "Rio de Janeiro",
        b: "Sao Paulo",
        c: "Brasília",
        d: "Salvador"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the capital city of Japan?",
      options: {
        a: "Tokyo",
        b: "Kyoto",
        c: "Osaka",
        d: "Seoul"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the capital city of Canada?",
      options: {
        a: "Toronto",
        b: "Ottawa",
        c: "Montreal",
        d: "Vancouver"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the capital city of South Africa?",
      options: {
        a: "Pretoria",
        b: "Cape Town",
        c: "Johannesburg",
        d: "Durban"
      },
      correctAnswer: "a"
    }
  ];

const btn = document.querySelector('#btn')
const start = document.querySelector('.start_container')
const dives = []
let score = 0


for(var i = 0; i < quiz.length; i++){

  
  const optionsLength = Object.keys(quiz[i].options).length
  const div = document.createElement('div')
  div.setAttribute('id', `div_${i}`);
  const btndiv = document.createElement('div')
  btndiv.classList.add('btndiv')
  div.append(btndiv)
  const question = quiz[i].question
  const h1 = document.createElement('h1')
  h1.append(question)
  div.append(h1)
 
  
  
    
    for (let j = 0; j <= optionsLength-1; j++) {

      const correct = quiz[i].correctAnswer
      const option = Object.keys(quiz[i].options)[j]
      const text = quiz[i].options[option]
      const betn = document.createElement('button')
      betn.textContent = `${option})   ${text}`
      btndiv.append(betn)
      div.appendChild(btndiv)

      
      const iscorrect = () => {
        btndiv.querySelectorAll('button').forEach((buton) => {

          if (buton.textContent.startsWith(correct)) {
            buton.setAttribute('id', 'correct')
            
          } else {
            buton.setAttribute('id', 'wrong')
            
          }
          
        })
    }
    
      betn.addEventListener('click', () => {
       if(betn.textContent.startsWith(correct)){
        score++
       }
        const nextquestion = () =>{
          if(gadasvla == 5){
            const score_div = document.createElement('div')
            score_div.classList.add("score_div")

            const damxmare_div = document.createElement('div')
            damxmare_div.classList.add("damxmare_div")
            damxmare_div.style.width = `${600/quiz.length * score}px`

            const rstbtn = document.createElement('button')
            rstbtn.setAttribute('id', 'rstbtn')
            rstbtn.innerText = 'Try again'

            rstbtn.addEventListener('click', ()=>{
              window.location.reload()
            })
            const from = `${score}/${quiz.length}`
            const dl = document.createElement('h1')
            dl.setAttribute('id', 'qula')
            dl.append(from)
            score_div.append(damxmare_div)
            const score_h1 = document.createElement('h1')
            score_h1.innerText = `Correct answer ${score}`
            dives[gadasvla].style.display = 'none'
            const end = document.createElement('div')
            end.append(score_h1, score_div, dl, rstbtn)
            end.classList.add('end-container')
            document.body.append(end)
            
            
          }else{
            dives[gadasvla].style.display = 'none'
            gadasvla ++
            document.body.append(dives[gadasvla])
          }
          
         }
        iscorrect()
       setTimeout(nextquestion, 2000)
       console.log(score)
    }
       
      );

      
    }
    dives.push(div)

}

const [div1, div2, div3, div4, div5, div6] = dives


let gadasvla = 0
btn.addEventListener('click', ()=>{

  document.body.append(dives[gadasvla])
  start.style.display = "none" 

})
