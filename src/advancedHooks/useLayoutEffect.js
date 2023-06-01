import { useLayoutEffect, useState, useRef } from 'react'

function useLayoutEffect() {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0); // You don't know real height yet
  
    useLayoutEffect(() => {
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height); // Re-render now that you know the real height
    }, []);
  return (
    <div>useLayoutEffect</div>
  )
}

export default useLayoutEffect