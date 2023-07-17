import Arrow from "./Arrow";

type Props = {
    up: () => void;
    down: () => void;
}

const ArrowNavigation = ({up, down}: Props) => (
        <div className={`fixed z-2 right-[20px] top-[40%]`}>
            <Arrow degree={0} onClick={up}  />
            <div className='bg-white h-[120px] w-[2px] mt-[5px] mb-[5px]'>
            </div>
            <Arrow degree={180} onClick={down}  />
        </div>
  )

export default ArrowNavigation