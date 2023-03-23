import React from 'react';
import img1 from '../../../images/avatar/sumit.png'
import img2 from '../../../images/avatar/sadh.png'
import img3 from '../../../images/avatar/akash.png'
import img4 from '../../../images/avatar/salahuddin.png'
import img5 from '../../../images/avatar/riyadh.png'
import img6 from '../../../images/avatar/ferdous.png'
import img7 from '../../../images/avatar/almas.png'
const SingleTeamMember = ({ tm }) => {
    const { name, avatar, id } = tm;
    return (
        <div className="checkbox-container">
            {id == 1 && <img src={img1} className="team-avater" />}
            {id == 2 && <img src={img2} className="team-avater" />}
            {id == 3 && <img src={img3} className="team-avater" />}
            {id == 4 && <img src={img4} className="team-avater" />}
            {id == 5 && <img src={img5} className="team-avater" />}
            {id == 6 && <img src={img6} className="team-avater" />}
            {id == 7 && <img src={img7} className="team-avater" />}

            <p className="label">{name}</p>
        </div>
    );
};

export default SingleTeamMember;