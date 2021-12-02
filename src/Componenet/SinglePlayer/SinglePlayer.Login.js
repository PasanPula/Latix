import { useHistory } from 'react-router-dom';

function SinglePlayerLogin ({ name, OnChangeName}) {

  const history = useHistory();

  const onSubmit = (e) => 
  {
     e.preventDefault();
     history.push("/SinglePlayer/Create");
  }

  const onChange = (e) =>
  {
    OnChangeName(e.target.value);
  }
 

        return (
            <div>
           <form onSubmit={onSubmit}>
          
           <input 
           placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
           <button>Login
           </button>
           </form>
            
            </div>
        )

}

export default SinglePlayerLogin;