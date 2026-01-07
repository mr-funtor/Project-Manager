import { NavLink } from "react-router"
import { mainRoutes } from "@/routes/mainRoutes";


const styles ={
  container:`h-full w-58 bg-dark-light-background border-r border-gray-400/40  px-6 py-10 text-white fixed top-0`,
  logoHeroContainer:`h-7 w-28 `,
  navItems:`flex mt-2 pl-5 py-2 cursor-pointer`,
  frontMarking:`border-l-4 border-gray-400`,
  subNav:`flex pl-16 text-xs py-2 cursor-pointer`,
}



const SideNavbar=()=>{
    

  return(
  <nav className={styles.container}>

      <div className="mt-16 h-[75%] overflow-scroll overflow-x-hidden overflow-y-hidden ">
          <ul className="list-none">
              {
                mainRoutes.map((item,index)=>{
                 return (
                    <NavLink
                      key={index}
                      to={item.navigateTo} 
                    >
                      {({isActive})=>(
                        <div className={`px-2 py-2 mb-2 ${ isActive ? "bg-gray-400/20 border " : 'text-gray-700 hover:bg-gray-200/30'} rounded-md flex items-center font-bold`}>
                            <item.icon className="text-sm text-black"/>
                            <p className="ml-2 text-sm text-black">{item.name}</p>
                        </div>
                      )}
                    </NavLink>
                )
              })
              }
          </ul>
      </div>

      
        {/* <div 
          className="flex items-center mt-8 absolute bottom-12 cursor-pointer pl-5 py-2 "
          onClick={()=>null}
        >
          <FaRightFromBracket className="text-red-600 text-sm"/>
          <p className="font-medium text-red-600 ml-2">Logout</p>
        </div> */}

      
  </nav>
  )
}

export default SideNavbar