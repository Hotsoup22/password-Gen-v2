import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdb-react-ui-kit';
export default function Footer(){
    
    return (
   
        <div className="footer-copyright text-center py-3">
        <MDBFooter fluid>
         {new Date().getFullYear()} MIT 
        </MDBFooter>
      </div>
        
    )
}