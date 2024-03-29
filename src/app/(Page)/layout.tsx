import Header from '../../Layout/app/Header'
import SideBar from '../../Layout/app/SideBar'
import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/AppStyle/Import.scss'
// import QueryProvider from '@/lib/Query/ReactQueryProvider';
// import ProtectedRoute from '@/lib/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GetUserData from '@/Hooks/Auth/GetUserData';

export const metadata: Metadata = { title: 'Create Next App', description: 'Generated by create next app', }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    
  const UserData = GetUserData() 
  
  return (
    <html lang="en">
      <head>

      </head>
      <body>
      <ToastContainer />

        {/* <ProtectedRoute> */}
        {/* <QueryProvider> */}

        
        <div className="DashboardLayout">

          <SideBar/>

          <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
            <Header UserData={UserData}/>
            <div className='Layout_Children'>
            {children}
            </div>
          </div>

        </div>
        {/* </QueryProvider> */}
        {/* </ProtectedRoute> */}
      </body>
    </html>
  )
}
