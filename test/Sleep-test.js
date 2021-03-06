const chai = require('chai')
const expect = chai.expect
const Sleep = require('../src/Sleep')
const User = require('../src/User')

let sleep
let sleep1
let sleep2
let user1
let user2
let sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 4.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 3.8
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.7,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 8.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 2.6
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 5.3,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 10.4,
    "sleepQuality": 3.1
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 10.8,
    "sleepQuality": 3.2
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 9.8,
    "sleepQuality": 2.6
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 5.9,
    "sleepQuality": 2.5
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 10.7,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 9.6,
    "sleepQuality": 2.5
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 7.2,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 5.2,
    "sleepQuality": 2.3
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 9.3,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 10.1,
    "sleepQuality": 2.4
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 9.4,
    "sleepQuality": 1.2
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 8.3,
    "sleepQuality": 1.9
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 7.8,
    "sleepQuality": 4.2
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 4.3,
    "sleepQuality": 4.8
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 8.9,
    "sleepQuality": 3.7
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 10.6,
    "sleepQuality": 2.7
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "hoursSlept": 7,
    "sleepQuality": 3
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "hoursSlept": 4.8,
    "sleepQuality": 3.3
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "hoursSlept": 9.8,
    "sleepQuality": 2.1
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 7.7,
    "sleepQuality": 1.5
  }
]

let sortedSleepers =
[{"userID": 1, "entries": [
  {"date": "2019/06/15", "hoursSlept": 6.1, "sleepQuality": 2.2},
  {"date": "2019/06/16", "hoursSlept": 4.1, "sleepQuality": 3.8},
  {"date": "2019/06/17", "hoursSlept": 8, "sleepQuality": 2.6},
  {"date": "2019/06/18", "hoursSlept": 10.4, "sleepQuality": 3.1},
  {"date": "2019/06/19", "hoursSlept": 10.7, "sleepQuality": 1.2},
  {"date": "2019/06/20", "hoursSlept": 9.3, "sleepQuality": 1.2},
  {"date": "2019/06/21", "hoursSlept": 7.8, "sleepQuality": 4.2},
  {"date": "2019/06/22", "hoursSlept": 7, "sleepQuality": 3}
]
},
{"userID": 2, "entries": [
  {"date": "2019/06/15", "hoursSlept": 7, "sleepQuality": 4.7},
  {"date": "2019/06/16", "hoursSlept": 7.5, "sleepQuality": 3.8},
  {"date": "2019/06/17", "hoursSlept": 5.7, "sleepQuality": 3},
  {"date": "2019/06/18", "hoursSlept": 10.8, "sleepQuality": 3.2},
  {"date": "2019/06/19", "hoursSlept": 9.6, "sleepQuality": 2.5},
  {"date": "2019/06/20", "hoursSlept": 10.1, "sleepQuality": 2.4},
  {"date": "2019/06/21", "hoursSlept": 4.3, "sleepQuality": 4.8},
  {"date": "2019/06/22", "hoursSlept": 4.8, "sleepQuality": 3.3}
]
},
{"userID": 3, "entries": [
  {"date": "2019/06/15", "hoursSlept": 10.8, "sleepQuality": 4.7},
  {"date": "2019/06/16", "hoursSlept": 10.7, "sleepQuality": 3.4},
  {"date": "2019/06/17", "hoursSlept": 5.3, "sleepQuality": 4.9},
  {"date": "2019/06/18", "hoursSlept": 9.8, "sleepQuality": 2.6},
  {"date": "2019/06/19", "hoursSlept": 7.2, "sleepQuality": 3.4},
  {"date": "2019/06/20", "hoursSlept": 9.4, "sleepQuality": 1.2},
  {"date": "2019/06/21", "hoursSlept": 8.9, "sleepQuality": 3.7},
  {"date": "2019/06/22", "hoursSlept": 9.8, "sleepQuality": 2.1}
]
},
{"userID": 4, "entries": [
  {"date": "2019/06/15", "hoursSlept": 5.4, "sleepQuality": 3},
  {"date": "2019/06/16", "hoursSlept": 8.3, "sleepQuality": 4.5},
  {"date": "2019/06/17", "hoursSlept": 5.7, "sleepQuality": 1.1},
  {"date": "2019/06/18", "hoursSlept": 5.9, "sleepQuality": 2.5},
  {"date": "2019/06/19", "hoursSlept": 5.2, "sleepQuality": 2.3},
  {"date": "2019/06/20", "hoursSlept": 8.3, "sleepQuality": 1.9},
  {"date": "2019/06/21", "hoursSlept": 10.6, "sleepQuality": 2.7},
  {"date": "2019/06/22", "hoursSlept": 7.7, "sleepQuality": 1.5}
]
}
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
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      19,
      11,
      42,
      33
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
  }
]

describe('sleep', function() {

  beforeEach(function() {
    user1 = new User(userData[0])
    user2 = new User(userData[1])
    sleep = new Sleep(sleepData, userData)
    sleep1 = new Sleep(sleepData, user1)
    sleep2 = new Sleep(sleepData, user2)
  })

  it('should be an function', function() {
    expect(Sleep).to.be.a('function')
  })
  it('should have sleepData', function() {
    expect(sleep1.sleepData).to.equal(sleepData)
  })
  it('should have a currentUser', function() {
    expect(sleep1.currentUser).to.deep.equal(user1)
  })
  it('should be able to get a users sleep data', function() {
    expect(sleep1.getUserSleepData()).to.deep.equal([
      sleepData[0],
      sleepData[4],
      sleepData[8],
      sleepData[12],
      sleepData[16],
      sleepData[20],
      sleepData[24],
      sleepData[28]])
    expect(sleep2.getUserSleepData()).to.deep.equal([
      sleepData[1],
      sleepData[5],
      sleepData[9],
      sleepData[13],
      sleepData[17],
      sleepData[21],
      sleepData[25],
      sleepData[29]
    ])
  })
  it('should be able to get users average daily sleep', function() {
    expect(sleep1.getAverageDailySleep()).to.equal(7.92)
  })
  it('should be able to get users average daily sleep quality', function() {
    expect(sleep1.getAverageSleepQuality()).to.equal(2.66)
  })
  it('should be able to get a how many hours a user slept on a specific day', function() {
    expect(sleep1.getSleepForSpecificDay('2019/06/16')).to.equal(4.1)
  })
  it('should be able to get a users sleep quality on a specific day', function() {
    expect(sleep1.getQualityForSpecificDay('2019/06/16')).to.equal(3.8)
  })
  it('should be able to get a week of hours sleep data', function() {
    expect(sleep1.getOneUserWeekOfSleepData('2019/06/22', sleepData)).to.deep.equal([
      { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
      { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
      { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
      { userID: 1, date: '2019/06/19', hoursSlept: 10.7, sleepQuality: 1.2 },
      { userID: 1, date: '2019/06/18', hoursSlept: 10.4, sleepQuality: 3.1 },
      { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
      { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
    ]
    )
  })
  it('should be able to get total hours slept for each day in a week for one user', function() {
    expect(sleep1.getWeekofHoursSlept('2019/06/21')).to.deep.equal([ 7.8, 9.3, 10.7, 10.4, 8, 4.1, 6.1 ])
  })
  it('should be able to get quality of sleep for each day in a week for one user', function() {
    expect(sleep1.getWeekofSleepQuality('2019/06/21')).to.deep.equal([ 4.2, 1.2, 1.2, 3.1, 2.6, 3.8, 2.2 ])
  })
  it('should be able to get all users average daily sleep quality', function() {
    expect(sleep1.getAllUsersAverageSleepQuality()).to.deep.equal(2.95)
  })
  it('should be able to get sorted sleepers', function() {
    expect(sleep.sortSleeps()).to.deep.equal(sortedSleepers)
  })
  it('should be able to get best sleepers', function() {
    expect(sleep.getBestSleepers('2019/06/15')).to.deep.equal([
      { userID: 2, sleepAverage: 3.96 },
      { userID: 3, sleepAverage: 3.71 },
      { userID: 1, sleepAverage: 3.04 }
    ])
  })
  it('should be able to get top sleeper for a day', function() {
    expect(sleep.getTopSleeper('2019/06/15')).to.deep.equal(3)
  })
  it('should be able to get top sleeper for a day', function() {
    expect(sleep.getWorstSleeper('2019/06/15')).to.deep.equal(4)
  })
})
