{
  entities: {
    questions: {
      1: {
        id: 1,
        title: "How did our Moon form?",
        user_id: 12,
        topics: [9, 8],
        answers: [2, 7],
        upvotes: 12, (bonus)
      },
      2: {
        id: 2,
        title: "How do I start programming?",
        user_id: 3,
        topics: [6, 1],
        answers: [6, 11, 12],
        upvotes: 20, (bonus)
      },
      3: {
        id: 3,
        title: "Why did the Egyptians build pyramids?",
        user_id: 6,
        topics: [3],
        answers: [10],
        upvotes: 2, (bonus)
      }
    },
    users: {
      3: {
        id: 3,
        username: 'John Smith',
        known_topics: [8, 9],
        questions: [1, 2, 3],
        answers: [6],
        profile_img: 'some_img_url',
      },
      6: {
        id: 6,
        username: 'Lorene Ipsum',
        known_topics: [2, 1, 4],
        questions: [4],
        answers: [2],
        profile_img: 'another_img_url',
      }
      12: {
        id: 12,
        username: 'Jane Doe',
        known_topics: [3, 5],
        questions: [6, 10],
        answers: [10],
        profile_img: 'yet_another_img_url',
      }
    },
    answers: {
      2: {
        id: 2,
        question_id: 1,
        user_id: 3,
        body: 'The moon was formed when an asteroid collided with the Earth 4.5 billions years ago.'
        replies: [10],
      },
      6: {
        id: 6,
        question_id: 2,
        user_id: 6,
        body: 'Start by working on some free online coding tutorial. You can also start by joining a coding bootcamp like AppAcademy.',
        replies: [1, 4],
      },
      10: {
        id: 10,
        question_id: 3,
        user_id: 12,
        body: 'Pyramids were built as burial chambers for pharaohs and their royal families.'
        replies: [2],
      }
    },
    topics: {
      1: {
        id: 1,
        tag: 'programming',
      },
      2: {
        id: 2,
        tag: 'technology',
      }
      3: {
        id: 3,
        tag: 'history'
      }
    },
    Taggings(jointable for topics and questions): {
      1: {
        topic_id: 1,
        question_id: 2,
      },
      2: {
        topic_id: 2,
        question_id: 2,
      },
      3: {
        topic_id: 3,
        question_id: 3,
      }
    },
    replies(bonus): {
      1: {
        user_id: 3,
        answer_id: 6,
        reply: 'Great answer. You learn everything about how to become the best programmer out there.'
      },
      2: {
        user_id: 8,
        answer_id: 10,
        reply: 'They also served as a path for the families to reach the underworld.'
      }
    },
    Followings(SelfJoinTable)(bonus): {
      1: {
        follower_id: 3,
        followed_id: 6,
      },
      2: {
        follower_id: 1,
        followed_id: 9,
      }
    }
  },
  ui: {
    modals: ['SearchQuestion', 'AddQuestion'],
    dropdown: ['SearchQuestion'],
  },
  errors: {
    login: ["Incorrect username/password combination"],
    AddQuestion: ["Question body cannot be blank"],
    AddAnswer: ["Answer cannot be blank"],
    AddTopics: ["Topic cannot be blank for question"],
  },
  session: {
    id: 42,
    username: 'D Adams',
  }
}
