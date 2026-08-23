import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import CreateEmp from '../pages/CreateEmp'
import ShowEmp from '../pages/ShowEmp'

const AllRoute = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/create-emp' element={<CreateEmp />}/>
            <Route path='/' element={<ShowEmp />}/>
        </Route>
    </Routes>
  )
}

export default AllRoute