// Write your code here
import {useState} from 'react'

import {BgContainer, LockImg, StatusTxt, LockBtn} from './styledComponents'

const Unlock = () => {
  const [isBtnClicked, changeStatus] = useState(false)

  const onClickStatusChangeBtn = () => {
    changeStatus(prevState => !prevState)
  }

  const statusImg = isBtnClicked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const statusAltText = isBtnClicked ? 'unlock' : 'lock'
  const statusTxt = isBtnClicked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const lockStatusText = isBtnClicked ? 'Lock' : 'Unlock'

  return (
    <>
      <BgContainer>
        <LockImg src={statusImg} alt={statusAltText} />
        <StatusTxt>{statusTxt}</StatusTxt>
        <LockBtn type="button" onClick={onClickStatusChangeBtn}>
          {lockStatusText}
        </LockBtn>
      </BgContainer>
    </>
  )
}

export default Unlock
