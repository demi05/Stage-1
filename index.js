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
let time=date.toUTCString().slice(17,22)
console.log(time)
currentUTCTime.innerHTML=`
<p> The time is  ${time} GMT</p>
`