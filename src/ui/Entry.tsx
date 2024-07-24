
interface IProps {
    imageSrc: string;
}

const Entry = ({imageSrc} : IProps) => {
  return (
    <div>
        <img src={imageSrc}/>
    </div>
  )
}

export default Entry