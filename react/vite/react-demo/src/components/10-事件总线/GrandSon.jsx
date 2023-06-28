import React, { Component } from 'react'
import Context from './context';

export default class GrandSon extends Component {
    render() {
        return (
            <div>
                GrandSon
                <Context.Consumer>
                    {
                        (value) => {
                            console.log(value);
                            return (

                                <div>
                                    {
                                        value.map(item => {
                                            return (
                                                <div key={item.id}>{item.name}</div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
