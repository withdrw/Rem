// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const POST_TWEETS = 'tweet/postTweets'

//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};
const newTweets = (tweets) => {
  return {
    type: POST_TWEETS,
    tweets
  };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets/');
  if (response.ok) {
    const data = await response.json();
    dispatch(loadTweets(data));
    return data;
  }
};
export const postTweets = (tweet) => async (dispatch) => {
  try {
    console.log("----------------->",tweet)
    const response = await fetch("/api/tweets/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweet),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(newTweets(data));
      return data;
    } else {
      throw new Error("Failed to add post");
    }
  } catch (error) {
    console.error(error);
  }
};


// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case POST_TWEETS: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState
      }
    default:
      return state;
  }
};

export default tweetsReducer;
