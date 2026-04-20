
export const PostCard = ({text, id, time}) => {
    return (
        <div>
        <div>
          <p id="one">
            Author@{id}
          </p>
          <p id = "two">
            {text}
          </p>
          <p id = "three">
            {time}
          </p>
        </div>
      </div>
    )
}
