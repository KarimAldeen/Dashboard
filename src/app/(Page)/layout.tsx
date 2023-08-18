import Header from '../../Components/Layout/Header'
import SideBar from '../../Components/Layout/SideBar'
import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/AppStyle/Import.scss'
import QueryProvider from '@/lib/Query/ReactQueryProvider';
import ProtectedRoute from '@/lib/ProtectedRoute';

export const metadata: Metadata = { title: 'Create Next App', description: 'Generated by create next app', }

export default function RootLayout({ children }: { children: React.ReactNode }) {

  
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        
        <ProtectedRoute>
        <QueryProvider>

        
        <div className="DashboardLayout">

          <SideBar/>

          <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
            <Header/>
            <div className='Layout_Children'>
            {children}
            </div>
           
          </div>

        </div>
        </QueryProvider>
        </ProtectedRoute>
      </body>
    </html>
  )
}