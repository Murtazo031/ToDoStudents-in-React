import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/style/globals.css';
import TodoList from '@/components/templates/organism/todoList';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TodoList/>
  </StrictMode>,
)
