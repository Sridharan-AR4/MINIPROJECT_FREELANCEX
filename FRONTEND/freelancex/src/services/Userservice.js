
import axios from "axios";

const API_URL_FL = "http://localhost:8080/freelancer";
const API_URL_CL = "http://localhost:8080/client";
const API_URL_P = "http://localhost:8080/project";
const API_URL_R = "http://localhost:8080/request";
class Userservice {
    
    async newuser(user){
        try{
            const response = await axios.post(API_URL_FL + "/newuser",user);
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async newclient(user){
        try{
            const response = await axios.post(API_URL_CL + "/newuser",user);
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async checkfreelancer(email,password){
        try{
            const response = await axios.get(API_URL_FL + "/checkuser",{
                params: {email,password},
            });
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async checkclient(email,password){
        try{
            const response = await axios.get(API_URL_CL + "/checkuser",{
                params: {email,password},
            });
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async newproject(project){
        try{
            const response = await axios.post(API_URL_P + "/newproject",project);
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async allprojects(){
        try{
            const response = await axios.get(API_URL_P + "/fetchallprojects");
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async openprojects(){
        try{
            const response = await axios.get(API_URL_P + "/fetchopenprojects");
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async ownprojects(clientId){
        try{
            const response = await axios.get(API_URL_P + "/ownprojects",{
                params:{clientId},
            });
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async newrequest(request){
        try{
            const response = await axios.post(API_URL_R + "/newrequest",request);
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async appliedprojects(freelancer_id){
        try{
            let response = await axios.get(API_URL_R + "/requestedprojects",{
                params:{freelancer_id},
            });
            return response;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async getProjectDetails(projectId) {
        try {
            const response = await axios.get(API_URL_P + "/getProjectDetails", {
                params: { projectId },
            });
            return response;
        } catch (error) {
            console.log("Error fetching project details:", error);
            throw error;
        }
    }
}
export default new Userservice();
