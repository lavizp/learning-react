import React,{useID} from 'react'

function useID() {
    const passwordHintId = useId();
  return (
    <>
        <input type="password" aria-describedby={passwordHintId} />
        <p id={passwordHintId}>asd</p>
    </>
  )
}

export default useID