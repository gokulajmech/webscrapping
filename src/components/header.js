import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
// import { SvgIcon } from '@mui/material';
function Header() {

    let navigate=useNavigate();
    const [value,setValue]=useState('');
    return <React.Fragment>
                <div className='header'>
                 <div className="home" onClick={()=>{navigate('/')}}>Home</div>
                    <div className='search-box'>
                    <input  className="search-input" type='text' placeholder='  Search'  onChange={(e)=>{setValue(e.target.value)}} />
                    <SearchIcon onClick={()=>{navigate('/display/'+value.toLowerCase())}}/>
                    </div>
                </div>
                &nbsp;
        </React.Fragment>
}

export default Header
