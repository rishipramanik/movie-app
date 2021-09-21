import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupsForm";

function NewMeetups(){
    const history = useHistory();

    function addMeetuphandler(meetupData){
        fetch('https://react-meetup-course-63d96-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type':'application/json'
            }
        }
        ).then(() =>{
            history.replace('/');
        })
    }
    return (
    <section>
    <h1>New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </section>
    )
}


export default NewMeetups;