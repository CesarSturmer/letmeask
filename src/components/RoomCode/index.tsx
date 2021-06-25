import copyImg from '../../assets/images/copy.svg'
import './style.scss' 

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeClipboard() {
    navigator.clipboard.writeText(props.code)
  }
  return (
    <button className="room-code" onClick={copyRoomCodeClipboard}>
      <div>
        <img src={copyImg} alt="" />
      </div>
      <span>
        sala -Md-xnJBjTHbPq59_cyH
      </span>
    </button>
  )
}