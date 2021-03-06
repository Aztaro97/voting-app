import React, {useState, useEffect} from 'react';
import UserDetails from './usersDetail'
import Candidat from './candidat'

const Userlist = () => {
    const [Users, setUsers] = useState([])

    

    useEffect(() => {
        setUsers(UserDetails)
       
    }, [])


    const handleVote = (candidatId) => {
        const VoteCandidat = Users.map( candidat => {
            if( candidatId === candidat.id ) {
                return Object.assign({}, candidat, {
                    vote: candidat.vote + 1
                })
            } else {
                return candidat
            }
        })

        setUsers(VoteCandidat)
    }

    let sortCandidat = Users.sort((a, b) => {
        return b.vote - a.vote;
      });

    const List = sortCandidat.map( ( user) => <Candidat id={user.id} name={user.name} vote={user.vote} title={user.title} urlImage={user.urlImage} handleVote={handleVote} />)

    return (
        <div>
            <div className="bg-dark text-white py-2 text-center">
                <h1 className="mb-1 text-light">USA election 2020</h1>
                <p>Choose your favourite president </p>
            </div>
            {List} 
        </div>
    )
}

export default Userlist;