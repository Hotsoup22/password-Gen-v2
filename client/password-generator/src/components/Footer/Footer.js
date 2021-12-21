import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdb-react-ui-kit';
export default function Footer(){
    
    return (
   
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} MIT 
        </MDBContainer>
      </div>
        
    )
}