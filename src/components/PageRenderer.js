import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const generatePage = (page) => {
    page = page.charAt(0).toUpperCase() + page.slice(1);
    console.log(page)
    const component = () => require (`../pages/${page}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)
    }
}

const PageRenderer = () => {

    const { 
        params : {page}
    } = useRouteMatch();

    return generatePage(page);
}

export default PageRenderer
