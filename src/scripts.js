const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
<<<<<<< HEAD
const userRepo = new UserRepository(userData);
let todaysDate = '2019/09/22'
let thisUser = {}


=======
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'
var thisUser = {}

>>>>>>> 6e41d4b69e4c7a16e5e824385cd5b4e851d8cc15
const makeUser = () => {
  const randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  displayUserInfo(user)
  makeHydration(user)
  makeActivity(user)
  makeSleep(user)
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
                     <section>
                     <button class="see-user-info"></button>
                     <button class="see-leaders-btn"></button>
                     <input type="text" name="set-date" id="set-date" placeholder="YYYY/MM/DD"></input>
                     <button class="set-date-button">Search</button>
                     </section>
                     <section class="detailed-info hide">
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>ID: ${user.id}</p>
                     </section>
                     <section class="leaders hide">Step Leaders:</section>
                     `
}

const getSleepersInfo = (sleep) => {
  const bestSleepersID = sleep.getBestSleepers(todaysDate)
  const topSleeperID = sleep.getTopSleeper(todaysDate)
  const worstSleeperID = sleep.getWorstSleeper(todaysDate)
  const bestSleeperNames = bestSleepersID.map(sleeper => userRepo.getUserByID(sleeper.userID).name.split(' ')[0])
  const topSleeperName = userRepo.getUserByID(topSleeperID).name.split(' ')[0]
  const worstSleeperName = userRepo.getUserByID(worstSleeperID).name.split(' ')[0]
  displayBestSleepers(bestSleeperNames, topSleeperName, worstSleeperName)
}

const displayBestSleepers = (bestSleepers, topSleeper, worstSleeper) => {
  const besties = document.querySelector(".leaders")
  besties.insertAdjacentHTML('beforeend', `<p class="leaders-info">${bestSleepers[0]} got the best sleep this week.</p>`)
  besties.insertAdjacentHTML('beforeend', `<p class="leaders-info">${topSleeper} got the most sleep this week.</p>`)
  besties.insertAdjacentHTML('beforeend', `<p class="leaders-info">${worstSleeper} got the least sleep this week.</p>`)
}

const getStepLeaders = (activity) => {
  const userFriends = activity.currentUser.userFriends
  const friendsList = userFriends.map(friend => userRepo.getUserByID(friend))
  const friendsData = activity.getFriendsData('', todaysDate, friendsList)
  const stepLeaders = activity.getFriendsSteps(friendsData)
  displayStepLeaders(stepLeaders)
}

const displayStepLeaders = (stepLeaders) => {
  const stepLeadersDOM = document.querySelector(".leaders")
  const sortedStepLeaders = stepLeaders.sort((a, b) => b.stepTotal - a.stepTotal)
  const leaderNames = sortedStepLeaders.map(leader => userRepo.getUserByID(leader.id).name.split(' ')[0])
  stepLeadersDOM.insertAdjacentHTML('beforeend',
    `<p class="leaders-info">${leaderNames[0]} has ${sortedStepLeaders[0].stepTotal} steps.</p>
                                           <p class="leaders-info">${leaderNames[1]} has ${sortedStepLeaders[1].stepTotal} steps.</p>
                                           <p class="leaders-info">${leaderNames[2]} has ${sortedStepLeaders[2].stepTotal} steps.</p>
                                          `)

}

const createQuerySelector = () => {
  const seeUserInfo = document.querySelector(".see-user-info")
  seeUserInfo.addEventListener('click', displayDetailedUserInfo)
}

const displayDetailedUserInfo = () => {
  const stepLeadersBTN = document.querySelector(".see-leaders-btn")
  const detialedUserInfo = document.querySelector(".detailed-info")
  const userInfo = document.querySelector(".user-info")
  const seeUserInfo = document.querySelector(".see-user-info")
  detialedUserInfo.classList[1] === ('hide') ? seeUserInfo.style.backgroundImage = ("url(images/close.png)") : seeUserInfo.style.backgroundImage = ("url(images/profile.png)")
  detialedUserInfo.classList.toggle('hide')
  userInfo.classList.toggle('hide')
  stepLeadersBTN.classList.toggle('hide')
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

const createLeadersQuerySelector = () => {
  const stepLeadersBTN = document.querySelector(".see-leaders-btn")
  stepLeadersBTN.addEventListener('click', displayLeadersInfo)
}

const displayLeadersInfo = () => {
  const seeUserInfo = document.querySelector(".see-user-info")
  const stepLeadersDOM = document.querySelector(".leaders")
  const userInfo = document.querySelector(".user-info")
  seeUserInfo.classList.toggle('hide')
  stepLeadersDOM.classList.toggle('hide')
  userInfo.classList.toggle('hide')

}

const createStepGoal = () => {
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
  createSelectDateQuerySelector()
  createQuerySelector()
  createLeadersQuerySelector()
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
  getSleepersInfo(newSleep)
}

const showSleepCard = (newSleep) => {
  let weeksSleepData = newSleep.getOneUserWeekOfSleepData(todaysDate)
  sleep.innerHTML = `
  <section class="sleep-card">
  <p>Hours Slept Average: ${newSleep.getAverageDailySleep()} hours</p>
  <p>Sleep Quality Average: ${newSleep.getAverageSleepQuality()}</p>
  </section>
  <section class="sleep-card">
  <p>Today's Hours Slept: ${newSleep.getSleepForSpecificDay(todaysDate)}</p>
  <p>Today's Sleep Quality: ${newSleep.getQualityForSpecificDay(todaysDate)}</p>
  </section>
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
  getStepLeaders(newActivity)
}

const showActivityCard = (newActivity) => {
  let weeksActivityData = newActivity.getOneUserWeekOfActivityData(todaysDate)
  activity.innerHTML = `
  <section class="activity-card"><p>Miles Walked:</p><p>${newActivity.getMilesWalkedToday(todaysDate)} miles</p></section>
  <section class="activity-card"><p>Minutes Active</p>${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-card"><p>Today's Steps:</p><p> ${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-card">
  <p>Steps: ${newActivity.getUserActivityToday(todaysDate).numSteps}.</p>
  <p>Average: ${newActivity.getAveragesForAll(todaysDate, 'numSteps')}</p>
  <p>Flights of Stairs Climbed: ${newActivity.getUserActivityToday(todaysDate).flightsOfStairs}</p>
  <p>Average: ${newActivity.getAveragesForAll(todaysDate, 'flightsOfStairs')}</p>
  <p>Active minutes: ${newActivity.getUserActivityToday(todaysDate).minutesActive}</p>
  <p>Average: ${newActivity.getAveragesForAll(todaysDate, 'minutesActive')}</p>
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

const createSelectDateQuerySelector = () => {
  const button = document.querySelector('.set-date-button')
  button.addEventListener('click', setDate)
}

function checkInput(data) {
  var dates = sleepData.map(date => date.date)
  if (!dates.includes(data)) {
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
