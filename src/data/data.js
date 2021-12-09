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
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "You have just quit your job and decided to pursue your dream of becomming a Software Engineer! You've enrolled into a course and are ready to take on the challenge!",
      success: {
        path: '/challenge/2',
        reqSkill: 'coding',
        reqResult: 0
      },
      failure: {
        path: '/challenge/2',
      }
    }
  },
  {
    id: 2,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "Alright, time to get through the pre course work. It's not too difficult, hopefully you have at least a few coding skills to get through it.",
      success: {
        path: '/challenge/4',
        reqSkill: 'coding',
        reqResult: 2
      },
      failure: {
        path: '/challenge/3',
      }
    }
  },
  {
    id: 3,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "FAILED! You couldn't get through the pre course work and as such they don't accept you into the course. You didn't actually want to learn anyway, you were much happier living in your parents basement.",
      success: {
        path: '/',
        reqSkill: 'coding',
        reqResult: 0
      },
      failure: {
        path: '/',
      }
    }
  },
  {
    id: 4,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "SUCCESS! You begin the course and everything is going well so far. You're getting towards the end of the week and Joel tells you about the MTA homework. I mean it sounds complicated but I think if you can work on it without getting too distracted you should be able to get somewhere with it.",
      success: {
        path: '/challenge/5',
        reqSkill: 'procrastination',
        reqResult: 8
      },
      failure: {
        path: '/challenge/6',
      }
    }
  },
  {
    id: 5,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "SUCCESS! You did it. I mean it doesn't really work that well and your code is proper garbage but at least it sort of works. You keep trucking along and now it's time for the first project. Goal is to make a Tic-Tac-Toe game. You'll need some coding skills to get this done.",
      success: {
        path: '/challenge/7',
        reqSkill: 'coding',
        reqResult: 4
      },
      failure: {
        path: '/challenge/8',
      }
    }
  },
  {
    id: 6,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "Oh oh, you got distracted too easily and didn't really get anywhere with it. That doesn't matter though because the benefits to your mental health by not trying to get MTA done far outweigh any skills gained by doing it. Time for the first project. Goal is to make a Tic-Tac-Toe game. You'll need some coding skills to get this done.",
      success: {
        path: '/challenge/7',
        reqSkill: 'coding',
        reqResult: 4
      },
      failure: {
        path: '/challenge/8',
      }
    }
  },
  {
    id: 7,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "SUCCESS! You worked really hard and made a working Tic-Tac-Toe game. Now it's time for a group project. You'll really need to focus to get some work done as a group. It looks easy enough, it's called Buring Airlines...",
      success: {
        path: '/challenge/9',
        reqSkill: 'procrastination',
        reqResult: 6
      },
      failure: {
        path: '/challenge/10',
      }
    }
  },
  {
    id: 8,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "You Tic-Tac-Can't do it so you decide to quit. You always thought it was called noughts and crosses anyways, which is clearly why you was unable to get anything done.",
      success: {
        path: '/',
        reqSkill: 'coding',
        reqResult: 0
      },
      failure: {
        path: '/',
      }
    }
  },
  {
    id: 9,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "SUCCESS, well I mean sort of. The project doesn't work even a little bit and you're now scared of air travel but you managed to tough it out and are ready for the final project. You can do this!",
      success: {
        path: '/challenge/11',
        reqSkill: 'coding',
        reqResult: 7
      },
      failure: {
        path: '/challenge/12',
      }
    }
  },
  {
    id: 10,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "Burning Airlines breaks you. Your dreams are haunted by dark visions of crashing plane gifs. You will never fully recover from this. You are a shell of your former self.",
      success: {
        path: '/',
        reqSkill: 'coding',
        reqResult: 0
      },
      failure: {
        path: '/',
      }
    }
  },
  {
    id: 11,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "SUCCESS, you completed the final project and finished the course. Well done for choosing high numbers in the coding skill and low numbers in procrastination on the first page.",
      success: {
        path: '/',
        reqSkill: 'coding',
        reqResult: 0
      },
      failure: {
        path: '/',
      }
    }
  },
  {
    id: 12,
    quest: 'SEI-48 Quest',
    info: {
      decisionText: "FAILED! Why didn't you pick better numbers at the start of this quest. You literally get to choose - just give yourself better ratings.",
      success: {
        path: '/',
        reqSkill: 'coding',
        reqResult: 0
      },
      failure: {
        path: '/',
      }
    }
  }
]
