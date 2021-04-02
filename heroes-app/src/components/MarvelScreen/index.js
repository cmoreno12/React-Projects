import React from 'react'
import { HeroListScreen } from '../HeroListScreen'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroListScreen publisher="Marvel Comics"/>
        </div>
    )
}
