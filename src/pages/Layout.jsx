import React from 'react'
import { Outlet } from 'react-router-dom'
import { TopPlay, Sidebar, Searchbar} from '../components'

const Layout = () => {
  return (
    <div className="relative flex">
      {/* // 사이드바  */}
      <Sidebar />
      {/* // 메인화면 */}
      <main className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Outlet />
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </main>
      {/* 재생중인 목록이 잇다면 재생바 */}
    </div>
  );
}

export default Layout