import './WorkPage.css';
import CompleteAppsCard from "../../components/complete-apps/CompleteAppsCard";
import feedbackUiImage from '../../assets/images/feedback-ui.png';
import ecommerceImage from '../../assets/images/ecommerce.png';
import ecommerceAPI from '../../assets/images/ecommerce-backend.png';
import hotel from '../../assets/images/Hotel.png';
import edgeLedger from '../../assets/images/edgeLedger.png';
import petAdoption from '../../assets/images/pet-adoption.png';

const WorkPage = () => {

    const feedbackList = ['ReactJs','Javascript','HTML','CSS'];
    const ecommerceList = ['ReactJs','Javascript','SpringBoot','MongoDB','HTML','CSS'];
    const ecommerceAPIList = ['SpringBoot','MongoDB'];
    const hotelUIList = ['HTML','CSS','JavaScript'];
    const edgeLedgerList =['HTML','CSS'];
    const petAdoptionList = ['PHP','HTML','CSS'];

    return (
        <div className='work-page'>
            <div className='work-page-wrapper'>
                <div className='font-size-large'><span className='primary-color'>/</span>projects</div>
                <div style={{marginTop: '14px', fontSize: '16px'}}>List of my projects</div>
                <div style={{marginTop: '68px', marginBottom: '48px'}} className='font-size-large'><span className='primary-color'>#</span>complete-apps</div>
                <div className='app-container'>
                    <CompleteAppsCard image={feedbackUiImage} stackList={feedbackList} navigateTo='https://feeback-ui.netlify.app/'
                                      name='Feedback UI' description='User can add, edit and remove the feedback'/>
                    <CompleteAppsCard image={ecommerceImage} stackList={ecommerceList} navigateTo='https://ecommerce-ls1b.onrender.com/'
                                      name='Ecommerce UI' description='Admin can add, edit and delete from database and user can see those items'/>
                    <CompleteAppsCard image={ecommerceAPI} stackList={ecommerceAPIList} navigateTo='https://ecommerce-rest.onrender.com/swagger-ui/index.html'
                                      name='Ecommerce API' description='Backend used for Ecommere UI '/>
                    <CompleteAppsCard image={hotel} stackList={hotelUIList} navigateTo='https://users.encs.concordia.ca/~s_harin/Soen287/hotel_website/index.html'
                                      name='Hotel UI' description='UI for Hotel TBT'/>
                    <CompleteAppsCard image={edgeLedger} stackList={edgeLedgerList} navigateTo='https://users.encs.concordia.ca/~s_harin/Soen287/Edge-ledger/index.html'
                                      name='Edge Ledger' description='Platform to provide financial assistance'/>
                    <CompleteAppsCard image={petAdoption} stackList={petAdoptionList} navigateTo='https://users.encs.concordia.ca/~s_harin/Soen287/PetAdoption/home.php'
                                      name='Pet Adoption' description='Academic project for pet adoption'/>
                </div>
            </div>
        </div>
    )
}

export default WorkPage;