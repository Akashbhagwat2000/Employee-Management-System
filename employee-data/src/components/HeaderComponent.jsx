import React, { Component } from 'react'


export default class HeaderComponent extends Component {
  render() {
    return (
    <div>
        <header >
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div>
                    <a className="navbar-brand " href="/">Employee Management Syatem</a>
                </div>
            </nav>
        </header>      
    </div>  
    )
  }
}
