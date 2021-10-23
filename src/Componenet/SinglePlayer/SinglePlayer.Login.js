import React, { Component } from 'react'
import { withRouter } from 'react-router';

 class SinglePlayerLogin extends Component {
    
   constructor(props)
   {
     super(props);
     this.onChangeName = this.onChangeName.bind(this);
     this.onSubmit = this.onSubmit.bind(this)
   }

   onChangeName(e)
   {
     this.props.OnChange(e.target.value)
   }
   onSubmit(e)
   {
    e.preventDefault();
    this.props.history.push("/SinglePlayer/Create");
   }


    render() {
        return (
            <div>
           <form onSubmit={this.onSubmit}>
           <input
           autoFocus 
           placeholder="Name"
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.onChangeName}
            required
          />
           <button>Login
           </button>
           </form>
            
            </div>
        )
    }
}

export default withRouter (SinglePlayerLogin);