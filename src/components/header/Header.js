import React, { Component } from "react";
import "./Header.css"

class Header extends Component {

    render() {
        return (


            <header>
                <div className="header">
                    <div className="logo">
                        <img className="monlogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Nbxbh6ckAj1RHddObYIGaF_sculcHj79Prb4Pe8dvBSbjVuU" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="search">
                                <input type="text" class="form-control input-sm" maxlength="64" placeholder="Search" />
                                <button type="submit" class="btn btn-primary btn-sm">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



        )
    }



}




export default Header