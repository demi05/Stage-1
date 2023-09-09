// date script
let currentDay0fTheWeek= document.querySelector("#currentDay0fTheWeek")

const date= new Date()
console.log(date)
let currentDay= date.getDate()
let currentMonth= date.getMonth()+1
let currentYear= date.getFullYear()

currentDay0fTheWeek.innerHTML=`
<p>Today's date is:  ${currentDay}/${currentMonth}/${currentYear}</p>
`

// time script
let currentUTCTime= document.querySelector("#currentUTCTime")
const dateMl= date.UTC()
currentUTCTime.innerHTML=`
<p> ${dateMl}</p>
`
