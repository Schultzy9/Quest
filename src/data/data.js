export const Data = [
  {},
  {
    id: 1,
    quest: 'Project Quest',
    info: {
      decisionText: "It's the final project week of the course. It's time to do something amazing to really show off your mad skills as a programmer. First big decision to make - should I use a login? It makes the project a lot more difficult but does allow for better user interaction.",
      choiceOne: {
        text: 'Use Login',
        path: '/choice/2'
      },
      choiceTwo: {
        text: 'Better not risk it',
        path: '/choice/3'
      }
    }
  },
  {
    id: 2,
    quest: 'Project Quest',
    info: {
      decisionText: "You have decided to use login. You have wasted your weekend trying to get it to work and nothing is happening. You hate life. Why would you do this? You only have a week to get the project done this is insane. Big decision time. Do you give up, or do you sacrifice sleep to get this working?",
      choiceOne: {
        text: 'Give Up',
        path: '/final/4'
      },
      choiceTwo: {
        text: 'I live for pain',
        path: '/choice/10'
      }
    }
  },
  {
    id: 3,
    quest: 'Project Quest',
    info: {
      decisionText: "You've made the smart decision by not using login and you get to enjoy your weekend as the project is so easy now. I suppose you probably should try and do something a little challenging since this is meant to show off what you can do. When you sit down to get the work done you realise that this week the Big Bash and the Ashes have both started. Do you watch cricket all week and forget about the project or do you continue working?",
      choiceOne: {
        text: "I don't like cricket",
        path: '/choice/5'
      },
      choiceTwo: {
        text: 'I love it!',
        path: '/final/6'
      }
    }
  },
  {
    id: 4,
    quest: 'Project Quest',
    info: {
      decisionText: "You have decided to use give up on using login. You're sad that you wasted so much time but in the long run I think you're better off because now you can actually work on something more exciting. You scramble somthing together and get through the week. Well done.",
      choiceOne: {
        text: 'Take on another Quest',
        path: '/'
      },
      choiceTwo: {
        text: 'DO NOT USE',
        path: '/'
      }
    }
  },
  {
    id: 5,
    quest: 'Project Quest',
    info: {
      decisionText: "Why don't you like cricket? Cricket is great. You should like cricket. Change your mind?",
      choiceOne: {
        text: 'Sorry, I actually do like cricket',
        path: '/final/6'
      },
      choiceTwo: {
        text: 'Leave me alone, I can not like things',
        path: '/final/7'
      }
    }
  },
  {
    id: 6,
    quest: 'Project Quest',
    info: {
      decisionText: "You spend all week watching cricket and have a great time. This course was stupid anyway. You decide to drop out of the course and focus on watching cricket full time. You live a long and fulfilling life.",
      choiceOne: {
        text: 'Take on another quest',
        path: '/'
      },
      choiceTwo: {
        text: 'DO NOT USE',
        path: '/'
      }
    }
  },
  {
    id: 7,
    quest: 'Project Quest',
    info: {
      decisionText: "This game is over. If you don't like cricket I'm not interested in continuing talking to you. Goodbye",
      choiceOne: {
        text: 'Take on another quest',
        path: '/'
      },
      choiceTwo: {
        text: 'DO NOT USE',
        path: '/'
      }
    }
  },
  {
    id: 8,
    quest: 'Project Quest',
    info: {
      decisionText: "SUCCESS!!! You nailed it! You are basically a computer God for figuring this out. You have login working and everything else goes smoothly. You get your dream job at Facebook and continue making great content for them for the rest of your life.",
      choiceOne: {
        text: 'Take on another quest',
        path: '/'
      },
      choiceTwo: {
        text: 'DO NOT USE',
        path: '/'
      }
    }
  },
  {
    id: 9,
    quest: 'Project Quest',
    info: {
      decisionText: "FAILED! You couldn't figure it out and now you have nothing to submit at the end of the week. You show your Tic-Tac-Toe project again and Joel looks at you with sad judgemental eyes. 'I'm not angry, I'm just disappointed,' he says. You cry yourself to sleep.",
      choiceOne: {
        text: 'Take on another quest',
        path: '/'
      },
      choiceTwo: {
        text: 'DO NOT USE',
        path: '/'
      }
    }
  },
  {
    id: 10,
    quest: 'Project Quest',
    info: {
      decisionText: "You animal, I love the enthusiasm and belief in your abilities. Are you gonna take this on yourself or are you gonna make Pat and Rowena stay up all night to help you get this done.",
      choiceOne: {
        text: 'Make Pat and Rowena suffer',
        path: '/final/8'
      },
      choiceTwo: {
        text: 'I can do this!',
        path: '/final/9'
      }
    }
  }
]

export const ChallengeData = [
  {},
  {
    id: 1,
    quest: 'Project Quest',
    info: {
      decisionText: 'Challenge time! I hope you chose a high number for your programming skills. Good luck',
      success: {
        path: '/final/8'
      },
      failure: {
        path: '/final/9'
      }
    }
  }
]
