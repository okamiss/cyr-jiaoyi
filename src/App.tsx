import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import NavigationBar from './components/NavBar'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

const App = () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
      badge: '5'
    },
    {
      key: 'message',
      title: '消息',
      icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
      badge: '99+'
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />
    }
  ]

  const [activeKey, setActiveKey] = useState('todo')

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
        ))}
      </TabBar>
    </div>
  )
}

export default App
