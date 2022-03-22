import * as React from "react";
import Header from "./components/layout/header/index";
import Footer from "./components/layout/footer/index";
import Sidebar from "./components/layout/sidebar/index";
import Body from "./components/layout/body/index";
import {TextField,Button} from '@mui/material';
import "./App.css";

function App() {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [modelShow, setModelShow] = React.useState(true);
  return (
    <div className="App">
      <div className={`COverlay ${modelShow==false?'d-none':null}`}>
        <div className={`CModel`}>
          <div style={{width:"100%"}}>
            <h1>Let's get started</h1>
            <div className="text-left">
            <TextField id="outlined-basic" onChange={(e)=>{setName(e.target.value)}} label={<span><span>Name</span><span style={{color:"red"}}>*</span></span>} margin="normal" fullWidth variant="outlined" />
            <TextField id="outlined-basic" onChange={(e)=>{setEmail(e.target.value)}} label={<span><span>Email</span><span style={{color:"red"}}>*</span></span>} margin="normal" fullWidth variant="outlined" />
            <TextField id="outlined-basic" onChange={(e)=>{setPhone(e.target.value)}} label="Phone#" margin="normal" fullWidth variant="outlined" />
            <Button sx={{marginTop:"20px"}} onClick={()=>{
              if( name!=null && email!=null ){
                setModelShow(false)
              }
            }} variant="contained" color="error">Proceed Next</Button>
            </div>
          </div>
        </div>
      </div>
      <Header>
        <div className="d-flex">
          <Body />
        </div>
      </Header>
    </div>
  );
}

export default App;
