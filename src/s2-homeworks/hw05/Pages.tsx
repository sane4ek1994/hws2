import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route index path={'/'} element={<PreJunior/>}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route index path={'/pre-junior'} element={<PreJunior/>}/>
                <Route index path={'/junior'} element={<Junior/>}/>
                <Route index path={'/junior-plus'} element={<JuniorPlus/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'*'} element={<Error404 />}/>
            </Routes>
        </div>
    )
}

export default Pages
