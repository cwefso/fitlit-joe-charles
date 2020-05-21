class Activity {
  constructor(activityData, user, userRepo, todaysDate) {
    this.activityData = activityData || null;
    this.currentUser = user || {id: 0, name: 'no user'};
    this.userRepo = userRepo;
    this.todaysDate = todaysDate;
  }



  getTodaysActivity(date) {
    const specifiedDate = date || this.todaysDate
    return this.activityData.filter(data => data.date === specifiedDate)
  }

  getUserActivityToday(date) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.getTodaysActivity(specifiedDate)
    return this.getUserActivityData(todaysActivity)[0]
  }

  getMilesWalkedToday(date) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.getUserActivityToday(specifiedDate)
    const totalStepDistance = Math.round(todaysActivity.numSteps * this.currentUser.strideLength)
    return (totalStepDistance / 5280).toFixed(1)
  }

  getUserActivityMinutes(date) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.getUserActivityToday(specifiedDate)
    return todaysActivity.minutesActive
  }

  getWeekActiveMinutesAverage(date) {
    const specifiedDate = date || this.todaysDate
    let weeksActivity = []
    const userActivityData = this.getUserActivityData()
    const todaysActivity = this.getUserActivityToday(specifiedDate)
    const startIndex = userActivityData.indexOf(todaysActivity)
    for (let i = 0; i < 7; i++) {
      weeksActivity.push(userActivityData[startIndex - i])
    }
    return weeksActivity
  }

  getWasStepGoalAchieved(date) {
    const specifiedDate = date || this.todaysDate
    let todaysActivity = this.getUserActivityToday(specifiedDate)
    return this.currentUser.dailyStepGoal <= todaysActivity.numSteps ? true : false
  }

  getAllDaysStepGoalWasExceeded() {
    const userActivityData = this.getUserActivityData()
    return userActivityData.filter(data => data.numSteps > this.currentUser.dailyStepGoal)
  }

  getAllDaysStepGoalWasNotExceeded() {
    const userActivityData = this.getUserActivityData()
    return userActivityData.filter(data => data.numSteps < this.currentUser.dailyStepGoal)
  }

  getStairClimbRecord() {
    const userActivityData = this.getUserActivityData()
    const sortedActivities = userActivityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return sortedActivities[0].flightsOfStairs
  }

  getAveragesForAll(date, activityType) {
    const specifiedDate = date || this.todaysDate
    const todaysActivity = this.activityData.filter(data => data.date === specifiedDate)
    const allUserStairs = todaysActivity.reduce((acc, activity) => {
      acc += activity[activityType]
      return acc
    }, 0)
    return Math.round(allUserStairs / todaysActivity.length);
  }

  getOneUserWeekOfActivityData(date, user) {
    let activity = []
    let userActivityData = this.getUserActivityData("", user)
    let todaysActivity = userActivityData.find(activity=> activity.date === date)
    let startIndex = userActivityData.indexOf(todaysActivity)
    for (let i = 0; i < 8; i++) {
      activity.push(userActivityData[startIndex - i])
    }
    return activity
  }

  getUserActivityData(activityInfo, user) {
    const currentUser = user || this.currentUser
    const activityData = activityInfo || this.activityData
    return activityData.filter(activity => activity.userID === currentUser.id)
  }

  getFriendsData(user, date, friendsList) {
    const friends = friendsList
    const friendsData = friends.map(friend => this.getOneUserWeekOfActivityData(date, friend))
    this.getFriendsSteps(friendsData)
    return friendsData
  }

  getFriendsSteps(friendsData) {
    return friendsData.map(friend => {
      const friendInfo = {}
      friend.reduce((acc, stepData) => {
        if (friendInfo.id !== stepData.userID) {
          friendInfo.id = stepData.userID
        }
        acc += stepData.numSteps
        friendInfo.stepTotal = acc
        return acc
      }, 0)
      return friendInfo
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
