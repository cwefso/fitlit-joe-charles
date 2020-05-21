const chai = require('chai')
const expect = chai.expect
const Activity = require('../src/Activity')
const User = require('../src/User')

let activity
let activity2
let user1
let activityData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 6637,
    "minutesActive": 175,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 4112,
    "minutesActive": 220,
    "flightsOfStairs": 37
  },

  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 12304,
    "minutesActive": 152,
    "flightsOfStairs": 8
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 14329,
    "minutesActive": 168,
    "flightsOfStairs": 18
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 13750,
    "minutesActive": 65,
    "flightsOfStairs": 4
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numSteps": 4547,
    "minutesActive": 97,
    "flightsOfStairs": 5
  },
  {
    "userID": 1,
    "date": "2019/09/22",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 4,
    "date": "2019/06/08",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/09",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/10",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/11",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/12",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/13",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/14",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numSteps": 3486,
    "minutesActive": 114,
    "flightsOfStairs": 32
  },
  {
    "userID": 16,
    "date": "2019/06/08",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/09",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/10",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/11",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/12",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/13",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/14",
    "numSteps": 4496,
    "minutesActive": 234,
    "flightsOfStairs": 0
  },
  {
    "userID": 16,
    "date": "2019/06/15",
    "numSteps": 6188,
    "minutesActive": 292,
    "flightsOfStairs": 32
  }
]
let activityData2 = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 6637,
    "minutesActive": 175,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 4112,
    "minutesActive": 220,
    "flightsOfStairs": 37
  },

  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 12304,
    "minutesActive": 152,
    "flightsOfStairs": 8
  },

  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 13750,
    "minutesActive": 65,
    "flightsOfStairs": 4
  },
]
let userData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4
    ]
  },
  {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
      48,
      7,
      44,
      8
    ]
  },
  {
    "id": 16,
    "name": "Garnett Cruickshank",
    "address": "992 Zita Mall, North Tremainemouth MA 19312-3532",
    "email": "Laverna47@hotmail.com",
    "strideLength": 3.9,
    "dailyStepGoal": 10000,
    "friends": [
      25,
      31,
      3,
      16
    ]
  }
]

beforeEach(function() {
  user1 = new User(userData[0])
  activity = new Activity(activityData, user1, userData, '2019/09/22')
  activity2 = new Activity(activityData2, user1, userData, '2019/06/17')
})


describe('Activity', function() {

  it('should be an function', function() {
    expect(Activity).to.be.a('function')
  })
  it('should be an instance of Activty', function() {
    expect(activity).to.be.an.instanceof(Activity)
  })
  it('should be an instance of Activty even if no activityData is passed', function() {
    let activity1 = new Activity('', user1)
    expect(activity1.activityData).to.equal(null)
  })
  it('should be an instance of Activty even if no user is passed', function() {
    let activity1 = new Activity(activityData)
    expect(activity1.currentUser).to.deep.equal({id: 0, name: 'no user'})
  })
  it('should get activity data for a specific user', function() {
    expect(activity.getUserActivityData(activityData2)).to.deep.equal([activityData[0], activityData[3]])
  })
  it('if no activity data is passed in it should default to this.activityData', function() {
    expect(activity2.getUserActivityData('', user1)).to.deep.equal([activityData[0], activityData[3]])
  })
  it('if no activity data is passed in it should default to this.activityData', function() {
    expect(activity2.getUserActivityData('', user1)).to.deep.equal([activityData[0], activityData[3]])
  })
  it('it should get todays activity', function() {
    expect(activity2.getTodaysActivity('2019/06/15')).to.deep.equal([activityData[0], activityData[1], activityData[2]])
  })
  it('if a date is not specified it should the activity for todays date', function() {
    expect(activity.getTodaysActivity()).to.deep.equal([activityData[9]])
  })
  it('should get a users activity data for a specific day', function() {
    expect(activity.getUserActivityToday('2019/06/15')).to.deep.equal(activityData[0])
  })
  it('if a date is not specified it should get a users activity for todaysDate', function() {
    expect(activity.getUserActivityToday()).to.deep.equal(activityData[9])
  })
  it('should return how many miles a user has walked on a specific day', function() {
    expect(activity.getMilesWalkedToday('2019/06/15')).to.equal('2.9')
  })
  it('if a date argument is not passed in it should default to todays date', function() {
    expect(activity.getMilesWalkedToday()).to.equal('2.9')
  })
  it('should return how many minutes the user was active', function() {
    expect(activity.getUserActivityMinutes('2019/06/16')).to.equal(175)
  })
  it('if a date argument is not passed in it should default to todays date', function() {
    expect(activity2.getUserActivityMinutes('2019/06/16')).to.equal(175)
  })
  it('should return how many minutes the user was active for a given week', function() {
    expect(activity.getWeekActiveMinutesAverage('2019/06/17')).to.deep.equal([
      activityData[6],
      activityData[3],
      activityData[0],
      undefined, undefined, undefined, undefined
    ])
  })
  it('if a date argument is not passed in it should default to todays date', function() {
    expect(activity.getWeekActiveMinutesAverage()).to.deep.equal([
      activityData[9],
      activityData[6],
      activityData[3],
      activityData[0],
      undefined, undefined, undefined
    ])
  })
  it('should return true if the user has reached their step goal for the day', function() {
    expect(activity.getWasStepGoalAchieved('2019/06/17')).to.equal(true)
  })
  it('if a date argument is not passed in it should default to todays date', function() {
    expect(activity.getWasStepGoalAchieved()).to.equal(false)
  })
  it('should return false if the user has not reached their step goal for the day', function() {
    expect(activity.getWasStepGoalAchieved('2019/06/16')).to.equal(false)
  })
  it('should return all days that the user exceded their step goal', function() {
    expect(activity.getAllDaysStepGoalWasExceeded()).to.deep.equal([activityData[6]])
  })
  it('should return all days that the user exceded their step goal', function() {
    expect(activity.getAllDaysStepGoalWasNotExceeded()).to.deep.equal([activityData[0], activityData[3], activityData[9]])
  })
  it('a user should be able to see their all-time stair climbing record', function() {
    expect(activity.getStairClimbRecord()).to.equal(36)
  })
  it('it should return the average number of stairs for all users for a specific date', function() {
    expect(activity.getAveragesForAll('2019/06/15', 'flightsOfStairs')).to.equal(25)
  })
  it('it should return the average number of steps for all users for a specific date', function() {
    expect(activity.getAveragesForAll('2019/06/15', 'numSteps')).to.equal(4989)
  })
  it('it should return the average minutes active for all users for a specific date', function() {
    expect(activity.getAveragesForAll('2019/06/15', 'minutesActive')).to.equal(160)
  })
  it('if a date argument is not passed in it should default to todays date', function() {
    expect(activity2.getAveragesForAll('', 'minutesActive')).to.equal(65)
  })
  it('should be able to get the users friends', function() {
    expect(activity.getFriendsData(user1, "2019/06/15", [userData[1], userData[2]])).to.deep.equal([
      [
        activityData[17],
        activityData[16],
        activityData[15],
        activityData[14],
        activityData[13],
        activityData[12],
        activityData[11],
        activityData[10]
      ],
      [
        activityData[25],
        activityData[24],
        activityData[23],
        activityData[22],
        activityData[21],
        activityData[20],
        activityData[19],
        activityData[18]]])
  })
  it('it should be able to get total steps for each of the users friends', function() {
    const friendsData = activity.getFriendsData(user1, "2019/06/15", [userData[1], userData[2]])
    expect(activity.getFriendsSteps(friendsData)).to.deep.equal([
      { id: 4, stepTotal: 78309 },
      { id: 16, stepTotal: 37660 }])
  })
})
