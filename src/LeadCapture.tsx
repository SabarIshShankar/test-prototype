import { useRef, useState, useEffect } from 'react'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import "react-spring-bottom-sheet/dist/style.css";

export default function LeadCapture() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  function onDismiss() {
    setOpen(false)
  }
  return (
    <div>
    <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet
          open={open}
          onDismiss={onDismiss}
          snapPoints={({ minHeight }) => minHeight}
        >
          Ok
          </BottomSheet>
          </div>
  )
}