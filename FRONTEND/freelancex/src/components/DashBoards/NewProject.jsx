import React, { useContext, useState ,useEffect} from 'react';
import './NewProject.css';
import { Button, CircularProgress } from '@mui/material';
import { Usercontext } from '../../Usercontext';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Userservice from '../../services/Userservice';
const NewProject = ({ onSubmit }) => {
  const[valid,setValid]=useState(false);
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [user, setUser] = useContext(Usercontext);
const [project, setProject] = useState({
  clientId: user.id,     
  title: '',
  description: '',
  min_budget: 0,                 
  max_budget: 0,
  status: 'Open',                
  category: '',
  deadline: '',                  
  skills_required: '',           
  client_wallet: '',
  escrow_amount: 0,              
  currency: 'USD'                
});
useEffect(() => {
  if (user?.id) {
    setProject((prevProject) => ({
      ...prevProject,
      clientId: user.id,
    }));
  }
}, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!project.title || !project.description || !project.min_budget || !project.max_budget || !project.category ||!project.deadline ||!project.skills_required ||!project.client_wallet||!project.escrow_amount||!project.currency) {
      toast.warn('All fields are required.');
      setValid(false);
      return;
    }
    try {
      setLoading(true);
      setTimeout(async () => {
        // setProject({...project,clientId:user.id});
        console.log(user);
        console.log(project);
        let response = await Userservice.newproject(project);
        console.log(response);
        setLoading(false);
        if(response.data) {
          setLoading(false);
          toast.success('Project / Job posted successfully!', {autoClose: 500,});
          setTimeout(()=>{
            navigate("/cdashboard");
          },2000);
        }
        else
          toast.error('Error.');
      },2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error('An error occurred during account creation.');
    }
  };

  return (
    <>
    <form >
      <h1 style={{ textAlign: 'center', padding: '10px' }}>New Project</h1>

      <div>
        <label>Project Title</label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Minimum Budget</label>
        <input
          type="number"
          name="min_budget"
          value={project.min_budget}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>
      
      <div>
        <label>Maximum Budget</label>
        <input
          type="number"
          name="max_budget"
          value={project.max_budget}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label>Status</label>
        <select name="status" value={project.status} onChange={handleChange} required>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={project.category}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={project.deadline}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Skills Required</label>
        <input
          type="text"
          name="skills_required"
          value={project.skills_required}
          onChange={handleChange}
          placeholder="e.g., React, Node.js, Python"
        />
      </div>

      <div>
        <label>Client Wallet Address</label>
        <input
          type="text"
          name="client_wallet"
          value={project.client_wallet}
          onChange={handleChange}
          required
        />
      </div>

      

      <div>
        <label>Escrow Amount</label>
        <input
          type="number"
          name="escrow_amount"
          value={project.escrow_amount}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label>Currency</label>
        <input
          type="text"
          name="currency"
          value={project.currency}
          onChange={handleChange}
          placeholder="e.g., USD, EUR"
          required
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <Button type="submit" variant='contained' color='success' onClick={handleSubmit} disabled={loading}> {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> :'Submit' }</Button>
        <Button type="button" variant='contained' color='error'>Cancel</Button>
      </div>
    </form>
    <ToastContainer/>
    </>
  );
};

export default NewProject;
