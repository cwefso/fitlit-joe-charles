const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'

const makeUser = () => {
  const randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  displayUserInfo(user)
  makeHydration(user)
  makeSleep(user)
  makeActivity(user)
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
                     <button class="see-user-info"><i class="far fa-user"></i>

</button>
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
       <section class="hydration-data"><p>Hydration Average: ${newHydration.getAverageDailyOunces()} oz</p></section>
       <section class="todays-hydration"><p>Todays Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)} oz</p></section>
       <section class="weekly-hydration">
       <p class="box-text">Yesterday's Hydration: ${weeksHydroData[1].numOunces} oz</p>
       <p class="box-text">${weeksHydroData[2].date}: ${weeksHydroData[2].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[3].date}: ${weeksHydroData[3].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[4].date}: ${weeksHydroData[4].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[5].date}: ${weeksHydroData[5].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[6].date}: ${weeksHydroData[6].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[7].date}: ${weeksHydroData[7].numOunces}oz</p>
       </section>
       `
}

const makeSleep = (user) => {
  let newSleep = new Sleep(sleepData, user)
  showSleepCard(newSleep)
}

const showSleepCard = (newSleep) => {
  let weeksSleepData = newSleep.getOneUserWeekOfSleepData(todaysDate)
  sleep.innerHTML = `
  <section class="sleep-hours"><p>Hours Slept Average: ${newSleep.getAverageDailySleep()} hours</p><p>Sleep Quality Average: ${newSleep.getAverageSleepQuality()}</p></section>
  <section class="sleep-quality"><p>Todays Hours Slept: ${newSleep.getSleepForSpecificDay(todaysDate)}</p><p>Todays Sleep Quality: ${newSleep.getQualityForSpecificDay(todaysDate)}</p></section>
  <section class="weekly-sleep">
  <p class="box-text">Yesterday's Sleep: Hours Slept: ${weeksSleepData[1].hoursSlept} Sleep Quality ${weeksSleepData[0].sleepQuality}</p>
  <p class="box-text">${weeksSleepData[2].date}: Hours Slept: ${weeksSleepData[2].hoursSlept} Sleep Quality ${weeksSleepData[1].sleepQuality}
  <p class="box-text">${weeksSleepData[3].date}: Hours Slept: ${weeksSleepData[3].hoursSlept} Sleep Quality ${weeksSleepData[2].sleepQuality}
  <p class="box-text">${weeksSleepData[4].date}: Hours Slept: ${weeksSleepData[4].hoursSlept} Sleep Quality ${weeksSleepData[3].sleepQuality}
  <p class="box-text">${weeksSleepData[5].date}: Hours Slept: ${weeksSleepData[5].hoursSlept} Sleep Quality ${weeksSleepData[4].sleepQuality}
  <p class="box-text">${weeksSleepData[6].date}: Hours Slept: ${weeksSleepData[6].hoursSlept} Sleep Quality ${weeksSleepData[5].sleepQuality}
  <p class="box-text">${weeksSleepData[7].date}: Hours Slept: ${weeksSleepData[7].hoursSlept} Sleep Quality ${weeksSleepData[6].sleepQuality}
  </section>
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
  <section class="activity-miles"><p>Today's Miles Walked: ${newActivity.getMilesWalkedToday(todaysDate)} miles</p></section>
  <section class="activity-minutes"><p>Today's Active Minutes: ${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-steps"><p>Today's Steps: ${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-compare">
  <p>You walked: ${newActivity.getUserActivityToday(todaysDate).numSteps} steps today. The average was ${newActivity.getAveragesForAll(todaysDate, 'numSteps')}</p>
  <p>You climbed: ${newActivity.getUserActivityToday(todaysDate).flightsOfStairs} flights of stairs today. The average was ${newActivity.getAveragesForAll(todaysDate, 'flightsOfStairs')}</p>
  <p>You had: ${newActivity.getUserActivityToday(todaysDate).minutesActive} minutes active today. The average was ${newActivity.getAveragesForAll(todaysDate, 'minutesActive')}</p>
  </section>
  <section class="activity-data">
  <p class="box-text">Yesterday's Activity: Steps: ${weeksActivityData[1].numSteps} Minutes Active: ${weeksActivityData[1].minutesActive} Flights Of Stairs: ${weeksActivityData[1].flightsOfStairs}</p>
  <p class="box-text">${weeksActivityData[2].date}: Steps: ${weeksActivityData[2].numSteps} Minutes Active: ${weeksActivityData[2].minutesActive} Flights Of Stairs: ${weeksActivityData[2].flightsOfStairs}</p>
  <p class="box-text">${weeksActivityData[3].date}: Steps: ${weeksActivityData[3].numSteps} Minutes Active: ${weeksActivityData[3].minutesActive} Flights Of Stairs: ${weeksActivityData[3].flightsOfStairs}</p>
  <p class="box-text">${weeksActivityData[4].date}: Steps: ${weeksActivityData[4].numSteps} Minutes Active: ${weeksActivityData[4].minutesActive} Flights Of Stairs: ${weeksActivityData[4].flightsOfStairs}</p>
  <p class="box-text">${weeksActivityData[5].date}: Steps: ${weeksActivityData[5].numSteps} Minutes Active: ${weeksActivityData[5].minutesActive} Flights Of Stairs: ${weeksActivityData[5].flightsOfStairs}</p>
  <p class="box-text">${weeksActivityData[6].date}: Steps: ${weeksActivityData[6].numSteps} Minutes Active: ${weeksActivityData[6].minutesActive} Flights Of Stairs: ${weeksActivityData[6].flightsOfStairs}</p>
  <p class="box-text">${weeksActivityData[7].date}: Steps: ${weeksActivityData[7].numSteps} Minutes Active: ${weeksActivityData[7].minutesActive} Flights Of Stairs: ${weeksActivityData[7].flightsOfStairs}</p>
  </section>
  `
}

const displayStepChallenge = (activity) => {
  const friendsList = createFriendsList(activity.currentUser)
  const userData = activity.getFriendsData('', todaysDate, friendsList)
  const allFriendsTotalSteps = activity.getFriendsSteps(userData)
}





makeUser()
