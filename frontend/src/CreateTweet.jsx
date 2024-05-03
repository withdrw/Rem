import { useState } from "react"
import { useDispatch } from "react-redux"
import { postTweets } from "./store/tweet"

function CreateTweet() {

    const [newTweet, setNewTweet] = useState("")

    const dispatch = useDispatch()


    console.log("THIS IS THE FIRST ONE ")

    const newChange = (e) => {
        setNewTweet(e.target.value)

            console.log("SECOND ONE FOR CHANGE")
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            if (newTweet.trim() !== '') {
                    console.log("THIS IS THE THIRD ONE")
                dispatch(postTweets(newTweet))
                console.log("THIS IS THE FOURTH ONE");
                // console.log(dispatch(postTweets(tweet)));
            }

        }


    return (
      <>
        <h1>CreateTweet</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTweet}
            placeholder="Create a tweet"
            onChange={newChange}
          />

          <button type="submit">Submit</button>
        </form>
      </>
    );
}

export default CreateTweet
