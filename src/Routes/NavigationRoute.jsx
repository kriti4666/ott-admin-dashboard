import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Language from '../Pages/Languages/Language'
import Genre from '../Pages/Genre/Genre'
import Movie from '../Pages/Movies/Movie'
import AddMovie from '../Pages/Movies/AddMovie'
import Shows from '../Pages/TvShows/Shows/Shows'
import AddShow from '../Pages/TvShows/Shows/AddShow'
import Seasions from '../Pages/TvShows/Seasons/Seasions'
import AddSession from '../Pages/TvShows/Seasons/AddSession'
import Episode from '../Pages/TvShows/Episodes/Episode'
import AddEpisode from '../Pages/TvShows/Episodes/AddEpisode'
import Artist from '../Pages/Artists/Artist'
import Technician from '../Pages/Technicians/Technician'
import AddSlider from '../Pages/Home/Slider/AddSlider'
import HomeSection from '../Pages/Home/Section/HomeSection'
import AddSection from '../Pages/Home/Section/AddSection'
import Slider from '../Pages/Home/Slider/Slider'
import Users from '../Pages/Users/UserSection/Users'
import UserHistory from '../Pages/Users/UserSection/UserHistory'
import AddUser from '../Pages/Users/UserSection/AddUser'
import Login from '../Pages/Auth/Login'
import EditMovie from '../Pages/Movies/EditMovie'
import EditShow from '../Pages/TvShows/Shows/EditShow'
import EditSession from '../Pages/TvShows/Seasons/EditSeason'
import EditEpisode from '../Pages/TvShows/Episodes/EditEpisode'
import AdminList from '../Pages/Users/SubAdmin/AdminList'
import AddAdmin from '../Pages/Users/SubAdmin/AddAdmin'
import Subscription from '../Pages/Plan/Subscription'
import AddPlan from '../Pages/Plan/AddPlan'
import Coupons from '../Pages/Coupons/Coupons'
import EditSlider from '../Pages/Home/Slider/EditSlider'

const NavigationRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/language" element={<Language/>}/>
        <Route path="/genres" element={<Genre/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path='/shows' element={<Shows/>}/>
        <Route path="/movie/addmovie" element={<AddMovie/>}/>
        <Route path="/movie/edit_movie" element={<EditMovie/>}/>
        <Route path='/shows/addShow' element={<AddShow/>}/>
        <Route path='/shows/edit_show' element={<EditShow/>}/>
        <Route path='/season' element={<Seasions/>}/>
        <Route path='/season/add_season' element={<AddSession/>}/>
        <Route path='/season/edit_season' element={<EditSession/>}/>
        <Route path='/episodes' element={<Episode/>}/>
        <Route path='/episodes/addepisode' element={<AddEpisode/>}/>
        <Route path='/episodes/edit_episode' element={<EditEpisode/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path='/technician' element={<Technician/>}/>
        <Route path='/home/slider' element={<Slider/>}/>
        <Route path='/home/slider/add_slider' element={<AddSlider/>}/>
        <Route path='/home/slider/edit_slider' element={<EditSlider/>}/>
        <Route path='/home/home_section' element={<HomeSection/>}/>
        <Route path='/home/section/add_section' element={<AddSection/>}/>
        <Route path='/users' element={<Users/>}/>  
        <Route path='/users/add_user' element={<AddUser/>}/>  
        <Route path='/users/user_history' element={<UserHistory/>}/>  
        <Route path='/users/sub_admin' element={<AdminList/>}/>  
        <Route path='/users/add_admin' element={<AddAdmin/>}/>  
        <Route path='/subscription_plan' element={<Subscription/>}/>
        <Route path='/subscription_plan/add_plan' element={<AddPlan/>}/>
        <Route path='/coupons' element={<Coupons/>}/>
        <Route path='/coupons/add_coupon' element={<Coupons/>}/>
    </Routes>
  )
}

export default NavigationRoute
