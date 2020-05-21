const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
const button = document.querySelector('.set-date-button')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'
var thisUser = {}

button.addEventListener('click', setDate)

const makeUser = () => {
  const randomUser = Math.floor(Math.random() * userData.length)
  var user = new User(userData[randomUser])
  displayUserInfo(user)
  makeHydration(user)
  makeSleep(user)
  makeActivity(user)
  thisUser = user
}

const showInfoCard = (user) => {
  users.innerHTML = `
  <p class="welcome">Welcome Back ${user.getFirstName()}!</p>
                     <section class="user-info">
                     <p class="your-step-goal">Daily Step Goal: ${user.dailyStepGoal}</p>
                     <section class='step-goal'>
                     </section>
                     <section class='friends-names'>Your friends:</section>
                     </section>
                     <button class="see-user-info"><i class="far fa-user"></i></button>
                     <section class="detailed-info hide">
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>ID: ${user.id}</p>
                     </section>
                     `
                     createQuerySelector()
}

const createQuerySelector = () => {
  const seeUserInfo = document.querySelector(".see-user-info")
  seeUserInfo.addEventListener('click', displayDetailedUserInfo)
}

const displayDetailedUserInfo = () => {
  const detialedUserInfo = document.querySelector(".detailed-info")
  const userInfo = document.querySelector(".user-info")
  const seeUserInfo = document.querySelector(".see-user-info")
  detialedUserInfo.classList[1] === ('hide') ? seeUserInfo.style.backgroundImage = ("url(images/close.png)") : seeUserInfo.style.backgroundImage = ("url(images/profile.png)")
  detialedUserInfo.classList.toggle('hide')
  userInfo.classList.toggle('hide')
}

const createFriendsList = (user) => {
  const friendsList = user.userFriends.map(friends => userRepo.getUserByID(friends))
  return friendsList
}

const displayFriendsList = (user) => {
  const friendsList = createFriendsList(user)
  const friendsNames = document.querySelector('.friends-names')
  friendsList.forEach(friend => friendsNames.insertAdjacentHTML('beforeEnd', `<p>${friend.name.split(' ')[0]}</p>`))
}

const createStepGoal = (user) => {
  const stepGoal = document.querySelector('.step-goal')
  stepGoal.innerHTML =
  `<p class="ahead-or-behind"></p>`
}

const compareStepGoal = (user) => {
  const difference = userRepo.getAverageStepGoal() - user.dailyStepGoal
  const absoluteValue = Math.abs(difference)
  const aheadOrBehind = document.querySelector('.ahead-or-behind')
  difference < 0 ?  aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps greater than the average!` : aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps less than the average!`
}

const displayUserInfo = (user) => {
  showInfoCard(user)
  displayFriendsList(user)
  createStepGoal(user)
  compareStepGoal(user)
}

const makeHydration = (user) => {
  const newHydration = new Hydration(hydrationData, user)
  showHydrationCard(newHydration)
}

const showHydrationCard = (newHydration) => {
  let weeksHydroData = newHydration.getWeekOfHydroData(todaysDate)
  hydration.innerHTML = `
  <section class="hydration-card"><p>Hydration Average: ${newHydration.getAverageDailyOunces()} oz</p></section>
  <section class="hydration-card"><p>Today's Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)} oz</p></section>
  <section class="hydration-card">
  <ul><li>Yesterday: ${weeksHydroData[1].numOunces} oz</li>
    <li>${weeksHydroData[2].date}: ${weeksHydroData[2].numOunces}oz</li>
    <li>${weeksHydroData[3].date}: ${weeksHydroData[3].numOunces}oz</li>
    <li>${weeksHydroData[4].date}: ${weeksHydroData[4].numOunces}oz</li>
    <li>${weeksHydroData[5].date}: ${weeksHydroData[5].numOunces}oz</li>
    <li>${weeksHydroData[6].date}: ${weeksHydroData[6].numOunces}oz</li>
    <li>${weeksHydroData[7].date}: ${weeksHydroData[7].numOunces}oz</li>
  </ul>
  `
}

const makeSleep = (user) => {
  let newSleep = new Sleep(sleepData, user)
  showSleepCard(newSleep)
}

const showSleepCard = (newSleep) => {
  let weeksSleepData = newSleep.getOneUserWeekOfSleepData(todaysDate)
  sleep.innerHTML = `
  <section class="sleep-card"><p>Hours Slept Average: ${newSleep.getAverageDailySleep()} hours</p><p>Sleep Quality Average: ${newSleep.getAverageSleepQuality()}</p></section>
  <section class="sleep-card"><p>Today's Hours Slept: ${newSleep.getSleepForSpecificDay(todaysDate)}</p><p>Today's Sleep Quality: ${newSleep.getQualityForSpecificDay(todaysDate)}</p></section>
  <section class="sleep-card">
  <ul><li>Yesterday's Sleep: Hours Slept: ${weeksSleepData[1].hoursSlept} Sleep Quality ${weeksSleepData[0].sleepQuality}</l1>
    <li>${weeksSleepData[2].date}: Hours Slept: ${weeksSleepData[2].hoursSlept} Sleep Quality ${weeksSleepData[1].sleepQuality}</li>
    <li>${weeksSleepData[3].date}: Hours Slept: ${weeksSleepData[3].hoursSlept} Sleep Quality ${weeksSleepData[2].sleepQuality}</li>
    <li>${weeksSleepData[4].date}: Hours Slept: ${weeksSleepData[4].hoursSlept} Sleep Quality ${weeksSleepData[3].sleepQuality}</li>
    <li>${weeksSleepData[5].date}: Hours Slept: ${weeksSleepData[5].hoursSlept} Sleep Quality ${weeksSleepData[4].sleepQuality}</li>
    <li>${weeksSleepData[6].date}: Hours Slept: ${weeksSleepData[6].hoursSlept} Sleep Quality ${weeksSleepData[5].sleepQuality}</li>
    <li>${weeksSleepData[7].date}: Hours Slept: ${weeksSleepData[7].hoursSlept} Sleep Quality ${weeksSleepData[6].sleepQuality}</li>
  </ul>
  `
}

const makeActivity = (user) => {
  let newActivity = new Activity(activityData, user)
  showActivityCard(newActivity, user)
  displayStepChallenge(newActivity)
}

const showActivityCard = (newActivity, user) => {
  let weeksActivityData = newActivity.getOneUserWeekOfActivityData(todaysDate)
  activity.innerHTML = `
  <section class="activity-card"><p>Miles Walked:</p><p>${newActivity.getMilesWalkedToday(todaysDate)} miles</p></section>
  <section class="activity-card"><p>Minutes Active</p>${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-card"><p>Today's Steps:</p><p> ${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-card">
  <p>Steps: ${newActivity.getUserActivityToday(todaysDate).numSteps}.</p><p>Average: ${newActivity.getAveragesForAll(todaysDate, 'numSteps')}</p>
  <p>Flights of Stairs Climbed: ${newActivity.getUserActivityToday(todaysDate).flightsOfStairs}</p><p>Average: ${newActivity.getAveragesForAll(todaysDate, 'flightsOfStairs')}</p>
  <p>Active minutes: ${newActivity.getUserActivityToday(todaysDate).minutesActive}</p><p>Average: ${newActivity.getAveragesForAll(todaysDate, 'minutesActive')}</p>
  </section>
  <section class="activity-card">
  <ul><li>Yesterday's Activity: Steps: ${weeksActivityData[1].numSteps}  Minutes Active: ${weeksActivityData[1].minutesActive}   Flights Of Stairs: ${weeksActivityData[1].flightsOfStairs}</li>
    <li>${weeksActivityData[2].date}: Steps: ${weeksActivityData[2].numSteps}  Minutes Active: ${weeksActivityData[2].minutesActive}   Flights Of Stairs: ${weeksActivityData[2].flightsOfStairs}</li>
    <li>${weeksActivityData[3].date}: Steps: ${weeksActivityData[3].numSteps}  Minutes Active: ${weeksActivityData[3].minutesActive}   Flights Of Stairs: ${weeksActivityData[3].flightsOfStairs}</li>
    <li>${weeksActivityData[4].date}: Steps: ${weeksActivityData[4].numSteps}  Minutes Active: ${weeksActivityData[4].minutesActive}   Flights Of Stairs: ${weeksActivityData[4].flightsOfStairs}</li>
    <li>${weeksActivityData[5].date}: Steps: ${weeksActivityData[5].numSteps}  Minutes Active: ${weeksActivityData[5].minutesActive}   Flights Of Stairs: ${weeksActivityData[5].flightsOfStairs}</li>
    <li>${weeksActivityData[6].date}: Steps: ${weeksActivityData[6].numSteps}  Minutes Active: ${weeksActivityData[6].minutesActive}   Flights Of Stairs: ${weeksActivityData[6].flightsOfStairs}</li>
    <li>${weeksActivityData[7].date}: Steps: ${weeksActivityData[7].numSteps}  Minutes Active: ${weeksActivityData[7].minutesActive}   Flights Of Stairs: ${weeksActivityData[7].flightsOfStairs}</li>
  </ul>
  </section>
  `
}

const displayStepChallenge = (activity) => {
  const friendsList = createFriendsList(activity.currentUser)
  const userData = activity.getFriendsData('', todaysDate, friendsList)
  const allFriendsTotalSteps = activity.getFriendsSteps(userData)
}

function checkInput(data) {
  var dates = sleepData.map(date => date.date)
  if(!dates.includes(data)) {
    alert("No Data!")
  } else {
    makeHydration(thisUser)
    makeSleep(thisUser)
    makeActivity(thisUser)
  }
}

function setDate() {
  input = document.getElementById('set-date').value
  todaysDate = input
  checkInput(input)
}

makeUser()

    
    
    
    
    

