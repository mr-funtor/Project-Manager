import { useEffect, useState } from "react"
import type { PropsWithChildren } from "react"
import { createPortal } from "react-dom"

const styles={
  approveModalShow:`fixed inset-0 h-full w-full bg-black/50 flex items-center justify-center z-40`,
  approveModalHidden:`hidden`,
}

type DetailsModalProps ={
  isModalOpen: boolean,
  onRequestClose: ()=> void,
} & PropsWithChildren


const DynamicModal = ({isModalOpen, onRequestClose ,children}:DetailsModalProps) =>{
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => { document.body.style.overflow = 'unset'; }
  }, [isModalOpen]);


  if (!mounted || !isModalOpen) return null;

  return createPortal(
    <section 
      className={isModalOpen ? styles.approveModalShow : styles.approveModalHidden}
      onClick={onRequestClose}
    >
      <div onClick={(e)=>{e.stopPropagation()}}>
        {children}
      </div>
    </section>,
    
    document.body
  )
}

export default DynamicModal