const data=[
['Before my first presentation in years, I need to ___ my public-speaking skills.','brush up on','come up with','Перед презентацией','Brush up on — освежить уже знакомые знания или навыки. Come up with — придумать идею или план.','освежить в памяти, подтянуть знания или навыки'],
['She initially opposed the proposal, but after hearing our arguments, she began to ___ our point of view.','come round to','face up to','Обсуждение проекта','Come round to — постепенно согласиться, изменить мнение под влиянием аргументов. Face up to — признать неприятную реальность и взяться за неё.','изменить мнение, согласиться (также come around to)'],
['The client wants a fresh campaign. Can you ___ three original concepts by Friday?','come up with','take in','Новая задача','Come up with — предложить, придумать идею. Take in — воспринять и усвоить информацию.','придумать идею или план'],
['We can’t keep pretending everything is fine. We need to ___ the fact that the business is losing money.','face up to','brush up on','Непростое решение','Face up to — признать проблему и начать с ней справляться. Brush up on относится к обновлению знаний и навыков.','признать проблему и попытаться с ней справиться'],
['The new software keeps crashing. I’m trying to ___ why it happens.','figure out','think up','Техническая проблема','Figure out — разобраться и понять причину. Think up — выдумать что-то новое, например оправдание.','понять, разобраться, решить проблему'],
['Quite by chance, while chatting over coffee, we ___ the perfect name for the studio.','hit upon','read up on','Неожиданная находка','Hit upon подчёркивает случайную находку или внезапно пришедшую мысль. Read up on — изучать тему по письменным источникам.','случайно найти, внезапно наткнуться на мысль'],
['The voicemail was so muffled that I couldn’t ___ the address.','make out','mull over','Голосовое сообщение','Make out — с трудом расслышать, разглядеть или понять. Mull over — долго и тщательно обдумывать.','с трудом разглядеть, расслышать или понять; утверждать, создавать впечатление'],
['There’s no rush to accept the offer. Take the weekend to ___ whether it really suits you.','mull over','piece together','Предложение о работе','Mull over — спокойно и основательно обдумывать вопрос какое-то время. Piece together — восстанавливать картину по отдельным фактам.','тщательно обдумывать в течение некоторого времени'],
['Using old emails and bank records, the auditor managed to ___ what had happened.','piece together','swot up on','Расследование','Piece together — собрать целую картину из фрагментов информации. Swot up on — усиленно учить материал, обычно перед экзаменом.','восстановить картину, собрать факты воедино'],
['The encrypted note was a real brain-teaser. It took us hours to ___ its hidden message.','puzzle out','come round to','Сложная загадка','Puzzle out — разгадать сложную задачу путём размышления. Come round to — изменить мнение и согласиться.','разгадать, найти решение запутанной проблемы'],
['Before the interview, I’ll ___ the company’s history by reading its annual reports.','read up on','hit upon','Подготовка к интервью','Read up on — подробно изучить тему, читая о ней. Hit upon — случайно обнаружить идею или решение.','навести справки, подробно изучить по письменным источникам (также read up about)'],
['My professional exam is tomorrow, so I’m staying in tonight to ___ the key regulations.','swot up on','make out','Накануне экзамена','Swot up on — усиленно учить, зубрить перед экзаменом; преимущественно британский вариант. Make out — различить или понять с трудом.','зубрить, усиленно готовиться (британский английский)'],
['The trainer covered so much in ten minutes that I couldn’t ___ all the information.','take in','think up','Слишком много информации','Take in — воспринять и усвоить информацию. Think up — придумать что-то новое.','понимать и усваивать; также обманывать (take someone in), быть обманутым (be taken in)'],
['Before you say yes or no, take a day to ___ the offer carefully.','think over','read up on','Время на решение','Think over — обдумать предложение или решение, прежде чем ответить. Read up on — изучить вопрос посредством чтения.','тщательно обдумать проблему, предложение или решение'],
['Before we launch, we must ___ every step, from the first order to returns and refunds.','think through','brush up on','Запуск бизнеса','Think through — продумать процесс до конца, включая последствия и детали. Brush up on — освежить уже имеющиеся знания.','продумать до конца, рассмотреть детали и последствия'],
['He was late again and had to ___ a believable excuse on the spot.','think up','take in','Неловкая ситуация','Think up — выдумать что-то, в том числе оправдание. Take in — усвоить информацию; take someone in также означает обмануть кого-то.','выдумать, придумать (особенно оправдание или отговорку)']
];
let order=data.map((_,i)=>i),pos=0,answers={},layout={};
const card=document.querySelector('#card');
function options(i){return layout[i]??(layout[i]=Math.random()<.5?[0,1]:[1,0])}
function render(){
if(pos>=order.length){results();return}
const i=order[pos],q=data[i],a=answers[i],done=a!==undefined;
card.innerHTML=`<div class="topline"><span>${pos+1} / ${order.length}</span><div class="progress" role="progressbar" aria-label="Прогресс" aria-valuemin="0" aria-valuemax="${order.length}" aria-valuenow="${pos}"><i style="width:${pos/order.length*100}%"></i></div></div><p class="sentence" lang="en">${q[0].replace('___',`<span class="blank">${done?q[1]:'&nbsp;…&nbsp;'}</span>`)}</p><div class="options">${options(i).map((v,n)=>`<button class="option ${done?(v===0?'correct':a===v?'wrong':''):''}" data-choice="${v}" ${done?'disabled':''} aria-label="Вариант ${n+1}: ${q[v+1]}">${q[v+1]}${done&&v===0?' ✓':''}${done&&a===v&&v!==0?' ×':''}</button>`).join('')}</div>${done?`<div class="feedback"><strong>${a===0?'Верно':'Верный ответ: '+q[1]}</strong>${q[4]}</div>`:''}<div class="actions"><button class="textbtn" id="back" ${pos===0?'disabled':''} aria-label="Предыдущий вопрос">← Назад</button>${done?`<button class="primary" id="next">${pos===order.length-1?'Результат':'Далее'} →</button>`:''}</div>`;
document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{answers[i]=+b.dataset.choice;render()});
if(done)document.querySelector('#next').onclick=()=>{pos++;render()};
document.querySelector('#back').onclick=()=>{if(pos>0){pos--;render()}}
}
function results(){
const wrong=order.filter(i=>answers[i]!==0),score=order.length-wrong.length;
card.innerHTML=`<div class="result"><h2>Результат</h2><div class="score">${score}<span> / ${order.length}</span></div><div class="actions">${wrong.length?'<button class="primary" id="retry">Повторить ошибки</button>':''}<button class="textbtn" id="restart">Заново ↻</button></div>${wrong.map(i=>`<div class="review"><b>${data[i][1]}</b><p lang="en">${data[i][0].replace('___',data[i][1])}</p>${data[i][4]}</div>`).join('')}</div>`;
document.querySelector('#restart').onclick=()=>{order=data.map((_,i)=>i);answers={};layout={};pos=0;render()};
if(wrong.length)document.querySelector('#retry').onclick=()=>{order=wrong;answers={};layout={};pos=0;render()}
}
document.addEventListener('keydown',e=>{if(!['1','2'].includes(e.key)||e.repeat)return;const b=document.querySelectorAll('[data-choice]')[+e.key-1];if(b&&!b.disabled)b.click()});
render();
