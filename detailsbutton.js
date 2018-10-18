import React from 'react'
import {Button} from 'react-native'
import {withNavigation} from 'react-navigation'

class DetailsButton extends React.Component{
    render(){
        return(
            <Button title="More Info" 
            onPress={()=>{this.props.navigation.navigate('Details',{
                movieTitle: this.props.title,
                moviePoster: this.props.poster,
            })}}
            
            />
        )
    }
}

export default withNavigation(DetailsButton)