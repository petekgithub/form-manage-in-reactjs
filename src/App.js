import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
     <Formik
      initialValues=
      {{
        firstName: 'Petek',
        lastName: 'Hami',
        email: 'petek@gmail.com',
        gender: 'female',
        hobies: []  // this type is an array because it tkes many data
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input name='firstName' value= {values.firstName} onChange={handleChange}/>

        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input name='lastName' value= {values.lastName} onChange={handleChange}/>

        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input name='email' value= {values.email} onChange={handleChange}/>

        <br />
        <br />

        <label htmlFor="gender">Gender</label>
        <br />

        <span>Male</span>
        <input 
        type='radio'
        name='gender' 
        value="male" 
        onChange={handleChange}
        checked={values.gender === 'male'}
        />

        <span>Female</span>
        <input  
        type='radio'
        name='gender' 
        value="female" 
        onChange={handleChange}
        checked={values.gender === 'female'}
        
        />

        <br />

        <div>
          <input type='checkbox' name='hobies' value='Fitness' onChange={handleChange} />
          Fitness
        </div>
        
        <div>
          <input type='checkbox' name='hobies' value='Yoga'onChange={handleChange} />
          Yoga
        </div>
        
        <div>
          <input type='checkbox' name='hobies' value='Cook' onChange={handleChange}/>
          Cook
        </div>
        
        <select 
        name='country' 
        values={values.country}
        onChange={handleChange}
        >
          <option value='turkey'>Turkey</option>
          <option value='germany'>Germany</option>
          <option value='netherlands'>Netherlands</option>
        </select>

        <br />
        <button type='submit'>Submit</button>

        <br />
        {JSON.stringify(values)}
      </form>
        )
      }
      </Formik>
    </div>
  );
}

export default App;
