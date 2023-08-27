import { FaHome ,FaApple,FaBimobject ,FaGgCircle} from "react-icons/fa";

export const SideBar_Links =[
    {
    Name : "Home",
    href : "/",
    Icon : <FaHome/>
    },
    {
        Name : "Users",
        href : "/users",
        Icon : <FaApple/>
    },
    {
        Name : "color",
        href : "/color",
        Icon : <FaBimobject/>
    },
    {
        Name : "donkey",
        href : "/donkey",
        Icon : <FaGgCircle/>
    }
    ,
    {
        Name : "Sub",
        Icon : <FaGgCircle/>,
        children: [
            {
                Name : "Subdonkey",
                href : "/Subdonkey",
                Icon : <FaGgCircle/>  
            },
            {
                Name : "Submoney",
                href : "/Submoney",
                Icon : <FaGgCircle/>  
            }
        ]
      
    }
    ,
    {
        Name : "donkey",
        href : "/donkey",
        Icon : <FaGgCircle/>
    }
    ,
    {
        Name : "donkey",
        href : "/donkey",
        Icon : <FaGgCircle/>
    }
    ,
    {
        Name : "donkey",
        href : "/donkey",
        Icon : <FaGgCircle/>
    }
    ,
    {
        Name : "donkey",
        href : "/donkey",
        Icon : <FaGgCircle/>
    }
    ,
    {
        Name : "donkey",
        href : "/donkey",
        Icon : <FaGgCircle/>
    }
   
   
    
]